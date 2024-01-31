import express from "express";

const PORT=4000;

const app=express(); 

const gossipMiddleware= (req,res,next)=>{
    console.log("I'm in the middle");
    next();
};

const handlehome = (req,res)=>{
    return res.send("I love middlewares");
};
const handleLogin=(req,res) =>{
    return res.end();
}

app.get("/", gossipMiddleware, handlehome);
app.get("/login",handleLogin);

const handeleListening=()=>console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handeleListening);