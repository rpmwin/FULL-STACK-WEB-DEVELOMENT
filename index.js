const express = require("express");
const app = express();
const port = 3000;

require('dotenv').config()

app.get("/", (req, res) => {
  res.send("hello World!!");
});

app.get("/about",(req, res) =>{
    res.send("<h1>hey this is about page...</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`this app is listening on port ${port}`);
});
