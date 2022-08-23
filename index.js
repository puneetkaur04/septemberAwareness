const express = require("express");
const path = require("path");

const app = new express();


app.use(express.static('public'));

app.listen(4000, () => {
    console.log('App listening on port 4000');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/', (req, res) => {
    res.render('about');
});

app.get('/', (req, res) => {
    res.render('contact');
});

app.get('/', (req, res) => {
    res.render('post');
});

