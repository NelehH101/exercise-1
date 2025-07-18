const express = require('express');
const app = express();
app.use(express.json());

// POST
app.post('/products', (req,res) => {
    res.json({message: 'This is the POST product path'});
});

app.post('/users', (req,res) => {
    res.json({message: 'This is the POST users path'});
});


// PUT
app.put('/products', (req,res) => {
    res.json({message: 'This is the PUT product path'});
});

app.put('/users/:id', (req,res) => {
    const userId = req.params.id;
    res.json({message: 'This is the PUT users path'});
});

// PATCH
app.patch('/products', (req,res) => {
    res.json({message: 'This is the PATCH product path'});
});

app.patch('/users/:id', (req,res) => {
    const userId = req.params.id;
    res.json({message: 'This is the PATCH users path'});
});

// DELETE
app.delete('/products', (req,res) => {
    res.json({message: 'This is the DELETE product path'});
});

app.delete('/users/:id', (req,res) => {
    const userId = req.params.id;
    res.json({message: 'This is the DELETE users path'});
});

app.listen(3000, () => console.log("SHOPLEFT server running"));