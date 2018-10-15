// var book=require("./lib/grades").book;

// for(var i=2;i<process.argv.length;i+=1){
//     book.addGrade(parseInt(process.argv[i]));
// }

// console.log(book.getAverage());


var book=require("./lib/grades").book;
var express=require("express");

var app=express();

app.get("/",function(req ,res){
    res.send("Hello ");
});

app.get("/grade",function(req,res){
    var grades=req.query.grades.split(",");
    for(var i=0;i<grades.length;i+=1){
        book.addGrade(parseInt(grades[i]));
    }
    var average=book.getAverage();
    res.send("Your average is "+average);
});

app.listen(3000);

console.log("Server is running");

///localhost:3000/grade?grades=100