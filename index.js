$(document).ready(function () {
    $("#bar-icon").click(function () {
        $(".black-bord").slideDown(700);
        $(".mockups").hide();
        $("#bar-icon").hide();
        $("#close-icon").show();
        $(".navbar-collapse").slideDown(700, function () {
            $(".navbar-collapse").animate({
                top: "5.5rem",
            }, 700);
        });
    });

    $("#close-icon").click(function () {
        $(".navbar-collapse").animate({
            top: "5.5rem",
        }, 700);
        $("#bar-icon").show();
        $(".mockups").show();
        $("#close-icon").hide();
        $(".black-bord").slideUp(700);;
        $(".navbar-collapse").slideUp(700);
    });

});