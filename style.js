$(document).ready(()=>{
    $(this).scrollTop(0);
    
    var typed = new Typed(".typed", {
        strings : ["Hello, I'm Muhshin Riyadi", "I'm Fullstack Web Developer"],
        typeSpeed : 70,
        startDelay : 50,
        loop: true,
        backSpeed: 40,
        backDelay: 2000,
    });

    $(window).on('scroll', ()=>{
        if($(window).scrollTop()){
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    })

    if($(window).scrollTop() != 0){
        $('nav').addClass('black');
    }
})