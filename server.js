'use strict'

const Hapi = require('hapi');

//Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

//Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {
    return reply('hello world');
  }
});

//add second route
// server.route({
//   method: 'GET',
//   path: '/{name}',
//   handler: function (request, reply) {
//     reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
//   }
// });

//put, post
server.route({
  method: ['PUT', 'POST'],
  path: '/put',
  handler: function (request, reply) {
    reply('I did something');
  }
});

//Start server
server.start((err) => {

  if (err) {
    throw err;
  }

  console.log('Server running at: ', server.info.uri);
});
