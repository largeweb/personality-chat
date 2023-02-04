//INIT CONST VARS
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
// const path = require('path');
// const readline = require('readline');
const { urlencoded } = require('express');
const app = express();
// const multer = require("multer");
// const upload = multer();
const port = 80;
const exec = require('child_process').exec;
const privateKey = fs.readFileSync('/etc/letsencrypt/live/personality.chat/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/personality.chat/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/personality.chat/chain.pem', 'utf8');
const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca
};
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

//STARTUP SERVERS
httpServer.listen(80, () => {
        console.log('HTTP Server running on port 80');
});
httpsServer.listen(443, () => {
        console.log('HTTPS Server running on port 443');
});

//SETUP EXPRESS
// app.use(express.static(path.join(__dirname, 'build')));
app.use(urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static('public'));

// Redirect all HTTP traffic to HTTPS
app.use((req, res, next) => {
  if (req.secure) {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
});

// // Serve your React app
// app.use(express.static(path.join(__dirname, 'build')));

// app.listen(80, () => {
//   console.log('Listening on port 80 (http)');
// });


//ROUTES
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});