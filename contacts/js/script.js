//-----------------------------------------------------------=============================================Full
//Count for message  NEED TO FIX
 $(function() {
     $("input[id='message']").keyup(function countRemainingChars(){
         var maxchars = 150;
         var number = $("input[id='message']").val().length;
         if(number <= maxchars){
             $("#count").html(maxchars-number + '/' + 150);
         }
         if(number === maxchars) {
             $("#count").attr({ maxlength: maxchars});
         }
     });
 });

//-----------------------------------------------------------=============================================Full
//Random code for verification
 function randomInteger(min, max) {
     var write = document.getElementById('code-number');
     var rand = min - 0.5 + Math.random() * (max - min + 1);
     rand = Math.round(rand);
     // noinspection JSValidateTypes
     write.innerHTML = rand;
     return rand;
 }

//randomInteger (100000, 999999);

//-----------------------------------------------------------=============================================Full
//Function for validation Email
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

//something wrong with this code
// $('.modal-button').on('click', function (){
//         $('.modal-text-2').css("opacity", "1");
//         console.log('safdfsf');
// });

//-----------------------------------------------------------=============================================Full
 //Modal window for REST OF PAGES
 function ModalAll() {
     // Get modal element
     var modalAll = document.getElementById('registration-modal');
     // Get open modal button
     var modalBtnAll = document.getElementById('log-img');
     var modalImgAll = document.getElementsByClassName('log-img')[0];
     // Get close button
     var closeBtnAll = document.getElementById('close');
     var lines768px = document.getElementsByClassName('three-lines')[0];
     // Get filter
     var filter = document.getElementsByClassName('main-information-container')[0];

     //Get open modal on 1024px
     var modal1024px = document.getElementsByClassName('user-log-icon')[0];
     var menuBar = document.getElementsByClassName('menu-bar')[0];

     // Listen for open click
     modalBtnAll.addEventListener('click', openModalAll);
     modalImgAll.addEventListener('click', openModalAll);
     modal1024px.addEventListener('click', openModalAll);



     // Listen for close click
     closeBtnAll.addEventListener('click', closeModalAll);
     lines768px.addEventListener('click',closeModalAll);
     // Listen for outside click
     window.addEventListener('click', outsideClickAll);

     // Function to open modal
     function openModalAll(){
         modalAll.style.display = 'block';
         //Get dark background filter for page
         $('.menu-bar').addClass('back-grey');
         $('.menu-bar').addClass('menu-bar-position');
         filter.style.filter = 'brightness(50%)';
         filter.style.backgroundColor = 'rgba(0,0,0,.3)';
         $('.main-information-container').addClass('back');

         //Get scroll OFF
         var curScrollTop = $(window).scrollTop();
         $('html').toggleClass('noscroll').css('top', '-' + curScrollTop + 'px');

     }

     // Function to close modal
     function closeModalAll(){
         modalAll.style.display = 'none';
         filter.style.filter = 'none';
         $('.menu-bar').removeClass('back-grey');
         $('.menu-bar').removeClass('menu-bar-position');
         //Get OFF dark background filter for page
         filter.style.backgroundColor = 'rgba(0,0,0,0)';
         $('.main-information-container').removeClass('back');
         //Get  scroll ON
         $('html').toggleClass('noscroll');
     }

     // Function to close modal if outside click
     function outsideClickAll(e){
         if(e.target === modalAll || e.target === menuBar){
             modalAll.style.display = 'none';
             filter.style.filter = 'none';
             $('.menu-bar').removeClass('menu-bar-position');
             $('#registration-modal').toggleClass('close-window-modal');
             //Get OFF dark background filter for page
             filter.style.backgroundColor = 'rgba(0,0,0,0)';
             $('.main-information-container').removeClass('back');
             //Get  scroll ON
             $('#registration-modal').css('display','none');
             $('.menu-bar').removeClass('back-grey');
             $('html').toggleClass('noscroll');

             $('.menu-bar').removeClass('menu-bar-position');
             $('.menu-bar').removeClass('background-grey-color');
         }
     }
     //Function to get no-scroll on three-lines click
     $('.three-lines').on('click', function () {
         $('html').toggleClass('noscroll');
     })
 }
 ModalAll();

//Scroll on all page
$(function() {

    jQuery.scrollSpeed(100, 800);

});

//-----------------------------------------------------------=============================================Full
//Transition function for preloader on modal window
$('#modal-button').on('click',function () {
    $('#linePreloader').toggleClass("lineClick");
    console.log('bvhdfabvdffd');
});

//-----------------------------------------------------------=============================================Full
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

//-----------------------------------------------------------=============================================Full
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


//-----------------------------------===============================1024
//Scroll show and hide footer back on top button
// $(window).scroll(function(){
//     var top = $(window).scrollTop();
//     if( top > 1450) {
//         $(".container-back-to-top-1024px").css('visibility', 'visible');
//     } else {
//         $(".container-back-to-top-1024px").css('visibility', 'hidden');
//     }
// });
//-----------------------------------===============================1024
//Function to get on top when user will make a click on arrow up icon or under this icon text
$('.back-icon').on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

$('.back-text').on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

//-----------------------------------===============================1024
//Function to open left modal window and grey background on main page(working version with animation cross)
$(document).ready(function(){
    $('.three-lines').click(function(){
        $('.side-bar-container').toggleClass('ground-grey');
        $('.menu-bar').toggleClass('background-grey-color');
        $('.menu-bar').toggleClass('menu-bar-position');
        $(this).toggleClass('move-right');
        $('html').toggleClass('noscroll');
        $(this).toggleClass('change');
    });
});





