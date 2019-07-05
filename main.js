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
        } else {
            $('nav').removeClass('black');
        }
    })

    if ($(window).scrollTop() != 0) {
        $('nav').addClass('black');
    }

    $(document).on("scroll", onScroll);

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('nav a').each(function () {
            var currLink = $(this);
        var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
        
})