import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import HelloWorld from "./HelloWorld";
import axios from 'axios'

const path = require('path');

const app = express();


app.use(express.static(path.resolve(__dirname, '../dist')));


app.get('**', (request, response) => {
    axios.get('https://api.github.com/users/kunalshdr').then(data => {
        const app = renderToString(<HelloWorld />);
        response.send(getHtmlContent(app));
    });
});

app.listen(3000);

function getHtmlContent(app) {
    return `
        <html>
            <head>
                <title> Universal App Example </title>
            </head>
            <body>
                <div id = 'root'> ${app} </div>
                <script src = './bundle.js'></script>
            </body>
        </html>
    `;
}


