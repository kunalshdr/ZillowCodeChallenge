import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx';
import ImageContainer from './ImageContainer.jsx';
import "./main.scss"
import "./text-area.scss"

ReactDOM.render( < App / > , document.getElementById('appContainer'));

console.log("Image Container");

ReactDOM.render( < ImageContainer / > , document.getElementById('imgContainer'));