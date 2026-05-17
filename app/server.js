const express = require('express');
const app = express();

const version = process.env.APP_VERSION || 'Version 1';
const color   = process.env.APP_COLOR   || '#3498db';
const host    = process.env.HOSTNAME    || 'localhost';

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="3">
  <title>${version}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: ${color};
      color: white;
      font-family: 'Segoe UI', Arial, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      gap: 24px;
    }
    .version {
      font-size: 96px;
      font-weight: 900;
      letter-spacing: -2px;
      text-shadow: 0 4px 24px rgba(0,0,0,0.25);
    }
    .pod {
      font-size: 28px;
      opacity: 0.85;
      background: rgba(0,0,0,0.2);
      padding: 10px 28px;
      border-radius: 40px;
      letter-spacing: 1px;
    }
    .hint {
      font-size: 16px;
      opacity: 0.6;
      margin-top: 8px;
    }
  </style>
</head>
<body>
  <div class="version">${version}</div>
  <div class="pod">Pod: ${host}</div>
  <div class="hint">Seite aktualisiert automatisch alle 3 Sekunden</div>
</body>
</html>`);
});

app.listen(3000, () => console.log(`Running ${version} on :3000 (pod: ${host})`));
