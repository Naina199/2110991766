const express=require("express");
const collection=require("./mongo");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const{email,password}=req.body;

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exists")
        }
        else{
            res.json("not exists")
        }
    }catch(e){
        res.json("not exists");
    }
})



app.get("/",cors(),(req,res)=>{

})

app.post("/signup",async(req,res)=>{
    const{email,password}=req.body;

    const data={
        email:email,
        password:password
    }
    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exists")
        }
        else{
            res.json("notexists")
            await collection.insertMany([data])
        }
    }catch(e){
        res.json("not exists");
    }
})

app.listen(8000,()=>{
    console.log("Port connected");
})