const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

app.get('/greeting/:name', function(req, res) {
    res.send(req.params.name + '!' + ' It\'s so great to see you!');
  })

  app.get('/tip/:total/:tipPercentage',(req,res)=>{
    let tip = parseInt(req.params.total)*(parseInt(req.params.tipPercentage)/100);
    res.send(`${tip}`);
})

app.listen(port,() => {
    console.log('I am listening on port' , port);
})