const path=require('path')
const publicpath=path.join(__dirname,'../public')

const express=require('express')
const port=process.env.PORT || 3003
var app=express()

app.use(express.static(publicpath))

app.listen(port,()=>{
    console.log(`Server is running on ${port} 3003`);
})