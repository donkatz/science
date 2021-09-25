$(document).ready(function () {

    $('.autoplay > .slick-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    var swiper02 = new Swiper(".mySwiper02", {
        slidesPerView: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
    });

    function fun() {
        var num = 0;
        var result;
        setInterval(function () {
            result = num * -620;
            num++;
            console.log(result);
            if (num == 3) {
                num = 0;
            }
            $(".slider").stop().animate({
                left: result + 'px'
            });
        }, 3000);
    }
    fun();

});