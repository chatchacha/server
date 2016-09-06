var config = require('./config.js');
require('socket.io').listen(config.port);