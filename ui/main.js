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
   
   
    var submit=document.getElementById("submit");
    submit.onclick= function()
    {
      var request= new XMLHttpRequest();
    
      request.onreadystatechange=function()
      {
        if(request.readyState == 4 && request.status==200 )
        { 
             var comment =request.responseText;
             comment= JSON.parse(name);
             var list = '';
             for(var i = 0;i<name.length;i++)
             {list+='<li>'+name[i]+'<li>';
             }
             var span=document.getElementById("comments");
             ul.innerHTML = list;
            
        }
        
     };
    var commentInput = document.getElementById('comment');
    var comment = commentInput.value;
    request.open('GET',"/submit-comment?comment="+comment,true);
    request.send(null);
   };
   };

