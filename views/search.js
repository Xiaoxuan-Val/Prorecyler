var mongoose = require('mongoose');
var Trash = mongoose.model('trashdb');

var submit = document.getElementById('search-bar-submit');

submit.addEventListener('click', (req, res) => {
    var text = document.getElementById("text").value;
    if (text == null || text.replace(/(^s*)|(s*$)/g, "").length == 0) {
        Trash.find((err, trashs) => {
            if (err) {
                res.sendStatus(500);
            } else {
                // res.send(trash);
                res.render('trash', {
                    title: 'Registered Trash',
                    trashs: trashs
                });
            }
        });
    } else {
        
        Trash.find({ name: text }, (err, trashs) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.render('trash', {
                    trashs: trashs
                })
            }
        });
    }
});

// submit.onclick = () => {
//     var text = document.getElementById("text").value;

//     findText(text);
// };

// function findText(text) {
//     var url = '/trashs'
// };