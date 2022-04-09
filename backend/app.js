const express = require('express');
const cors = require("cors");
const path = require('path');
const morgan = require('morgan');
const {createConnection} = require('./config/database')

const pendingIssuesRouter = require('./routes/pendingIssues');
const solvedIssuesRouter = require('./routes/solvedIssues');

const app = express();
const whitelist = ['http://localhost:3000', 'http://localhost:3001']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/issues/pending', pendingIssuesRouter);
app.use('/api/v1/issues/solved', solvedIssuesRouter);



app.listen(3002,async ()=>{
    await createConnection()
})
module.exports = app;
