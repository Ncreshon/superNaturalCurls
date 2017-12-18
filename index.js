const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const PORT = process.env.PORT || 4500;
const app = express();

app.use(express.static(path.join(__dirname, '/client')));
app.listen(PORT, () => console.log(`listening on ${PORT}`));
// app.get('/', (req, res) => {
//   res.json('hey');
// });