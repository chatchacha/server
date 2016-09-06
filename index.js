// get utilities
try {
    process.stdout.write('- Loading dependencies... ');

    var colors = require('colors');
    var fs = require('fs');

    console.log('OK'.green);
} catch (e) {
    handleError(e);
}

// get the configuration
try {
    process.stdout.write('- Importing local configuration... ');

    var config = require('./config.js');

    console.log('OK'.green);
} catch (e) {
    handleError(e);
}

// try to start the server
try {
    process.stdout.write('- Starting socket.io... ');

    var io = require('socket.io').listen(config.port);
    io.sockets.on('ready', function () {
        console.log('OK'.green);
    });
} catch (e) {
    handleError(e);
}

// error management
process.on('uncaughtException', function(e) {
    if (io) {
        io.close();
    }

    handleError(e);
});

/**
 * Handles an exception
 *
 * @param {Object} e Exception
 */
function handleError(e) {
    console.log('FAIL'.red + "\n");
    console.log(e.message.bgRed);
    console.log('Please make sure you followed the installation instructions in README.md. For more details, please refer to error.log'.bgRed);
    fs.writeFileSync('error.log', e.stack);
    process.exit(1);
}
