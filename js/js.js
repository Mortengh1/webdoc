/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running. Alert level green.");

    // ... min kode herfra ...

    // Får videoen til at afspille af sig selv
    document.getElementById('myVideo').play();



    /* Denne function får intro-text til at fade ind når man scroller ned til 500px */
    var $intro = $('#intro-text');

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 500) {

            $intro.addClass('active');

        } else {

            $intro.removeClass('active');

        }

    });

     /* Denne function får intro-text2 til at fade ind når man scroller ned til 1900px */
    var $fakta = $('.fakta-style');

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 1200) {

            $fakta.addClass('active');

        } else {

            $fakta.removeClass('active');

        }

    });
    
    
    
    
    
    /* Denne function får intro-text2 til at fade ind når man scroller ned til 1900px */
    var $intro2 = $('#intro-text2');

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 1900) {

            $intro2.addClass('active');

        } else {

            $intro2.removeClass('active');

        }

    });



    //Billede karusel
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 5000); // skifter billede hver femte sekund
    }
    // ... min kode slut ...

}); // denne line må ikke slettes
