// server.js (or server.mjs)
import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000; // Use PORT environment variable or default to 3000

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
