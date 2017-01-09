import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Query from '../models/query-model'

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
app.use(bodyParser.json());

app.use(express.static(process.env.CLIENT_PATH));

app.get('/query', (req, res) => {
    let queries = Query.find().sort({x:-1});
    return res.status(200).json(queries[0]);
});

app.put('/query', (req, res) => {
    if (!req.body.query) {
        return res.status(422).json({
            message: 'Missing field: query'
        });
    }

    Query.findOneAndUpdate({}, {$set: {
        query: req.body.query
    }}, (err, query) => {
        if (err) {
            return res.status(500).json({message: 'Internal server error'});
        }
        return res.status(202).json("Updated");
    })
})

function runServer() {
    let databaseUri = process.env.DATABASE_URI || global.databaseUri || 'mongodb://localhost:27017/next-search';
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUri).then(function() {
     app.listen(PORT, HOST, (err) => {

        if (err) {
            console.error(err);
            return(err);
        }
        const host = HOST || 'localhost';
        console.log(`Listening on ${host}:${PORT}`);
    });
 });
}

if (require.main === module) {
    runServer();
}