//INIT CONST VARS
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const path = require('path');
// const readline = require('readline');
const { urlencoded } = require('express');
const app = express();
// const multer = require("multer");
// const upload = multer();
const cors = require('cors');
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
const dotenv = require('dotenv');
dotenv.config();

//STARTUP SERVERS
httpServer.listen(80, () => {
        console.log('HTTP Server running on port 80');
});
httpsServer.listen(443, () => {
        console.log('HTTPS Server running on port 443');
});

//SETUP EXPRESS
app.use(express.static(path.join(__dirname, 'build')));
app.use(urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors())
app.use(express.json())
app.use(require('body-parser').json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


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

app.post('/gpt-gen/', (req, res) => {
    console.log("GPT GEN REQUESTED")
    try {
        let input = req.body.input;
        input = input.replace(/\n/g, " ");
        input = input.replace(/\'/g, " ");
        input = input.replace(/\"/g, "");
        const scmd = './scripts/openai-request ' + process.env.OPENAI_API_KEY + " '" + input + "'";
        console.log(scmd);
        let output = "";
        exec(scmd, (err, stdout, stderr) => {
            if (err !== null) { console.log('exec error: ' + err); }
            console.log("FINISHED:")
            console.log(stdout)
            outputjsonstring = stdout;
            res.json(JSON.parse(outputjsonstring));
        });
    } catch (error) { console.log(error); }
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});