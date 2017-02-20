var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
	title:'Article one',
	heading:'Article One',
	date:'feb 19 2017',
	content:
		`<p> This is my 1st artical.This is my 1st artical .This is my 1st artical
		This is my 1st artical.This is my 1st artical.This is my 1st artical.
		This is my 1st artical.</p>
		
		<p> This is my 1st artical.This is my 1st artical .This is my 1st artical
		This is my 1st artical.This is my 1st artical.This is my 1st artical.
		This is my 1st artical.</p>
		
		<p> This is my 1st artical.This is my 1st artical .This is my 1st artical
		This is my 1st artical.This is my 1st artical.This is my 1st artical.
		This is my 1st artical.</p>`
};
function createTemplate(data){
	var title=data.title;	
	var date=data.date;
	var heading=data.heading;
	var content=data.content;
	var htmltemplate=
		`<html>
		<head>
		<title>
		${title}
		</title>
		<meta name="viewpoint" content="width=device-width,initial-scall=1"/>
		<link href="/ui/style.css" rel="styleSheet"/>
		</head>
		<body>
		<div class="container">
			<div>
			<a href="/">home</a>
			</div>
			<hr>
			<h2> 
			${heading}
			</h2>
			<div>
			${date}
			</div>
			<div>
			${content}
			</div>
			
		</div>
		</body>
		
		</html>`
		;
	return htmltemplate;
}

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
 
var counter=0;
 app.get('/counter',function(req,res){
	 counter=counter+1;
	 res.send(counter.toString());
 });
 var likes=0;
 app.get('/likes',function(req,res){
 likes=likes+1;
 res.send(likes.toString());
});

var comments = [];
app.get('/comment',function(req,res){
    var comment = req.quary.comment;
    
    comments.push(comment);
});
app.get('/test',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'test.html'));
});
app.get('/articleone',function(req,res){
	res.send(createTemplate(articleone));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/suman1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'suman1.jpg'));
});
app.get('/ui/suman2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'suman2.jpg'));
});
app.get('/ui/wapplogo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'wapplogo.png'));
});
app.get('/ui/g+logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'g+logo.png'));
});
app.get('/ui/twitterlogo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'twitterlogo.png'));
});
app.get('/ui/iglogo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'iglogo.png'));
});
app.get('/ui/linkedin_icon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'linkedin_icon.png'));
});
app.get('/ui/nptel-logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'nptel-logo.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
