console.log('Loaded!');
 
 window.onload= function()
    {
      var request= new XMLHttpRequest();
    
      request.onreadystatechange=function()
      {
        if(request.readyState==4 && request.status==200 )
        { 
             var counter =request.responseText;
             var span=document.getElementById("display");
             span.innerHTML=" visitor count: "+likecounter;
            
        }
        
     };
    
    request.open('GET',"http://sumankumarbhadra.imad.hasura-app.io/likes",true);
    request.send(null);
   };

