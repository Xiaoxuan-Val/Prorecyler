var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var trash = [
  {
    "name" : "glass",
    "type" : "recyclable",
    "pic" : "https://www.archdaily.com/catalog/us/products/10572/starphire-glass-interior-vitro-glass"
  },
  {
    "name" : "plastic",
    "type" : "recyclable",
    "pic" : "http://feelgrafix.com/data_images/out/25/948165-plastic.jpg"
  },
  {
    "name" : "orange",
    "type" : "nonrecyclable",
    "pic" : "https://purepng.com/photo/3317/food-orange"
  }
];