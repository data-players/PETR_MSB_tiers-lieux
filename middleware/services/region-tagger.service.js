const createSlug = require('speakingurl');
const urlJoin = require('url-join');
const { getContainerFromUri } = require('@semapps/ldp');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config');
const departments = require('../departments.json');

module.exports = {
  name: 'region-tagger',
  dependencies: ['ldp'],
  methods: {
    async tag(resourceUri, zipCodes, oldData) {
      let regionsUris = [];

      for( let zipCode of zipCodes ) {
        const regionUri = await this.getRegionUriFromZip(zipCode);
        if( regionUri ) regionsUris.push(regionUri);
      }

      await this.broker.call('ldp.resource.put', {
        resource: {
          ...oldData,
          'pair:hasLocation': regionsUris
        },
        contentType: MIME_TYPES.JSON,
        webId: 'system'
      });
    },
    async tagOrganization(resourceUri, data) {
      console.log('--- tagOrganization-resourceUri', resourceUri );
      console.log('--- tagOrganization-place', data );
      if( data['pair:hasLocation'] ) {
        await this.tag(resourceUri, [data['pair:hasLocation']['pair:hasPostalAddress']['pair:addressZipCode']], data);
      }
    },
    getRegionNameFromZip(zip) {
      console.log('--- getRegionNameFromZip', zip );
      if (zip) {
        const departmentNumber = zip.toString().slice(0, 2);
        const department = departments.find(d => d.num_dep.toString() === departmentNumber);
        if (department) return department.region_name;
      }
    },
    async getRegionUriFromZip(zip) {
      const regionName = this.getRegionNameFromZip(zip);
      console.log('--- getRegionUriFromZip-1', zip, regionName );

      if( regionName ) {
        const regionSlug = createSlug(regionName, {lang: 'fr', custom: {'.': '.'}});
        const regionUri = urlJoin(CONFIG.HOME_URL, 'regions', regionSlug);
        
        console.log('--- getRegionUriFromZip-2', regionSlug, regionUri );

        // Create region if it doesn't exist yet
        console.log(regionSlug, regionUri);
        const regionExists = await this.broker.call('ldp.resource.exist', {resourceUri: regionUri});
        if (!regionExists) {
          await this.broker.call('ldp.resource.post', {
            resource: {
              '@context': {
                '@vocab': 'http://virtual-assembly.org/ontologies/pair#'
              },
              '@type': 'Place',
              label: regionName
            },
            containerUri: urlJoin(CONFIG.HOME_URL, 'regions'),
            slug: regionSlug,
            contentType: MIME_TYPES.JSON,
            webId: 'system'
          });
        }

        return regionUri;
      }
    }
  },
  events: {
    async 'ldp.resource.created'(ctx) {
      
      console.log('--- ldp.resource.created');
      
      const { resourceUri, newData } = ctx.params;

      switch(getContainerFromUri(resourceUri)){
        case CONFIG.HOME_URL + 'organizations':
          await this.tagOrganization(resourceUri, newData);
          break;
      }
    },
    async 'ldp.resource.updated'(ctx) {
      const { resourceUri, newData } = ctx.params;

      switch(getContainerFromUri(resourceUri)){
        case CONFIG.HOME_URL + 'organizations':
          await this.tagOrganization(resourceUri, newData);
          break;
      }
    }
  }
};