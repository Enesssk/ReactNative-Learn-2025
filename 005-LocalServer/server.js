//const express = require('express');
import express from 'express';

const app = express();

app.get('/enes', (req,res) => {
    res.send('Hello World!');
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on Port", PORT)
})
