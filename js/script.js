//-----------------------------------===============================
//Slider for main page
 $(document).ready(function(){
     $('.slider-1').slick({
         slidesToShow: 6,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 3000,
         arrows: false
 });
 });
//-----------------------------------===============================
//Change picture for social buttons
 $(".social-share-img1").bind("click", function() {
     var src = ($(this).attr("src") === "../img/main/sharing-interface.png")
         ? "../img/main/sharing-interface-red.png"
         : "../img/main/sharing-interface.png";
     $(this).attr("src", src);
 });
 $(".social-share-img2").bind("click", function() {
     var src = ($(this).attr("src") === "../img/main/love.png")
         ? "../img/main/love-red.png"
         : "../img/main/love.png";
     $(this).attr("src", src);
 });
//-----------------------------------===============================
//Scroll on picture
 $(".scroll").click(function(){
     $("html, body").animate({scrollTop: $(".navigation").height()+ 700 },"slow");

     return false;});

//Scroll show and hide nav menu
$(window).scroll(function(){
    var top = $(window).scrollTop();
    if( top > 695) {
        $(".container-menu-main").css('visibility', 'visible');
    } else {
        $(".container-menu-main").css('visibility', 'hidden');
    }
});
//-----------------------------------===============================
//Tabs on main page
$(function () {
    var tabContent = $('.tabs-content > div');
    tabContent.hide().filter(':first').fadeIn('slow');
    $('.tabs  li:first a').addClass('selected');

    $('.tabs  a').click(function () {


        tabContent.hide();
        tabContent.filter(this.hash).fadeIn('slow');
        $('.tabs  li:first a').removeClass('selected');
        $(this).addClass('selected');

        return false;
    })
});
//-----------------------------------===============================
 //function validateEmail(){
 //    //var emailReg = /^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/;
 //    var inputEmail = document.getElementById('email').value;
 //    var inputMail = document.getElementById('modal-text-2');
 //    var rightEmail = 'dens@gmail.com';
 //    if(rightEmail === '') {
 //        inputMail.style.opacity = '1';
 //    }
 //    if(rightEmail !== inputEmail) {
 //        inputMail.style.opacity = '1';
 //    }
 //}
//-----------------------------------===============================
//Modal window for MAIN PAGE
 function modalMain() {
     // Get modal element
     var modal = document.getElementById('registration-modal');
     // Get open modal button
     var modalBtn = document.getElementById('span-off');
     var modalBtnMenu = document.getElementsByClassName('span-off')[1];
     var modalImg = document.getElementsByClassName('log-img')[0];
     var modalImgMenu = document.getElementsByClassName('log-img')[1];

     // Get close button
     var closeBtn = document.getElementById('close');
     //var header = document.getElementById('header');   //Why this is wrong?

     // Listen for open click
     modalBtn.addEventListener('click', openModal);
     modalImg.addEventListener('click', openModal);
     modalBtnMenu.addEventListener('click', openModal);
     modalImgMenu.addEventListener('click', openModal);

     // Listen for close click
     closeBtn.addEventListener('click', closeModal);
     // Listen for outside click
     window.addEventListener('click', outsideClick);

     // Function to open modal
     function openModal(){
         modal.style.display = 'block';
         //header.style.background = "rgba(0,0,0,0)";        //the same shit
     }

     // Function to close modal
     function closeModal(){
         modal.style.display = 'none';
     }

     // Function to close modal if outside click
     function outsideClick(e){
         if(e.target === modal){
             modal.style.display = 'none';
         }
     }
 }
 modalMain();
//-----------------------------------===============================
 //Modal window for REST OF PAGES
    function ModalAll() {
        // Get modal element
        var modalAll = document.getElementById('registration-modal');
        // Get open modal button
        var modalBtnAll = document.getElementById('log-img');
        var modalImgAll = document.getElementsByClassName('log-img')[0];
        // Get close button
        var closeBtnAll = document.getElementById('close');
        // Get filter
        var filter = document.getElementsByTagName('main')[0];

        // Listen for open click
        // modalBtnAll.addEventListener('click', openModalAll);
        modalImgAll.addEventListener('click', openModalAll);

        // Listen for close click
        closeBtnAll.addEventListener('click', closeModalAll);
        // Listen for outside click
        window.addEventListener('click', outsideClickAll);
//----------------=====================----------------------------
//         // Function to open modal
//         function openModalAll(){
//             modalAll.style.display = 'block';
//
//         }
//
//         // Function to close modal
//         function closeModalAll(){
//             modalAll.style.display = 'none';
//         }
//
//         // Function to close modal if outside click
//         function outsideClickAll(e){
//             if(e.target === modalAll){
//                 modalAll.style.display = 'none';
//             }
//         }
        function openModalAll(){
            modalAll.style.display = 'block';
            //Get dark background filter for page
            filter.style.filter = 'brightness(50%)';
            filter.style.backgroundColor = 'rgba(0,0,0,.3)';
            //Get scroll OFF
            var curScrollTop = $(window).scrollTop();
            $('html').toggleClass('noscroll').css('top', '-' + curScrollTop + 'px');

        }

        // Function to close modal
        function closeModalAll(){
            modalAll.style.display = 'none';
            filter.style.filter = 'none';
            //Get OFF dark background filter for page
            filter.style.backgroundColor = 'rgba(0,0,0,0)';
            //Get  scroll ON
            $('html').toggleClass('noscroll');
        }

        // Function to close modal if outside click
        function outsideClickAll(e){
            if(e.target === modalAll){
                modalAll.style.display = 'none';
                filter.style.filter = 'none';
                //Get OFF dark background filter for page
                filter.style.backgroundColor = 'rgba(0,0,0,0)';
                //Get  scroll ON
                $('html').toggleClass('noscroll');
            }
        }
 //-----------------========================------------------------------
    }
 ModalAll();
