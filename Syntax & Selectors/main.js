
//using id
$(function () {
    alert("page loaded");
    $("#hidebtn").click(function () {
        $("#mainheading").hide();
    });
});

// using class
$(function () {   
    $("#hidebtn2").click(function () {
        $(".para").hide();
    });
});

// using selector element
$(function () {
    $("#hidebtn3").click(function () {
        $("span").hide();
    });
});

// using selector element link pseudo
$(function () {
    $("#hidebtn4").click(function () {
        // $("li:nth-child(even)").hide();
        // $("li:nth-child(odd)").hide();
        $("li:last-child").hide();
    });
});

// using attribute of element
$(function () {
    $("#hidebtn5").click(function () {
        $("a[href]").hide();
    });
});

