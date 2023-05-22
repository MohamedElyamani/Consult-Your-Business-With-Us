$('.brand').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true,
    loop: true,
    autoplay:true,
    autoplayTimeout:4000
});

$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1200
    })
})