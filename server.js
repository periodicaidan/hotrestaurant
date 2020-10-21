const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const reservations = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.get('/api/tables', (req, res) => {
    return res.json(reservations.slice(0, 5));
});

app.post('/api/tables', (req, res) => {
    console.log(req.body);
    const tablesAvailable = reservations.length < 5;
    reservations.push(req.body);
    return tablesAvailable;
});

app.get('/api/waitlist', (req, res) => {
    return res.json(reservations.slice(5));
});

app.post('/api/clear', (req, res) => {
    reservations.splice(0, reservations.length);
});

app.listen(PORT);
