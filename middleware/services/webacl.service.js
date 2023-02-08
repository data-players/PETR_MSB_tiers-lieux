const { WebAclService } = require('@semapps/webacl');

module.exports = {
  mixins: [WebAclService],
  settings: {
    baseUrl: process.env.SEMAPPS_HOME_URL,
    superAdmins: [
      'http://localhost:3000/persons/v.farcy72',
      'http://localhost:3000/persons/simon.louvet.zen',
      'http://localhost:3000/persons/simon.louvet.zen',
      'http://localhost:3000/persons/bastien.siguier',
      'https://data.petr-peps.data-players.com/users/v.farcy72',
      'https://data.petr-peps.data-players.com/users/simon.louvet.zen',
      'https://data.petr-peps.data-players.com/users/simon.louvet.test',
      'https://data.petr-peps.data-players.com/users/pierre',
      'https://data.petr-peps.data-players.com/users/bastien.siguier'
    ]
  }
};
