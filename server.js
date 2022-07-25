import express from 'express';

const app = express();

app.get('/', (req, res) => 
res.json({
    status:200,
    alive:true
})
);

module.exports = app