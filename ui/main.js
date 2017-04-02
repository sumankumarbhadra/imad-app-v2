console.log('Loaded!');
//code for counter and comment
var c;
window.onload (c=c+1);
 
 
window.onload = function()
    {
      var request= new XMLHttpRequest();
    
      request.onreadystatechange=function()
      {
        if(request.readyState == 4 && request.status==200 )
        { 
             var counter =request.responseText;
             var span=document.getElementById("visiter");
             span.innerHTML=counter;
            
        }
        
     };
    
    request.open('GET',"/counter",true);
    request.send(null);
    
    var b=document.getElementById("like");
    b.onclick= function()
    {
      var request= new XMLHttpRequest();
    
      request.onreadystatechange=function()
      {
        if(request.readyState == 4 && request.status==200 )
        { 
             var likes =request.responseText;
             var span=document.getElementById("likes");
             span.innerHTML=" "+likes;
            
        }
        
     };
    
    request.open('GET',"/likes",true);
    request.send(null);
   };
  
   };

