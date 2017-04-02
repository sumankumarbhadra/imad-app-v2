 window.onload = function()
 {
 var submit=document.getElementById("submit");
    submit.onclick= function()
    {
      var request= new XMLHttpRequest();
    
      request.onreadystatechange=function()
      {
        if(request.readyState == 4 && request.status==200 )
        { 
             var comment =request.responseText;
             comment= JSON.parse(comment);
             var list = '';
             for(var i = 0;i<comment.length;i++)
             {
                 list+='<li>'+comment[i]+'</li>';
             }
             var ul=document.getElementById("comments");
             ul.innerHTML =list;
            
        }
        
     };
    var commentInput = document.getElementById('comment');
    var comment = commentInput.value;
    request.open('GET',"/submit-comment?comment="+comment,true);
    request.send(null);
   };
   };
    
