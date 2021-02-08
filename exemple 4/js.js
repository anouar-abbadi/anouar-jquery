$(document).ready(function() {
			
    $("#div1").click( function () {
       $("#div2").trigger('click');
    });

    $("#div2").click( function () {
       alert( "Square TWO is clicked");
    });
        
 });