$(function () {

    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1049,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 525,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]

    });


    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')

    });


});