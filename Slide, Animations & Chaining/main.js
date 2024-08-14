$(function () {

    // slideup the element
    $("#button-2").click(function () {
        $(".slide").slideUp(2000);
    });

    //slidedown the element
    $("#button-1").click(function () {
        $(".slide").slideDown(2000);
    });

    //slideToggle the element
    $("#button-3").click(function () {
        $(".slide").slideToggle(2000);
    });


    // Here we pply animation to a small CSSLayerBlockRule, first of all we move the block from lleft towards right and to retain small block in its parent block we assign it a marginLeft of same of its width to retain it ina parent CSSContainerRule, then we move  block from top to bottom side by apply top value in  percentage and then to move towards left and then to its initial or starting PointerEvent.

    //Animate the element
    $("#button-4").click(function () {
        $(".animation").animate(
            {
              left:'100%',
              marginLeft:'-150px',
              borderRadius:'50%',
            },
             2000);
        $(".animation").animate(
            {
              top:'68%',
            },
             2000);
        $(".animation").animate(
            {
              left:'0%',
              borderRadius:"25px",
              marginLeft:'0px',
            },
             2000);
        $(".animation").animate(
            {
              top:'0%',
              borderRadius:"0px",
              
            },
             2000);
    });


    // chanining

 $("#button-5").click(function () {
        $(".chaining").css({
            "border":"2px solid black",
            "border-radius":"4px",
            
        }).slideUp(2000).slideDown(2000,function(){
            $(this).css("border","none");
        });
    });


});