$(document).ready(function(){
    $('.logos-clientes').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnDotsHover: false,
        responsive: [{
            breakpoint: 768,
            setting:{
                slidesToShow: 6
            }
        },{
            breakpoint: 570,
            setting:{
                slidesToShow: 3
            }
        }]
    })
});
