const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

app.get('/',(req,res)=>{
    res.send('<h1> 99 Bottles of Beer on the Wall </h1>' + 
                '<h2> 99 Bottles of Beer</h2> <h3> <a href= http://localhost:3000/98> Take one down, pass it around. </a> </h3> ' + 
                '<h2> 98 Bottles of Beer on the wall </h2> ')
});

app.get('/:number_of_bottles',(req,res)=>{
    if(parseInt(req.params.number_of_bottles)===0){
        res.send('<h1> No more bottles of Beer on the wall </h1> <h2> No more bottles of Beer.</h2> <h3> <a href=http://localhost:3000/> Go to the store and buy some more, </a>' + '<h3> 99 bottles of Beer on the Wall.</h3>' );
    }
    else{
        let oneLess=(parseInt(req.params.number_of_bottles)-1);
        res.send(`<h1> ${req.params.number_of_bottles} Bottles of Beer on the Wall </h1> <h2> ${req.params.number_of_bottles} Bottles of Beer <h2> <h3> <a href= http://localhost:3000/${oneLess}>Take one down, pass it around. </a> </h3>` + `<h2> ${oneLess} Bottles of Beer on the Wall. </h2> `);
    }
});


app.listen(port,() => {
    console.log('I am listening on port' , port);
})