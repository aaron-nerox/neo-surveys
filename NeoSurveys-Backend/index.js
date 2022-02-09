const Joi = require('joi');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const {checkDB} = require('./controllers/dataBaseController')

const app = express();
const port = process.env.port || 8000;

const homeRoute = require('./routes/homeRoutes');
const surveyRoutes = require('./routes/surveyRoutes');

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

app.use('/', homeRoute);
app.use('/api/surveys', surveyRoutes);

app.listen(port, ()=>{
    checkDB();
    console.log(`Server started on port ${port} 🚀`);
});