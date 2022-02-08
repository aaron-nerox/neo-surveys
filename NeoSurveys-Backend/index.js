const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = process.env.port || 9000;

app.use(express.json);
app.use(helmet());
app.use(morgan("dev"));

app.listen(port, ()=>{
    console.log(`Server started on port ${port} 🚀`);
});