const express = require('express');
const app = express();
const router = require('./routes/index.js');
const cors = require('cors');

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use(cors())
router(app);

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
})