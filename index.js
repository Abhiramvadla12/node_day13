let express = require("express");
let fs = require("fs")
let app = express();
app.use(express.urlencoded({extended:true}));
app.post("/",(req,res)=>{
    fs.appendFile("index.txt",JSON.stringify(req.body),"utf-8",(err)=>{
        if(err){
            res.send(err.message);
        }
        else{
            res.send("file has been created!!!");
        }
    });

})

let port = 3006;
app.listen(port,()=>{
    console.log("server is running ");
})