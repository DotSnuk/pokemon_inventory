const express = require('express');
const app = express();
const router = require('./router/routes');
const cors = require('cors');
const path = require('path');
const corsOptions = {
  origin: ['http://localhost:5173'],
};
require('dotenv').config();

app.use(express.json());
app.use('/avatars', express.static(path.join(__dirname, '/assets/trainers/')));

app.use(cors(corsOptions));
app.use('/', router);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening in on port ${PORT}`));
