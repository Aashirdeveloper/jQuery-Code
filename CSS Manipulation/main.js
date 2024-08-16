
$(function () {

    // it can add a CSS to a html tag
    $("#addClass").click(function () {
        $("#aclass").addClass("addclass");
    });

    //    it can remove a CSS to a html tag
    $("#removeClass").click(function () {
        $("#aclass").removeClass("addclass");
    });


    //    it can toggle a CSS to a html tag
    $("#toggleClass").click(function () {
        $("#tclass").toggleClass("toggleclass");
    });

    //    it can fetch a CSS which is already implemented on html tag or element
    $("#fetchcss").click(function () {
        var f = $("#fcss").css("border");
        alert(f);
    });

    //    it can fetch a CSS properties more then one which is already implemented on html tag or element
    $("#fetchcss").click(function () {
        var properties = $("#fcss").css(["border", "color", "background-color"]);
        alert("Border: " + properties.border + "\nColor: " + properties.color + "\nBackground Color: " + properties["background-color"]);
    });


    // it can add a inline css to a selected element or html tag
    $("#addcss").click(function () {
        $("#icss").css({
            "color": "white",
            "backgroundColor": "purple",
            "border": "4px solid orange",
            "borderRadius": "10px"
        });

    });

});
