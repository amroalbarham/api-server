/* eslint-disable */
'use strict';



const express=require('express');
const app =express();

const notdoundhandler=require('./error-handlers/404');
const errorHanlder =require('./error-handlers/500');
app.get('/',(req,res)=>{
  res.status(200).send('hello amro');
})

app.get('/bad',(req,res)=>{
  throw new Error('request is correct but something happen')
})

app.use('*',notdoundhandler);
app.use(errorHanlder)

function start(port){
  app.listen(port,()=>console.log(`server is live on ${port}`));
}

module.exports={
  app:app,
  start:start,
}