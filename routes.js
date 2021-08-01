// const express = require('express');
// const app = express();
const mongoose = require('mongoose');
const  {mongoUrl} = require('./config/key');
mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const toDo = mongoose.model('todo');

module.exports = (app) => {
    app.get('/',(req,res)=>{
        // res.sendFile(__dirname +'/index.html');
        toDo.find({}).then(data=>{
            res.render('index',{arrayData:data});
        })
    })
    app.post('/sent',(req,res)=>{
        // arrayData.push(req.body.item);
        const item = new toDo({ todo : req.body.item })
        // res.send(arrayData);
        item.save().then(data=>{
            console.log(data);
            res.send(data);
        })
    })
    app.post('/remove',(req,res)=>{
        console.log(req.body);
        toDo.findByIdAndDelete(req.body.id,(err,data)=>{
            res.send(data)
        })
        
        // const item = new toDo({ todo : req.body.item })
        // // res.send(arrayData);
        // item.save().then(data=>{
        //     console.log(data);
        //     res.send(data);
        // })
    })
}


