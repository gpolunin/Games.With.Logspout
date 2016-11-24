const express = require('express');
const bodyParser = require('body-parser');
const dgram = require('dgram');

const app = express();
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
    var address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(3001);

app.use(bodyParser.json());


app.get('/*', function (req, res) {
    console.log('This log collector. Post logs to it.');
    res.send('This log collector. Post logs to it.');
});

app.post('/log', function (req, res) {
    console.log(req.body);
    res.send('This log collector. Post logs to it in json.')
});

app.listen(3000, function () {
    console.log('Log collector is listening on port 3000!')
});


