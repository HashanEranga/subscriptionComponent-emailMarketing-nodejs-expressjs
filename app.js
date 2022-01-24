const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html")
})

app.post("/", function(req,res){
    const firstName = req.body.FName
    const lastName = req.body.LName
    const email = req.body.inputEmail
    res.send(`
        <h1>First Name : ${firstName}</h1>
        <h1>Last Name : ${lastName}</h1>
        <h1>Email : ${email}</h1>
    `)
})


app.listen(PORT, function(){
    console.log(`Server is running on port : ${PORT}`)
    console.log(`URL : https://localhost:${PORT}`)
})