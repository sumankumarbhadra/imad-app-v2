var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articlone={
	title:'Article one',
	heading:'Article One',
	date:'feb 19 ,2017',
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
}
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
			${data}
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
 var count1=0;
 app.get('/counter',function(req,res){
	 count1=count+1;
	 res.send(count1.tostring());
 });

app.get('/articleone',function(req,res){
	res.send(createTemplate(articleone));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
