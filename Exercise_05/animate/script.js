$(document).ready(function(){
    
    
	$("#box").click (function() {
        if ( $(this).position().left > 100 ) {
            $(this).animate( { left: "-=400px" }, 'fast' );
        } else {
			$(this).animate( { left: "+=400px" }, 'fast' );
        }
	});
    
    
});
