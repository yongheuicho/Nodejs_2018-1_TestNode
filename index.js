let nPort = 3000;
let sHost = 'localhost';
const myServer = require('./myServer');
const myRouter = require('./myRouter');
const myHandlers = require('./myHandlers');

let handle = {};
handle['/'] = myHandlers.start;
handle['/start'] = myHandlers.start;
handle['/hello'] = myHandlers.hello;
myServer.start(nPort, sHost, myRouter.route, handle);