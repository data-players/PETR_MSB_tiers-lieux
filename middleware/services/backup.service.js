const path = require('path');
const BackupService = require('@semapps/backup');
const fs = require('fs');
let Client = require('ssh2-sftp-client');
require('dotenv-flow').config();
const CONFIG = require('../config');

console.log('fuseki-backup path',path.resolve(__dirname, '../fuseki-backups'));

module.exports = {
  mixins: [BackupService],
  settings: {
    localServer: {
      fusekiBackupsPath: CONFIG.BACKUP_FUSEKI_DATASETS_PATH
      // otherDirsPaths: {
      //   uploads: path.resolve(__dirname, '../uploads')
      // }
    },
    cronJob: {
      time: '15 4 * * *',
      timeZone: 'Europe/Paris'
    }
  },
  actions: {
    syncWithRemoteServer(ctx) {
      return new Promise(async (resolve, reject) => {
        try {
          let sftp = new Client();

          await sftp.connect({
            host: CONFIG.BACKUP_SERVER_HOST,
            port: CONFIG.BACKUP_SERVER_PORT,
            username: CONFIG.BACKUP_SERVER_USER,
            password: CONFIG.BACKUP_SERVER_PASSWORD
          });

          fs.readdir(ctx.params.path, async function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
                reject('Unable to scan directory: ' + err.message)
            }
            const now = Date.now();
            files = files.map(function (fileName) {
              return {
                name: fileName,
                diff: (now - fs.statSync(ctx.params.path + '/' + fileName).mtime) / 1000
              };
            }).filter(f=>f.diff<60)

            for (var file of files) {
              await sftp.put(ctx.params.path + '/' +file.name, CONFIG.BACKUP_SERVER_PATH +file.name);
            }

            resolve()
          });
        } catch (e) {
          reject (e)
        }
      });
    }
  }
};