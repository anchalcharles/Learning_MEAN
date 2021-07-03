const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db.js');
const routes = require('../backend/routes/routes.js');

const app = express();
app.use(bodyparser.json());
app.use(cors({
    origin: 'http://localhost:4201'
}));
app.listen(3000, () => console.log("server is starting on 3000 port"));
app.use('/api/discussions', routes);