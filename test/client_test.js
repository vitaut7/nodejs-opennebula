var client = require('../lib/client.js');

var aClient = new client.Client('neoadmin:33333sdsf', 'http://10.1.81.235:2633/RPC2');

aClient.call('neo.host.info', [1], function (oneResponse) {
  console.log(oneResponse.success);
  console.log(oneResponse.msg);
});