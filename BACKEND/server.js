const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// dotenv config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express()

// middlewares
app.use(express.json());
app.use(morgan('dev'))

// routes
app.use('/api/v1/user/', require("./routes/Routes"));
app.use('/api/v1/admin/', require("./routes/adminRoutes"));
app.use('/api/v1/doctor/', require("./routes/doctorRoutes"));

// port
const port = process.env.PORT || 5000;

// listen port
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  });
  