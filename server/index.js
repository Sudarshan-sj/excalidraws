const http = require("http");
const path = require("path");
const fs = require("fs");
var bodyParser = require('body-parser')

const express = require("express");
const { strict } = require("assert");

const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
console.log(__dirname);
app.use(bodyParser.json());
global.images = []
// put the HTML file containing your form in a directory named "public" (relative to where this script is located)
app.use(express.static(path.join(__dirname, "build")));
app.use("/savedimages", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'build',"/index.html")));
app.post("/upload",(req,res)=>{
    console.log(req.body)
    global.images.push(`out${req.body.counter}.png`)
    var base64Data = req.body.dataURL.replace(/^data:image\/png;base64,/, "");
    require("fs").writeFile(`./public/out${req.body.counter}.png`, base64Data, 'base64', function(err) {
    console.log(err);
});
});
app.get("/savedimages",(req,res)=>res.sendFile(path.join(__dirname, 'public',"/savedimages.html")));