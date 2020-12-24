const express = require('express');

// const path = require('path')
// const cookieParser = require("cookie-parser")
const cors = require('cors');


module.exports = (app) => {
    
    // app.use(express.static(path.join(__dirname, '../static')));
    
    app.use(cors());
    // app.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     next();
    //   });
    // {origin: "http://localhost:3000", allowedHeaders: ['Content-Type', 'Auth']}
    //   {origin: "http://localhost:3000"}
    // {allowedHeaders: ['Content-Type', 'Auth']}
    
    // app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    // app.use(cookieParser())

};



