console.log('Loaded!');
var button=document.getElementById("c");
 button.onclick= function()
    {
      var request= new XMLHttpRequest();
    
      request.onreadystatechange=function()
      {
        if(request.readyState === XMLHttpRequest.DONE && request.status===200 )
        { 
             var likecounter =request.responseText;
             var span=document.getElementById("d");
             span.innerHTML=" visitor count: "+likecounter;
            
        }
        
     };
    
    request.open('GET',"http://sumankumarbhadra.imad.hasura-app.io/likes",true);
    request.send(null);
   };

