const express = require('express');
const app = express();
const router = require('./router/routes');
const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:5173'],
};

app.use(cors(corsOptions));
app.use('/', router);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening in on port ${PORT}`));
