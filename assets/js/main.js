$(document).ready(function(){
    $('.burger').on("click", function(){
        $(".open-navigation-box").addClass('active');
        $(this).addClass("active");
        $(".hide").css("display", "flex");
        $('body').addClass("active");
    })
    $(".hide").on("click", function(){
        $(this).css("display", "none");
        $(".open-navigation-box").removeClass("active");
        $(".burger").removeClass("active");
        $('body').removeClass("active");
    })
    $(".openDropDownLink").on('click', function(){
        $('.dropDownContentBox').toggleClass("active");
    });

    $(".text-send-message-box").on("click", function(){
        $(".contact-form").slideDown('slow');
        $(this).css("background", "#1D2022");
        $('.text-send-message-content').css("color", "#111517");
        $(this).css("cursor", "not-allowed");
    })

    
})