import express from 'express';

const app = express();

app.listen(3000, () => 
console.log('Servidor iniciado na porta 3000')
);

app.get('/', (req, res) => 
res.json({
    "Status":200,
    alive:true
})
);