console.log('Loaded!');
 
 window.onload= function()
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
   };

//code for like count

window.onload=function(){
console.log('Loaded!');
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