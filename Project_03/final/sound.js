$(document).ready(function(){
    $(".deley").hide();
    setTimeout(function () {
        $(".deley").show();
        $(".audioPlayer")[0].play();
        
    }, 5000);
});