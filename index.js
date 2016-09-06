// error management
process.on('uncaughtException', function(err) {
    console.log('An unknown error occured', err);
    process.exit(1);
});

// get the configuration
try {
    var config = require('./config.js');
} catch (e) {
    console.log('Failed to import the configuration');
    process.exit(1);
}

// try to start the server
try {
    var io = require('socket.io').listen(config.port);
} catch (e) {
    console.log('Failed to start the socket server');
    process.exit(1);
}
