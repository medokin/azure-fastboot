const FSNotifier = require('fastboot-fs-notifier'),
      FastBootAppServer = require('fastboot-app-server'),
      distPath = 'dist';

let notifier = new FSNotifier({
  targetDir: distPath
});

let server = new FastBootAppServer({
  notifier: notifier,
  distPath: distPath,
  gzip: true,
  workerCount: 1
});

server.start();
