//Node js-express framework
var express = require("express");
//call the express function "express()" and puts new express aplication inside the app variable to start a new express application`
var app = express();
//node.js body parsing middleware(Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.)
var bodyParser = require("body-parser");

app.post("/gallery", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name,image: image}
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});

var saloon=[
{image:"https://4.imimg.com/data4/YM/AY/GLADMIN-17254102/1-500x500.jpg"},
{image:"https://nextluxury.com/wp-content/uploads/dapper-long-hair-haircuts-for-men.jpg"},
{image:"https://i.styleoholic.com/2019/02/03-shaved-sides-and-a-long-comb-over-plus-a-beard-make-up-an-ultra-modern-look.jpg"},
{image:"https://www.theemergingindia.com/wp-content/uploads/2020/05/15215701-50649910-f15193195303d6c9be453ed530a0c88d40d7443e-1500-1-1580919625-728-871720b100-1581070418.jpg"},
{image:"https://media.istockphoto.com/photos/young-stylish-hairdresser-styling-hipster-teenagers-hair-picture-id915637016?k=6&m=915637016&s=612x612&w=0&h=39cPRg37XdJCEcUOgkQd9bPM6IbzvCZSkST0cRkrudM="}
];
//urlencoded({ extended: true }) - middleware for parsing bodies from URL. .
app.use(bodyParser.urlencoded({extended:true}));
var urlencodedParser = bodyParser.urlencoded({extended:true});
//EJS: EJS or Embedded Javascript Templating is a templating engine used by Node.js. Template engine helps to create an HTML template with minimal code
app.set("view engine","ejs");

app.use('/assets',express.static('stuff'));

app.get('/contact',function(req, res){
	res.render('contact',{qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
	console.log(req.body);
	res.render('contact-success',{data: req.body});
});

app.get("/",function(req,res){
	res.render("home");
});
app.get("/book",function(req,res){
	res.render("book");
});
app.get("/gallery",function(req,res){
	res.render("gallery");
});

//app.get("/gallery/new", function(req, res){
//	res.render("new.ejs");
//});

app.listen(1002,function(){
	console.log("saloon server has started!");
});




















//const mongoose=require("mongoose");

//mongoose.connect("mongodb://localhost:1002",{useNewUrlParser:true, useUnifiedTopology: true})
//.then(()= console.log("Connection successful......"))
//.catch((err) = console.log(err)) ;

//var MongoClient = require('mongodb').MongoClient;
//var url = ("mongodb://localhost:1002/mydb",{useNewUrlParser: true, useUnifiedTopology: true})

//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  console.log("Database created!");
//  db.close();
//});