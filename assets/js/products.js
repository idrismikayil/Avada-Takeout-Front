$(document).ready(function () {

    $("#products .container .icons .listt").click(function () {
        $(".listt").css("color", "#f34f3f")
        $(".grid").css("color", "#1b1b1b")
        
        $(".grids").removeClass("d-none")
        $(".listss").addClass("d-none")

        
    });
    $("#products .container .icons .grid").click(function () {
        $(".grid").css("color", "#f34f3f")
        $(".listt").css("color", "#1b1b1b")
        
        $(".listss").removeClass("d-none")
        $(".grids").addClass("d-none")
        
    });

})