//-----------------------------------===============================
// Function for main page tabs/ When you will make click on list element you will change picture on the right of the tabs. Also it will be change picture list
$('#aa').on('click', function () {
    $('#tabs-img1').attr('checked', true);
    $('#tabs-img2').attr('checked', false);
    $('#tabs-img3').attr('checked', false);
});

 $('#bb').on('click', function () {
     $('#tabs-img1').attr('checked', false);
     $('#tabs-img2').attr('checked', true);
     $('#tabs-img3').attr('checked', false);
 });

 $('#cc').on('click', function () {
     $('#tabs-img1').attr('checked', false);
     $('#tabs-img2').attr('checked', false);
     $('#tabs-img3').attr('checked', true);
 });
//-----------------------------------===============================
//Function change slider pictures when mouse hover
 $("#lavazza").on("hover", function() {     // change check picture on tabs main page
     var src = ($('#lavazza').attr("src") === "./img/main/lavazza-black.png")
         ? "./img/main/lavazza.png"
         : "./img/main/lavazza-black.png";
     $(this).attr("src", src);
 });

 $("#kimbo").on("hover", function() {     // change check picture on tabs main page
     var src = ($('#kimbo').attr("src") === "./img/main/kimbo-black.png")
         ? "./img/main/kimbo.png"
         : "./img/main/kimbo-black.png";
     $(this).attr("src", src);
 });

 $("#movenpick").on("hover", function() {     // change check picture on tabs main page
     var src = ($('#movenpick').attr("src") === "./img/main/movenpick-black.png")
         ? "./img/main/movenpick.png"
         : "./img/main/movenpick-black.png";
     $(this).attr("src", src);
 });
//-----------------------------------===============================
 //Transition function for preloader on modal window
 $('#modal-button').on('click',function () {
     $('#linePreloader').toggleClass("lineClick");
    console.log('bvhdfabvdffd');
 });
//-----------------------------------===============================
//Scroll on all page
$(function() {

    jQuery.scrollSpeed(100, 800);

});

//Not good scroll but he can exist

// if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
// window.onmousewheel = document.onmousewheel = wheel;
//
// function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) delta = event.wheelDelta / 120;
//     else if (event.detail) delta = -event.detail / 3;
//
//     handle(delta);
//     if (event.preventDefault) event.preventDefault();
//     event.returnValue = false;
// }

// function handle(delta) {
//     var time = 100;
//     var distance = 200;
//
//     $('html, body').stop().animate({
//         scrollTop: $(window).scrollTop() - (distance * delta)
//     }, time );
// }

//-----------------------------------===============================
//Function for validation form on modal menu
var email = $('#email').val();
var password = $('#passw').val();
var error = $('#modal-text-2');

function myInterval() {

    if(email == '' || password == ''){
        error.css('visibility','visible');
        console.log('there is empty inputs here');
    }else{
        error.css('visibility','hidden');
    }
}

$('#modal-button').on('click',function () {
     setInterval(myInterval,5000);
});
//-----------------------------------===============================
//Function to get scroll down on click Log In button and scroll up if you want to close modal window
$('.log-img').click(function(){
    $("html, body").animate({ scrollTop: 700 }, 600);
    return false;
});
$('#span-off').click(function(){
    $("html, body").animate({ scrollTop: 700 }, 600);
    return false;
});
$('#close').on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
//-----------------------------------===============================
//Function to open and close input password on modal window in case when user forgot password
$('.modal-text-3').on('click',function () {
    $(this).text(function(i, v){
        return v === 'forgot password?' ? 'back to Log in' : 'forgot password?'
    });
    $('#modalText-1').text(function(i, v){
        return v === 'Please log in to use account tools:' ? 'To get new password please send your registered e-mail.' : 'Please log in to use account tools:'
    });

    $('#passw').toggleClass('hide-passw');
    $('#email').toggleClass('widthEmail');
});


//-----------------------------------===============================
//Scroll show and hide footer back on top button
$(window).scroll(function(){
    var top = $(window).scrollTop();
    if( top > 1450) {
        $(".container-back-to-top-1024px").css('visibility', 'visible');
    } else {
        $(".container-back-to-top-1024px").css('visibility', 'hidden');
    }
});
//-----------------------------------===============================
//Function to get on top when user will make a click on arrow up icon or under this icon text
$('.back-icon').on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

$('.back-text').on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
//-----------------------------------===============================
//Scroll show and hide nav
$(window).scroll(function(){
    var top = $(window).scrollTop();
    if( top > 710) {
        $(".container-menu-nav-1024px").css('visibility', 'visible');
    } else {
        $(".container-menu-nav-1024px").css('visibility', 'hidden');
    }
});
//-----------------------------------===============================
//Scroll show and hide nav
$(window).scroll(function(){
    var top = $(window).scrollTop();
    if( top > 50) {
        $("#top-container-menu-nav-1024px").css('visibility', 'hidden');
    } else {
        $("#top-container-menu-nav-1024px").css('visibility', 'visible');
    }
});



$(document).ready(function(){
    $('.three-lines-icon').click(function(){

        $('.side-bar-container').toggleClass('ground-grey');
        $('.menu-bar').toggleClass('background-grey-color');
        $(this).toggleClass('move-right');
        // $('.side-bar-container').toggleClass('active');
        $('html').toggleClass('noscroll');

    });
});

// $(document).ready(function(){
//     $('#lines').click(function(){
//
//         $('.side-bar-container').toggleClass('ground-grey');
//         $('.menu-bar').toggleClass('background-grey-color');
//         $(this).toggleClass('move-right');
//         // $('.side-bar-container').toggleClass('active');
//         $('html').toggleClass('noscroll');
//     });
// });