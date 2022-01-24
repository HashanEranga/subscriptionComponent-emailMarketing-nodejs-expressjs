const express = require("express")
const app = express()
const PORT = 3000

app.use(express.static("public"))

app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html")
})


app.listen(PORT, function(){
    console.log(`Server is running on port : ${PORT}`)
    console.log(`URL : https://localhost:${PORT}`)
})