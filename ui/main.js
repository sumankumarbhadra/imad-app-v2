console.log('Loaded!');
 
 window.onload= function()
    {
      var request= new XMLHttpRequest();
    
      request.onreadystatechange=function()
      {
        if(request.readyState === XMLHttpRequest.DONE && request.status===200 )
        { 
             var counter =request.responseText;
             var span=document.getElementById("visiter");
             span.innerHTML=counter;
            
        }
        
     };
    
    request.open('GET',"http://sumankumarbhadra.imad.hasura-app.io/",true);
    request.send(null);
   };

//code for like count
