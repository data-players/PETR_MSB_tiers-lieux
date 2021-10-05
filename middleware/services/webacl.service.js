const { WebAclService } = require('@semapps/webacl');

module.exports = {
  mixins: [WebAclService],
  settings: {
    baseUrl: process.env.SEMAPPS_HOME_URL,
    superAdmins: ['http://localhost:3000/persons/v.farcy72','http://localhost:3000/persons/simon.louvet.zen','https://data.petr-msb.data-players.com/persons/v.farcy72','https://data.petr-msb.data-players.com/simon.louvet.zen']
  },
  actions: {
    async addRightsToAll(ctx) {
      for (let containerConfig of containers) {
        const container = await ctx.call(
          'ldp.container.get',
          {
            containerUri: urlJoin(CONFIG.HOME_URL, containerConfig.path),
            accept: MIME_TYPES.JSON
          },
          {
            meta: { webId: 'system' }
          }
        );

        console.log('Adding rights for container', container);

        await ctx.call('webacl.resource.addRights', {
          webId: 'system',
          resourceUri: container.id,
          additionalRights: {
            anon: {
              read: true
            },
            anyUser: {
              read: true,
              write: true
            }
          }
        });

        if (container['ldp:contains'] && container['ldp:contains'].length > 0) {
          for (let resource of container['ldp:contains']) {
            if (resource && Object.keys(resource).length > 0) {
              console.log('Adding rights for resource ' + resource.id);

              if (containerConfig.path === '/users') {
                await ctx.call('webacl.resource.addRights', {
                  webId: 'system',
                  resourceUri: resource.id,
                  additionalRights: {
                    anon: {
                      read: true
                    },
                    user: {
                      uri: resource.id,
                      read: true,
                      write: true,
                      control: true
                    }
                  }
                });
              } else {
                await ctx.call('webacl.resource.addRights', {
                  webId: 'system',
                  resourceUri: resource.id,
                  additionalRights: {
                    anon: {
                      read: true
                    },
                    anyUser: {
                      read: true,
                      write: true
                    }
                  }
                });
              }
            }
          }
        }
      }
    }
  }
};
