const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public/home.html');
    return res.sendFile(filePath);
});

app.get('/reserve', (req, res) => {
    const filePath = path.join(__dirname, 'public/reserve.html');
    return res.sendFile(filePath);
});

app.get('/tables', (req, res) => {
    const filePath = path.join(__dirname, 'public/tables.html');
    return res.sendFile(filePath);
});

app.listen(6969);
