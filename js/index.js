$("#infoContainer").hide();
$("#projectList").hide();
$("#contact").hide();


$('document').ready(function(){
    var texts = document.querySelectorAll('.nameText');

    // svg name stuff
    for (var i = 0; i < texts.length; i++) {
    	var text = texts[i];
    	var length = text.getComputedTextLength();

    	text.style.WebkitTransition = text.style.transition = 'none';
    	text.style.strokeDasharray = length;
    	text.style.strokeDashoffset = length;
    	text.getBoundingClientRect();

    	text.style.WebkitTransition = text.style.transition = 'stroke-dashoffset 3s ease-in-out, fill 4s ease-out';

    	text.style.fill = '#505050';    			//change back if you want the line thicker
    	text.style.strokeDashoffset = '0';
    }

    $("svg").mouseenter(function() {
        var texts = document.querySelectorAll('.nameText');
        $(".nameText").css("fill", "transparent");

        for (var i = 0; i < texts.length; i++) {
            var text = texts[i];
            var length = text.getComputedTextLength();

            text.style.WebkitTransition = text.style.transition = 'none';
            text.style.strokeDasharray = length;
            text.style.strokeDashoffset = length;
            text.getBoundingClientRect();
            
            text.style.WebkitTransition = text.style.transition = 'stroke-dashoffset 3s ease-in-out, fill 4s ease-out';

            text.style.fill = '#505050';              //change back if you want the line thicker
            text.style.strokeDashoffset = '0';  
        }      
    });


    // other pages / getting around stuff
    $("#goback").click(function() {
        $("#infoContainer").fadeOut();
        $("#projectList").fadeOut();
        $("#contact").fadeOut();
        $("#social").hide();
        $("#goback").hide();
        $("#backgroundImg").fadeIn();
    });
    
    $("#aboutme").click(function() {
        $("#backgroundImg").fadeOut(500, function() {
            $("#infoContainer").fadeIn();
            $("#social").show();
            $("#goback").show(300, function() {
                $("#gobacktext").typed({
                    strings: ['BACK'],
                    typeSpeed: 50
                });
            });
        });
    });


    $("#projects").click(function() {
        // have project colors ready beforehand
        $(".projectElement").each(function() {
            var colors = ['#F48DB6', '#CD7171', '#BD5C5C', '#FF7373', '#B85C71', '#ED6B84', '#E0747C'];                
            var rand = Math.floor(Math.random() * colors.length);
            $(this).css('background-color', colors[rand]);
        });

        $("#backgroundImg").fadeOut(500, function() {
            $("#projectList").fadeIn();            
            $('.projectText').hide();
            $("#social").show();
            $("#goback").show(300, function() {
                $("#gobacktext").typed({
                    strings: ['BACK'],
                    typeSpeed: 50
                });
            });
        });
    });

    $('.projectTitle').click(function(e) {
        if (!$(this).next().is(':visible')) {
            $('.projectText').slideUp();
            $(this).next().slideDown();
        }
        return false;
    });

    
    $("#resume").click(function() {
        $("#backgroundImg").fadeOut(500, function() {
            $("#contact").fadeIn();
            $("#social").show();
            $("#goback").show(300, function() {
                $("#gobacktext").typed({
                    strings: ['BACK'],
                    typeSpeed: 50
                });
            });
        });
    });


    
});
