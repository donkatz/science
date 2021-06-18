$(document).ready(function () {

                var swiper01 = new Swiper(".mySwiper01", {
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
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
