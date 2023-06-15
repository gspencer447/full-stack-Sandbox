const express = require('express')
const app = express() //This is an instance of the express method

//MIDDLEWARE
app.use(express.json())

app.get("/", (request, response)=> {//First has to be a request and the second always has to be response
    response.write("<h1> Home for SuperHero App </h1>")
    response.status(200)
    response.end()
})

app.listen(3001, ()=> {
    console.log("server is listening at port 3001")
})