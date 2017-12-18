const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

// app.use()
app.listen(PORT, () => console.log(`listening on ${PORT}`));
app.get('/', (req, res) => {
  res.json('hey');
});