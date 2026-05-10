const fs = require('fs-extra');

try {
	stats = fs.lstatSync('settings.json');
} catch (e) {
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
	} else {
		console.log(e);
		throw "Could not read 'settings.json'.";
	}
}

const settings = require("./settings.json");
var express = require('express');
var app = express();
var https = require('https');

if (settings.express.serveStatic)
    app.use(express.static('./build/www'));
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || settings.port;

exports.io = io;

var sanitize = require('sanitize-html');

const Log = require('./log.js');
Log.init();
const log = Log.log;

const Ban = require('./ban.js');
Ban.init();
server.listen(port, function () {
	console.log(
		"\n",
		"Server domain: localhost\n",
		"------------------------\n",
		"Server listening on port: " + port
	);
});
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get('/api/v1/', async (req, res) => res.sendStatus('hello world'))
app.get('/api/v1/rooms/',  async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./rooms.json')));
})
app.post('/api/v1/rooms/',  async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./rooms.json')));
})
app.get('/api/v1/identity/user/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./user.json')));
})
app.post('/api/v1/identity/user/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./user.json')));
})
app.get('/api/v1/identity/fingerprint/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./fingerprint.json')));
})
app.post('/api/v1/identity/fingerprint/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./fingerprint.json')));
})
app.get('/api/v1/session/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./session.json')));
})
app.post('/api/v1/session/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./session.json')));
})
app.get('/api/v1/login/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./logins.json')));
})
app.post('/api/v1/login/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./logins.json')));
})
app.get('/api/v1/login/register/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./register.json')));
}) 
app.post('/api/v1/login/register/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./register.json')));
}) 
app.get('/api/v1/login/forgot/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./forgot.json')));
})
app.post('/api/v1/login/forgot/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./forgot.json')));
})
app.get('/api/v1/unload/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./unload.json')));
})
app.post('/api/v1/unload/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(require('./unload.json')));
})


app.post( "/api/v2/login/", async ( req, res ) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.username,
            req.body.password
        );
        const token = await user.generateAuthToken();
        res.send( {
            user,
            token,
        } );
    } catch ( e ) {
        res.status( 400 ).send( {
            error: "Catch error",
            e,
        } );
    }
} );

const Utils = require("./utils.js")

const Meat = require("./meat.js");
Meat.beat();

const Console = require('./console.js');
Console.listen();
