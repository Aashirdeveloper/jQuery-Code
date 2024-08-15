$(function () {

    // Get

    // .text()
    $("#getText").click(function () {
        var txt = $(".get").text();
        alert(txt);
    });

    // .html(), alert can not show a HTML markup so we can checkout using console.
    $("#getHTML").click(function () {
        var html = $(".ghtml").html();
        console.log(html);
        alert(html);
    });

    // .val(), it can get a value from input field
    $("#getValue").click(function () {
        var val = $(".getvalue").val();
        alert(val);
    });

    // .attr("href"), it can take a value of <a> attribute of href
    $("#getAttribute").click(function () {
        var attribute = $("#link").attr("href");
        alert(attribute);
    });


    // Set

    // .text("..."), it can set the new value dynamically
    $("#setText").click(function () {
        $("#sett").text("WordPress");
    });

    // .html("..."), it can set the new value dynamically and change the HTML of an element
    $("#setHTML").click(function () {
        $("#sethtml").html("<h4>CSS</h4>");
    });

    // .val("..."), it can set the new value dynamically in the input field and then we get again a new value which settled below
    $("#setValue").click(function () {
        $(".setvalue").val("Aashir");
    });

    // .attr("..."), it can set the value of a link attribute with target, this is an array type
    $("#setAttribute").click(function () {
        $("#setattribute").attr({
            "href": "https://www.google.com/",
            "target": "_blank"
        });
    });


    // Add

    // .append("..."), it can set the new value after the selected element like #sethtml it can add as a child element
    $("#append").click(function () {
        $("#sethtml").append("<h4>I am Append!</h4>");
    });

    // .prepend("..."), it can set the new value before the selected element like #sethtml it can add as a child element
    $("#prepend").click(function () {
        $("#sethtml").prepend("<h4>I am Prepend!</h4>");
    });

    // .after("..."), it can set the new value after the selected element like .ghtml it can add as a parent element
    $("#after").click(function () {
        $(".ghtml").after("<h4>I am After!</h4>");
    });

    // .before("..."), it can set the new value before the selected element like .ghtml it can add as a parent element
    $("#before").click(function () {
        $(".ghtml").before("<h4>I am Before!</h4>");
    });

    // .after("..."), it can set the new input field after the selected element like #firstname it can add as a parent element
    $("#addField").click(function () {
        $("#firstname").after('<input type="text" placeholder="Last Name">');
    });

    // .remove(), it can remove the element
    $("#removeField").click(function () {
        $("#hello").remove();
    });

    // .before("..."), it can set the new value before the selected element like .ghtml it can add as a parent element
    $("#empty").click(function () {
        $(".attr").empty();
    });

});
