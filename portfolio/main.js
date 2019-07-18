$(document).ready(() => {

    $(this).scrollTop(0);

    $('#toggle-nav').click(function () {
        $(this).toggleClass('open');
        $("nav ul").toggleClass('display');
        $("nav").toggleClass('blacked');
    });

    var typed = new Typed(".typed", {
        strings: ["Hello, I'm Muhshin Riyadi", "I'm Fullstack Web Developer"],
        typeSpeed: 70,
        startDelay: 50,
        loop: true,
        backSpeed: 40,
        backDelay: 2000,
    });

    $(window).on('scroll', () => {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
            $('.sticky-to-top').removeClass('block');
        } else {
            $('nav').removeClass('black');
            $('.sticky-to-top').addClass('block');
        }
    })

    if ($(window).scrollTop() != 0) {
        $('nav').addClass('black');
    }

    $(window).on("scroll", onScroll);

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        var el = document.getElementById('project');

        $('nav a').each(function () {
            var currLink = $(this);
            var refElement = currLink.attr("href").slice(1);
            var getSection = document.getElementById(refElement);

            if (getSection.getBoundingClientRect().top <= 250){
                $('nav a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });

        $(".thumbnail").each( function(){            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element && window.matchMedia('(max-width: 768px)').matches){
                $(this).animate({'opacity':'1', 'margin':'15px'},1000);
            } else if( bottom_of_window > (bottom_of_element-50) && window.matchMedia('(min-width: 769px)').matches ){
                $(this).animate({'opacity':'1', 'margin':'25px'},1000);
            }
        });
    }  
});