const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var newListItems =[]

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index',{name:"Chandru",newListItems});
});

app.post('/', (req, res) =>{

    newListItems.push(req.body.name)
    console.log(newListItems);
    
    // res.render('index',{newListItems});
    res.redirect('/');
});
app.listen(3000,()=>{
    console.log("listening on port 3000");
    
})

