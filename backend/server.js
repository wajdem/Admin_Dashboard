// const express = require("express");
require('dotenv').config()


//express app
const app = express();

app.get("/", (req, res) => {
    res.json({mssg: "Welcome Wajde!!"})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port',process.env.PORT );
})