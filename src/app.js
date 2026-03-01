const express = require('express');
const ticketsRouter = require('./routes/tickets');
const usersRouter   = require('./routes/user');
const Cors = require('cors');  // <--- import CORS middleware

const app = express();

app.use(Cors());  // <--- add CORS middleware

app.use(express.json());

app.use('/api/tickets', ticketsRouter);
app.use('/api/users', usersRouter);      // <--- mount user routes

app.get('/', (req, res) => res.send('Ticketing System API'));

module.exports = app;
