 $(function() {
    $("#pageTitle").typed({
        opacity: 1,
        strings: ["PROJECTS"],
        typeSpeed: 50
    });

    $(".projectTitle").each(function() {
        var colors = ['#F48DB6', '#CD7171', '#BD5C5C', '#FF7373', '#B85C71', '#ED6B84', '#E0747C'];                
        var rand = Math.floor(Math.random() * colors.length);
        $(this).css('background-color', colors[rand]);
    });

    //onclick adding text

    var addText1 = "<div class=\"necessary\"> <span class=\"projectHeader\"> ";
    //projectHeader
    var addText2 = "</span> <p class=\"projectText\"> ";
    //projectText
    var addText3 = " </p> </div> <div class=\"projectImgCont\"> <div class=\"projectImg project";
    //projectNum
    var addText4 = "Img\"> </div> </div> <p class=\"close\"> click to close </p>";

    var loadTime = 500;
    var tileHeight = $(".projectTitle").height();
    var paddingBorderShift = 2 * (parseInt($(".projectTitle").css('padding-top')) + parseInt($(".projectTitle").css('border-width')));
    var projectHeight = 400;
    if ($(window).height() < 800) {
        projectHeight = $(window).height() / 2;
    }
    console.log($(window).height() + " and " + tileHeight);

    var projectNames = ["Scheme Interpreter", "Network", "Image Blurring", "Depth Perception"];
    var projectInfo = ["I built an interpreter in Python for a subset of the Scheme language.",
                        "I designed an AI program in Java to play the game Network. This involved using the \
                            minimax algorithm and alpha-beta pruning.",
                        "This program blurs pixels in a TIFF image and then creates a grayscale image from a \
                            TIFF image; written in Java.",
                        "This program distinguishes between far away and close by objects by creating a depth \
                            map with respect to each pixel in an image, and then normalizing that. This C code \
                            is optimized using Intel SIMD instructions and OpenMP." ]


    $(".projectTitle").click(function() {
        $("#clickme").css('opacity', '0');
        var classes = this.className;
        if ( $(this).css('height') == (projectHeight + 'px')) {
            closeProject(classes[classes.length - 1]);
        } else {
            addProjectSummary(classes[classes.length - 1]);
        }
    });



    function addProjectSummary(myNum) {
        var myTile = "project" + myNum;
        $(".projectTitle").each(function() {
            if ( ! ($(this).hasClass(myTile)) ) {
                $(this).velocity({ opacity: 0 }, { 
                    duration: loadTime/4,
                    display: "auto"
                });
            }
        });

        var shiftY = (0 - tileHeight * (myNum - 1)) + paddingBorderShift;
        console.log("project " + myNum + " shifted by " + shiftY);
        $("." + myTile).velocity({ margin: shiftY }, loadTime/2);
        $(".introText").velocity({ opacity: 0 }, { 
                    duration: loadTime/2,
                    display: "none"
                    });
        $("." + myTile).velocity({ height: projectHeight }, loadTime);

        setTimeout(function() {
            $("." + myTile).text("");
            $("." + myTile).append(addText1 + projectNames[myNum - 1] + addText2 + projectInfo[myNum - 1] + addText3 + myNum
                                + addText4);
        }, loadTime * 2);
    }


    function closeProject(myNum) {
        var myTile = "project" + myNum;
        $("." + myTile).empty();
        $("." + myTile).text(projectNames[myNum - 1]);
        $("." + myTile).velocity({ height: tileHeight }, loadTime);
        $("." + myTile).velocity({ margin: 0 }, loadTime/4);

        setTimeout(function() {
            $(".projectTitle").each(function() {
                if ( ! ($(this).hasClass(myTile)) ) {
                    $(this).velocity({ opacity: 1 }, { 
                        duration: loadTime/2,
                        display: "auto"
                    });
                }
            });

            $(".introText").velocity({ opacity: 1 }, { 
                    duration: loadTime/2,
                    display: "auto"
            });
        }, loadTime + loadTime/4);
    }

});


