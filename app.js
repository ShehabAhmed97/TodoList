//jshint esversion:6

const express = require('express');
const app = express();

const data = require(__dirname + "/data.js"); //an object that contains data from the data.js file

app.set('view engine', 'ejs'); //setting the view engine to use ejs files

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

let todoItems = [];
let work = [];

app.get("/", function(req,res){
    let today = data.getDate(); //Calling the function that returns the date from the data module
    res.render('todoList',{title : today, list : todoItems});
} )

app.get("/work", function(req,res){
    res.render('todoList',{title : "Work", list : work});
} )

app.post("/", function(req,res){
    const newTodoItem = req.body.todo;
    const from = req.body.from;
    if(from == today){
        todoItems.push(newTodoItem);
        res.redirect("/")    
    }else{
        work.push(newTodoItem);
        res.redirect("/work");    
    }
})


app.listen(process.env.PORT || 3000, function(){
    console.log("The server is up and running..");
})