const createSlug = require('speakingurl');
const urlJoin = require('url-join');
const { getContainerFromUri } = require('@semapps/ldp');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config/config.js');
const geographicAreas = require('../geographic-areas.json');

module.exports = {
  name: 'sector-tagger',
  dependencies: ['ldp'],
  methods: {
    async tag(resourceUri, zipCode, city, country, oldData) {

      const sectorUri = await this.getSectorUri(zipCode, city, country);

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
      console.log('______manualSector',data['petr:manualSector'])
      if( data['pair:hasLocation'] && data['petr:manualSector']!=true) {
        console.log('______Tag Sector')
        await this.tag(
          resourceUri, 
          [data['pair:hasLocation']['pair:hasPostalAddress']['pair:addressZipCode']][0], 
          [data['pair:hasLocation']['pair:hasPostalAddress']['pair:addressLocality']][0], 
          [data['pair:hasLocation']['pair:hasPostalAddress']['pair:addressCountry']][0], 
          data
        );
      }
    },
    getCleanCityName(city) {
      return city.normalize("NFD").toUpperCase().replace(/-/g,' ');
    },
    getSectorName(zip, city, country) {
      if (! zip && ! city && ! country) {
        return "Indéterminé";
      }
      if ( country !== 'France' ) {
        return "Hors secteur";
      }
      let sector = null;
      if (zip) {
        sector = geographicAreas.find(d => d.zip_code.toString() === zip);
      }
      if (! sector && city) {
          sector = geographicAreas.find(
            d => this.getCleanCityName(d.city) === this.getCleanCityName(city)
          );
      }
      if (sector) {
        return sector.sector_name
      } else {
        if (zip) {
          return "Hors secteur";
        } else {
          return "Indéterminé";
        }
      }
    },
    async getSectorUri(zip, city, country) {
      const sectorName = this.getSectorName(zip, city, country);

      if( sectorName ) {
        const sectorSlug = createSlug(sectorName, {lang: 'fr', custom: {'.': '.'}});
        const sectorUri = urlJoin(CONFIG.HOME_URL, 'sectors', sectorSlug);

        // Create sector if it doesn't exist yet
        const sectorExists = await this.broker.call('ldp.resource.exist', {resourceUri: sectorUri});
        console.log('_____________sectorSlug',sectorSlug)
        console.log('_____________containerUri',urlJoin(CONFIG.HOME_URL, 'sectors'))
        console.log('_____________sectorName',sectorName)
        if (!sectorExists) {
          await this.broker.call('ldp.container.post', {
            resource: {
              '@context': {
                '@vocab': 'https://data.petr-msb.data-players.com/ontology#',
                'pair': 'http://virtual-assembly.org/ontologies/pair#'
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
