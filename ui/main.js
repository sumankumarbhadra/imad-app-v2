console.log('Loaded!');
// code for likes

//counter code 
var button = document.getElementById('like');

button.onclick=function(){

//create request by id
var request = new XMLHttpRequest();

//capture the request and store in a variable
request.onreadystatechange = function(){
if(request.readyState==XMLHttpRequest.DONE){
//Take some action
if(request.State==200){
	var likecounter = request.responceText;
	var span = document.getElementById('likes');
	span.innerHTML = likecounter.toString();
	
		}
	}
	//Not the request
};

//Make request
request.open("GET","http://sumankumarbhadra.imad.hasura-ap/likes",true);
request.send(null);
};
//counter code 
 


//create request by id
var request = new XMLHttpRequest();

//capture the request and store in a variable
request.onreadystatechange = function(){
if(request.readyState==XMLHttpRequest.DONE){
//Take some action
if(request.State==200){
	var counter = request.responceText;
	var p = document.getElementById('visiter');
	p.innerHTML = counter.toString();
	
		}
	}
	//Not the request
};

//Make request
request.open('GET','http://sumankumarbhadra.imad.hasura-app.io/',true);
request.send(null);


