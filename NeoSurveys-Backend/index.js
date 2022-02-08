const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const {checkDB} = require('./controllers/dataBaseController')

const app = express();
const port = process.env.port || 8000;

const homeRoute = require('./routes/homeRoutes');
const surveyRoutes = require('./routes/surveyRoutes');

app.use('/', homeRoute);
app.use('/api/surveys', surveyRoutes);

app.use(express.json);
app.use(helmet());
app.use(morgan("dev"));

app.listen(port, ()=>{
    checkDB();
    console.log(`Server started on port ${port} 🚀`);
});