$(function () {

    // hide an element
    $("#button-1").click(function () {
        $(".event").hide();
    });

    // show an element
    $("#button-2").dblclick(function () {
        $(".event").show();
    });

    //mouseover
    $(".event").mouseover(function () {
        $(this).css("background", "yellow");

    });

    // mouseleave
    $(".event").mouseleave(function () {
        $(this).css("background", "green");

    });

    // hover event with two functions
    $(".event").hover(function () {
        $(this).css("border", "5px solid red");
    },
        function () {

            $(this).css("border", "none");
        }
    );

    // mousedown
    $("#button-3").mousedown(function () {
        $(this).css("background", "brown");

    });

    // mouseup
    $("#button-4").mouseup(function () {
        $(this).css("background", "blue");

    });

    // The key difference between mousedown and mouseup is that when user click on an element then mousedown occur while when user click an element and when he relese the button then mouseup event occur.


    //   Show/Hide, fadeIn, fadeOut etc


    // hide an element
    $("#togglepannel-1").click(function () {
        $(".event2").hide(2000, function () {
            alert("Element Hide!");
        });
    });

    // show an element
    $("#togglepannel-2").click(function () {
        $(".event2").show(2000, function () {
            alert("Element Shown!");
        });
    });

    // By using toggling
    $("#togglepannel-3").click(function () {
        $(".event2").toggle(2000, function () {
            if ($(".event2").is(":visible")) {
                alert("Element is shown");
            } else {
                alert("Element is hidden");
            }
        });
    });

    // fadeIn an hided element
    $("#togglepannel-4").click(function () {
        $(".event2").fadeIn(1000);
    });

    // fadeOut an visible element
    $("#togglepannel-5").click(function () {
        $(".event2").fadeOut(2000);
    });

    // fadeToggle an visible element
    $("#togglepannel-6").click(function () {
        $(".event2").fadeToggle(2000);
    });

    // fadeTo control the opacity of an element
    $("#togglepannel-7").click(function () {
        $(".event2").fadeTo(2000, 0.2);
    });
});