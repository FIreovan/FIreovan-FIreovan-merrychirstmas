const express = require('express');
const path = require('path');
const app = express();

// 靜態資源路徑
app.use(express.static(path.join(__dirname)));

// 任何路徑都回傳 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
