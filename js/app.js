$(document).ready(function(){
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        looo:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartspeed:1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        navText: ['PREV','NEXT'],
        responsive:{
            0:{
                nav:false

            },
            768:{
                nav:true,
            },

        }
    });
        //PROJECT SLIDER
        $('#project-slider').owlCarousel({
            looo:true,
            margin:0,
            nav:true,
            dots: false,
            smartspeed: 1000,
            margin: 24,
            navText: ['PREV','NEXT'],
            responsive:{
                0:{
                    items: 1,
                    nav:false,
                    margin: 0,
                },
                768:{
                    items: 2,
                },
                1140:{
                    items: 2,
                    center: true,
                }
    
            }
        });
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            items: 1,
            smartSpeed: 800,

        })
});