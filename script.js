$(document).ready(function() {
    // Initialize the carousel
    $('.partner-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Add typing animation to the hero section title
    var typed = new Typed('.display-4', {
        strings: ['Welcome to my Cyberpunk Portfolio'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});
