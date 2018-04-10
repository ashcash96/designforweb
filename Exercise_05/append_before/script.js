$(document).ready(function() {   
    
    var count = 1;

$('#myBtn').click(function(){

    var div = $('#person');
    
    div.html(count);
    
    div.appendTo('#wrapper');
    
    count = count + 1;

});
    
    
  });
