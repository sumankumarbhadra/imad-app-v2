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


console.log('Loaded!');
 var b=document.getElementById("c");
 b.onclick= function()
    {
      var request= new XMLHttpRequest();
    
      request.onreadystatechange=function()
      {
        if(request.readyState == 4 && request.status==200 )
        { 
             var likes =request.responseText;
             var span=document.getElementById("d");
             span.innerHTML="likes"+likes;
            
        }
        
     };
    
    request.open('GET',"/likes",true);
    request.send(null);
   };