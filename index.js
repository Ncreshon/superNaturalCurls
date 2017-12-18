const express = require('express');
const PORT = process.env.PORT;
const app = express();


app.listen(PORT, () => console.log(`listening on ${PORT}`));
app.get('/', (req, res) => {
  res.json('hey');
});