var mongoose = require('mongoose');
var trashSchema = mongoose.Schema(
    {
        "name": String,
        "type": String,
        "pic": String
    }
);
mongoose.model('trash', trashSchema);


var trashdata =[
    {
        "name": "glass",
        "type": "recyclable",
        "pic": "https://www.archdaily.com/catalog/us/products/10572/starphire-glass-interior-vitro-glass"
    },
    {
        "name": "plastic",
        "type": "recyclable",
        "pic": "http://feelgrafix.com/data_images/out/25/948165-plastic.jpg"
    },
    {
        "name": "orange",
        "type": "nonrecyclable",
        "pic": "https://purepng.com/photo/3317/food-orange"
    }]
;