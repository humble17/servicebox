// Carousle Laptop and Phone
$('.carousel').carousel({
    interval: false,
    keyboard: false,
    pause: false,
  })


// For lightweight animations

sal();

$(document).ready(function(){
    $('.fa-angle-down').click(function(){
        $('body,html').animate({scrollTop:  $(window).scrollTop() + 670 },600);
    });
});

// For RECALLS

$('.right-move').click(function () {
    $('.recalls-container .owl-carousel button.owl-next').trigger('click')
})
$('.left-move').click(function () {
    $('.recalls-container .owl-carousel button.owl-prev').trigger('click')
})

// For Brands Arrow

$('.right-scroll').click(function () {
    $('.brandy .owl-carousel button.owl-next').trigger('click')
})
$('.left-scroll').click(function () {
    $('.brandy .owl-carousel button.owl-prev').trigger('click')
})



// For Recalls

$('.recall-owl').owlCarousel({
    stagePadding: 75,
    loop:true,
    margin:28,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:1800,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})


// For Brands
$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:30,
    nav:true,
    dots:false,
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


