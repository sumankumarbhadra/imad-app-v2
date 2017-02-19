
// code for likes
/*
//counter code 
var likecounter = 0;
var button = document.getElementById('like');

button.onclick=function(){
    likecounter=likecounter+1;
    var span = document.getElementById('likes');
	span.innerHTML = likecounter.toString();
};

 */

var button = document.getElementById("c");

button.onclick = function() {
    
    // create a request object
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          // take some action
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById("display");
              span.innerHTML = counter.toString();
          }
      }  
      // not done yet
    };
    
    // make the request
    request.open('GET', 'http://sumankumarbhadra.imad.hasura-app.io/test', true);
    request.send(null);
};

