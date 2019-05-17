const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static("public"));

app.get('/', function(req, res) {
 res.send('Hello Carl!')
})


app.get('/api', function(req, res){   //res.send sends info from server to browser (client)
    
    
    const userName = req.query.username;            //put queries, parameters here // send over JSON objects or files aswell (advanced)
    const userId = req.query.id;
    const message = req.query.message;
    console.log(userName)
    const reply = `${userName} with id of ${userId} is saying ${message}`
    res.send(reply)


    
})
app.get("/showprofile/:username", function (req, res) {
    const user = req.params.username;
    console.log(user);
    res.send("show profile working");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))