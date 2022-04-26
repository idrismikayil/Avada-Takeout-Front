$(".hamburger").click(function () {
    $(".cl-4").css({
        width: "100%",
        transition: "0.3s"
    })
    $(".x").css({
        display: "block",
        transition: "0.3s"
    })
})
$('.fa-times').click(function () {
    $(".cl-4").css({
        width: "0",
        transition: "0.3s"
    })
    $(".x").css({
        display: "none",
        transition: "0.3s"
    })

})