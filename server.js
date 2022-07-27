const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

app.get('/greeting/:name', function(req, res) {
    res.send(req.params.name + '!' + ' It\'s so great to see you!');
  })

app.listen(port,() => {
    console.log('I am listening on port' , port);
})