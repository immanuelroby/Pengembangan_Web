const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const PORT = 3443;

// Sertifikat self-signed (dibuat sendiri di komputer, lihat cara di panduan)
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

app.get('/', (req, res) => {
  res.send('Halo! Server Express (HTTPS) berjalan.');
});

https.createServer(options, app).listen(PORT, () => {
  console.log(`Server berjalan di https://localhost:${PORT}`);
});
