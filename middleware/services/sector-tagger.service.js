const createSlug = require('speakingurl');
const urlJoin = require('url-join');
const { getContainerFromUri } = require('@semapps/ldp');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config');
const departments = require('../departments.json');

module.exports = {
  name: 'sector-tagger',
  dependencies: ['ldp'],
  methods: {
    async tag(resourceUri, zipCode, oldData) {
      
      const sectorUri = await this.getSectorUriFromZip(zipCode);

      if ( oldData['petr:hasSector'] !== sectorUri ) {

      await this.broker.call('ldp.resource.put', {
        resource: {
          ...oldData,
          'petr:hasSector': sectorUri
        },
        contentType: MIME_TYPES.JSON,
        webId: 'system'
      });
      }
    },
    async tagOrganization(resourceUri, data) {
      if( data['pair:hasLocation'] ) {
        await this.tag(resourceUri, [data['pair:hasLocation']['pair:hasPostalAddress']['pair:addressZipCode']][0], data);
      }
    },
    getSectorNameFromZip(zip) {
      if (zip) {
        const departmentNumber = zip.toString().slice(0, 2);
        const department = departments.find(d => d.num_dep.toString() === departmentNumber);
        if (department) return department.sector_name;
      }
    },
    async getSectorUriFromZip(zip) {
      const sectorName = this.getSectorNameFromZip(zip);

      if( sectorName ) {
        const sectorSlug = createSlug(sectorName, {lang: 'fr', custom: {'.': '.'}});
        const sectorUri = urlJoin(CONFIG.HOME_URL, 'sectors', sectorSlug);

        // Create sector if it doesn't exist yet
        const sectorExists = await this.broker.call('ldp.resource.exist', {resourceUri: sectorUri});
        if (!sectorExists) {
          await this.broker.call('ldp.resource.post', {
            resource: {
              '@context': {
                '@vocab': 'http://petr.org#'
              },
              '@type': 'Sector',
              'pair:label': sectorName
            },
            containerUri: urlJoin(CONFIG.HOME_URL, 'sectors'),
            slug: sectorSlug,
            contentType: MIME_TYPES.JSON,
            webId: 'system'
          });
        }
        return sectorUri;
      }
    }
  },
  events: {
    async 'ldp.resource.created'(ctx) {
      
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