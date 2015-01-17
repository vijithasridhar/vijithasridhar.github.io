$('document').ready(function(){
    var texts = document.querySelectorAll('.nameText');

    for (var i = 0; i < texts.length; i++) {
    	var text = texts[i];
    	var length = text.getComputedTextLength();

    	text.style.WebkitTransition = text.style.transition = 'none';
    	text.style.strokeDasharray = length;
    	text.style.strokeDashoffset = length;
    	text.getBoundingClientRect();

    	text.style.WebkitTransition = text.style.transition = 'stroke-dashoffset 4s ease-in-out, fill 4s ease-out';

    	text.style.fill = 'black';    			//change back if you want the line thicker
    	text.style.strokeDashoffset = '0';
    }

    $("#name").hover(function() {
        var texts = document.querySelectorAll('.nameText');

        for (var i = 0; i < texts.length; i++) {
            var text = texts[i];
            var length = text.getComputedTextLength();

            text.style.WebkitTransition = text.style.transition = 'none';
            text.style.strokeDasharray = length;
            text.style.strokeDashoffset = length;
            text.getBoundingClientRect();
            
            text.style.WebkitTransition = text.style.transition = 'stroke-dashoffset 4s ease-in-out, fill 4s ease-out';

            text.style.fill = 'black';              //change back if you want the line thicker
            text.style.strokeDashoffset = '0';  
        }      
    });
});
