//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const homeStartingContent1 = "Most governments around the world have temporarily closed educational institutions in an attempt to contain the spread of the.UNESCO is supporting countries in their efforts to mitigate the immediate impact of school closures, particularly for more vulnerable and disadvantaged communities, and to facilitate the continuity of education for all through remote learning.";
const homeStartingContent2 = "Assignments submitted by post must reach us by the assignment deadline and a receipt retained as proof of postage and provided upon request.";


const app = express();

//Loads all the pages inside views files
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Global Container to Get Post
let posts = [];

//Route we are going to target
app.get("/",function(req,res){
  res.render("home",{
    startingContent1: homeStartingContent1,
    startingContent2: homeStartingContent2,
    posts: posts});
});

app.get("/compose",function(req,res){
  res.render("compose");
});

//Create an object in javascript
/* var objectName = {
  Key: Value
}*/

app.post("/compose",function(req,res){
  const post = {
    date: req.body.postDate,
    title: req.body.postTitle,
    content: req.body.postBody
  };
  posts.push(post);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
