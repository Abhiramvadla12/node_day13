let express = require("express");
let app = express();
let cors = require('cors');
let fs = require('fs')
app.use(cors());
app.get("/",(req,res)=>{
    fs.readFile("./resturantContent.json","utf-8",(err,data)=>{
        if(err){
            res.send(err.message);
        }
        else{
            console.log(JSON.parse(data));
            res.send(JSON.parse(data));
        }
    });

})

let port = 3008;
app.listen(port,()=>{
    console.log("server is running "+`http://localhost:${port}`);
})