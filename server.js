const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

const answer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"] 


app.get('/greeting/:name', function(req, res) {
    res.send(req.params.name + '!' + ' It\'s so great to see you!');
  })


  app.get('/tip/:total/:tipPercentage',(req,res)=>{
    let tip = parseInt(req.params.total)*(parseInt(req.params.tipPercentage)/100);
    res.send(`${tip}`);
})

app.get('/magic/:question', (req, res) => {
    res.send(req.params.question + '?' + `<h1>${answer[Math.floor(Math.random() * answer.length) - 1]}</h1>`)
})


app.listen(port,() => {
    console.log('I am listening on port' , port);
})