$(document).ready(function() {   
    
    var state = 'off';

$('button').click(function(){
    
    if(state == 'off'){
      // turn on the lights
      $('body').css('background','white');
      state = 'on';
    }
    
    else {
      // turn off the lights
      $('body').css('background','black');
      state = 'off';
    }    
    
});
    
    
  });
