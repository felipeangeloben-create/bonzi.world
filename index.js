// ========================================================================
// Server init
// ========================================================================

// Filesystem reading functions
const fs = require('fs-extra');

// Load settings
try {
	stats = fs.lstatSync('settings.json');
} catch (e) {
	// If settings do not yet exist
	if (e.code == "ENOENT") {
		try {
			fs.copySync(
				'settings.example.json',
				'settings.json'
			);
			console.log("Created new settings file.");
		} catch(e) {
			console.log(e);
			throw "Could not create new settings file.";
		}
	// Else, there was a misc error (permissions?)
	} else {
		console.log(e);
		throw "Could not read 'settings.json'.";
	}
}

// Load settings into memory
const settings = require("./settings.json");
// Setup basic express server
var express = require('express');
var app = express();
if (settings.express.serveStatic)
	app.use(express.static('./build/www'));
var server = require('http').createServer(app);
var https = require('https');
const VPNAPI_KEY = 'cd10f82529fc4b5b87a8c4f51ca0d186';

const checkVPN = async (req, res, next) => {
    let userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
    if (userIP.includes(',')) {
        userIP = userIP.split(',')[0].trim();
    }
    userIP = userIP.replace('::ffff:', '');

    if (userIP === '127.0.0.1' || userIP === '::1') return next();

    const url = `https://vpnapi.io/api/${userIP}?key=${VPNAPI_KEY}`;

    try {
        const apiData = await new Promise((resolve, reject) => {
            https.get(url, (response) => {
                let data = '';
                response.on('data', (chunk) => { data += chunk; });
                response.on('end', () => {
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        reject(e);
                    }
                });
            }).on('error', (err) => {
                reject(err);
            });
        });

        const { security, location } = apiData;

        const isMasked = 
            security.vpn === true || 
            security.proxy === true || 
            security.tor === true || 
            security.relay === true || 
            (location && location.service_type === "hosting");

        if (isMasked) {
            return res.status(403).send(`
                <h1>Access Denied</h1>
                <p>to access bonzi.world, please turn off your vpn.</p>
            `);
        }
        next();
    } catch (error) {
        next();
    }
};

// Init socket.io
var io = require('socket.io')(server);
var port = process.env.PORT || settings.port;

exports.io = io;

// Init sanitize-html
var sanitize = require('sanitize-html');

// Init winston loggers (hi there)
const Log = require('./log.js');
Log.init();
const log = Log.log;

// Load ban list
const Ban = require('./ban.js');
Ban.init();

// Start actually listening
server.listen(port, function () {
	console.log(
		"\n",
		"Server domain: localhost\n",
		"------------------------\n",
		"Server listening on port: " + port
	);
});
app.use(express.static(__dirname + '/public'));

app.post('/api/v1/identity/fingerprint/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./fingerprint.json')));
})

// ========================================================================
// Banning functions
// ========================================================================

// ========================================================================
// Helper functions
// ========================================================================

const Utils = require("./utils.js")

// ========================================================================
// The Beef(TM)
// ========================================================================

const Meat = require("./meat.js");
Meat.beat();

// Console commands
const Console = require('./console.js');
Console.listen();
