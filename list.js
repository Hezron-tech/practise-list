$(".list") .on("keyup", function(e){
     if(e.keyCode == 13 && $(".list") .val() != "" )
     {
  var task = $("<div class='task'></div>").text($(".list") .val());
  var del = $("<i class='fas fa-trash-alt'></i>") .click(function(){
     var p=$(this).parent();
     p.fadeOut(function(){
     p.remove()
     });
        
     
  });
  var check = $("<i class='fas fa-clipboard-check'></i>") .click(function()
  {
   var p=$(this).parent();
     p.fadeOut(function(){
        $(".comp") .append(p);
        p.fadeIn();
      
  });
  $(this).remove();
});
  task.append(del ,check);

  $(".not").append(task);

     }
  
});
