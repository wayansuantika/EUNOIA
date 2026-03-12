const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable compression
app.use(compression());

// Serve static files from the `out` folder (static export build)
app.use(express.static(path.join(__dirname, 'out'), {
  maxAge: '1d', // Cache static assets for 1 day
  etag: false
}));

// Handle client-side routing: serve index.html for all non-file routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Serving static files from ${path.join(__dirname, 'out')}`);
});
