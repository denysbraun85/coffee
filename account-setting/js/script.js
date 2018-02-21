//-----------------------------------===============================Full
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

     //Get open modal on 1024px
     var modal1024px = document.getElementsByClassName('user-log-icon')[0];
     var menuBar = document.getElementsByClassName('menu-bar')[0];

     // Get filter
     var filter = document.getElementById('wrap');
     var mainen = document.getElementsByTagName('main')[0];

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
         // filter.style.backgroundColor = 'rgba(0,0,0,.3)';
         mainen.style.backgroundColor = 'rgba(62,62,62,.5)';
         $('.main-information-container').addClass('back');

         //Get scroll OFF
         var curScrollTop = $(window).scrollTop();
         $('html').toggleClass('noscroll').css('top', '-' + curScrollTop + 'px');

     }

     // Function to close modal
     function closeModalAll(){
         modalAll.style.display = 'none';
         filter.style.filter = 'none';
         //Get OFF dark background filter for page
         $('.menu-bar').removeClass('back-grey');
         $('.menu-bar').removeClass('menu-bar-position');
         filter.style.backgroundColor = 'rgba(0,0,0,0)';
         mainen.style.backgroundColor = 'rgba(0,0,0,0)';
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
             mainen.style.backgroundColor = 'rgba(0,0,0,0)';
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

//-----------------------------------===============================Full
//Tabs
 $("#tab1").click(moveToFirst);
 $("#tab2").click(moveToSecond);
 $("#tab3").click(moveToThird);
 $("#tab4").click(moveToFour);
 $("#tab5").click(moveToFive);

 function moveToFirst() {
     $("#slide").attr('class', 'move-to-first');
     $(".tab").attr('class', 'tab');
     $("#tab1").attr('class', 'tab selected');
 }

 function moveToSecond() {
     $("#slide").attr('class', 'move-to-second');
     $(".tab").attr('class', 'tab');
     $("#tab2").attr('class', 'tab selected');
 }

 function moveToThird() {
     $("#slide").attr('class', 'move-to-third');
     $(".tab").attr('class', 'tab');
     $("#tab3").attr('class', 'tab selected');
 }

 function moveToFour() {
     $("#slide").attr('class', 'move-to-four');
     $(".tab").attr('class', 'tab');
     $("#tab4").attr('class', 'tab selected');
 }

 function moveToFive() {
     $("#slide").attr('class', 'move-to-five');
     $(".tab").attr('class', 'tab');
     $("#tab5").attr('class', 'tab selected');
 }


//-----------------------------------===============================Full
// //Check for tab-3
//  if($(".item-list li input").is(":checked")) {
//      $('.text-6').css('display','block');
//  }
//
//  function checkConfirm() {
//
//      if($("#item-1").is(":checked")) {
//          $('.text-6').css('display','block');
//      }
//
//  }

//-----------------------------------===============================Full
//Add phone number
 function add_fields() {
     var input = 1;
     input++;
     var objTo = document.getElementById('phone-number-container');
     var divinput = document.createElement("div-new-phone");
     var more_fields = document.createElement("more_fields");
     var footer = document.getElementsByTagName('footer')[0];
     divinput.innerHTML = '<div ><input type="number" id="phone"  required="required"/><label></label></div>';

     objTo.prepend(divinput);
     more_fields.style.marginTop = '40px';
     footer.style.marginTop = '40px';
 }

 function add_fields2() {
     var input = 1;
     input++;
     var objTo = document.getElementById('website-container');
     var divinput = document.createElement("div-new-web");
     var more_fields = document.createElement("more_fields-web");
     var footer = document.getElementsByTagName('footer')[0];
     divinput.innerHTML = '<div class="group" id="web-container"><input type="email" id="web" required="required"/><label></label></div>';

     objTo.prepend(divinput);
     more_fields.style.marginTop = '40px';
     footer.style.marginTop = '40px';
 }

 function add_fields3() {
     var input = 1;
     input++;
     var objTo = document.getElementById('adress-container');
     var divinput = document.createElement("div-new-adress");
     var more_fields = document.createElement("more_adress");
     var footer = document.getElementsByTagName('footer')[0];
     divinput.innerHTML = '<div class="group" id="adres-container"><input type="text" id="adres" required="required"/><label></label></div>';

     objTo.prepend(divinput);
     more_fields.style.marginTop = '40px';
     footer.style.marginTop = '40px';
 }

 function add_fields4() {
     var input = 1;
     input++;
     var objTo = document.getElementById('phone-number-container-2');
     var divinput = document.createElement("div-new-numb");
     var more_fields = document.createElement("more_numb");
     var footer = document.getElementsByTagName('footer')[0];
     divinput.innerHTML = '<div class="group" id="numb"><input type="number" id="num" required="required"/><label></label></div>';

     objTo.prepend(divinput);
     more_fields.style.marginTop = '40px';
     footer.style.marginTop = '40px';
 }

 function add_fields5() {
     var input = 1;
     input++;
     var objTo = document.getElementById('website-container-2');
     var divinput = document.createElement("div-new-website");
     var more_fields = document.createElement("more_website");
     var footer = document.getElementsByTagName('footer')[0];
     divinput.innerHTML = '<div class="group" id="site"><input type="email" id="web" required="required"/><label></label></div>';

     objTo.prepend(divinput);
     more_fields.style.marginTop = '40px';
     footer.style.marginTop = '40px';
 }

//-----------------------------------===============================Full
 //Change icon to share
 $(".social-share-img1").bind("click", function() {
     var src = ($(this).attr("src") === "../img/main/sharing-interface.png")
         ? "../img/main/sharing-interface-red.png"
         : "../img/main/sharing-interface.png";
     $(this).attr("src", src);
 });

//-----------------------------------===============================Full
 //Change icon to love
 $(".social-share-img2").bind("click", function() {
     var src = ($(this).attr("src") === "../img/main/love.png")
         ? "../img/main/love-red.png"
         : "../img/main/love.png";
     $(this).attr("src", src);
 });

//-----------------------------------===============================Full
 //Check for brands, all clear
 $("#all-brands-check").change(function() {
     if(this.checked) {
         $( "#check-1" ).attr('checked', 'checked');
         $( "#check-2" ).attr('checked', 'checked');
         $( "#check-3" ).attr('checked', 'checked');
         $( "#check-4" ).attr('checked', 'checked');
         $( "#check-5" ).attr('checked', 'checked');
         $( "#check-6" ).attr('checked', 'checked');
         $( "#check-7" ).attr('checked', 'checked');
         $( "#check-8" ).attr('checked', 'checked');
     }
 });

 $('#reset-checkbox-button').on('click',function () {
     $("#all-brands-check").prop('checked', false);
     $( "#check-1" ).prop('checked', false);
     $( "#check-2" ).prop('checked', false);
     $( "#check-3" ).prop('checked', false);
     $( "#check-4" ).prop('checked', false);
     $( "#check-5" ).prop('checked', false);
     $( "#check-6" ).prop('checked', false);
     $( "#check-7" ).prop('checked', false);
     $( "#check-8" ).prop('checked', false);

 });

//-----------------------------------===============================Full
 //Functions for brand list. When you want change the brand all you need is click on one fo 6 brand and you will see the short list below
 $("#brand-1").change(function() {
     if(this.checked) {
         $( "#item-1").attr('disabled', false).attr('checked', false);
         $( "#item-2").attr('disabled', false).attr('checked', false);
         $( "#item-3").attr('disabled', true).attr('checked', false);
         $( "#item-4").attr('disabled', true).attr('checked', false);
         $( "#item-5").attr('disabled', true).attr('checked', false);
         $( "#item-6").attr('disabled', true).attr('checked', false);
         $( "#item-7").attr('disabled', true).attr('checked', false);
         $( "#item-8").attr('disabled', true).attr('checked', false);
         $( ".item-list li:first-child label").css('color', 'black');
         $( ".item-list li:nth-child(2) label").css('color', 'black');
         $( ".item-list li:nth-child(3) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(4) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(5) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(6) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(7) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(8) label").css('color', '#a9a9a9');
     }
 });

 $("#brand-2").change(function() {
     if(this.checked) {
         $( "#item-1").attr('disabled', true).attr('checked', false);
         $( "#item-2").attr('disabled', true).attr('checked', false);
         $( "#item-3").attr('disabled', false).attr('checked', false);
         $( "#item-4").attr('disabled', false).attr('checked', false);
         $( "#item-5").attr('disabled', true).attr('checked', false);
         $( "#item-6").attr('disabled', true).attr('checked', false);
         $( "#item-7").attr('disabled', true).attr('checked', false);
         $( "#item-8").attr('disabled', true).attr('checked', false);
         $( ".item-list li:first-child label").css('color', '#a9a9a');
         $( ".item-list li:nth-child(2) label").css('color', '#a9a9a');
         $( ".item-list li:nth-child(3) label").css('color', 'black');
         $( ".item-list li:nth-child(4) label").css('color', 'black');
         $( ".item-list li:nth-child(5) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(6) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(7) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(8) label").css('color', '#a9a9a9');
     }
 });

 $("#brand-3").change(function() {
     if(this.checked) {
         $( "#item-1").attr('disabled', true).attr('checked', false);
         $( "#item-2").attr('disabled', true).attr('checked', false);
         $( "#item-3").attr('disabled', true).attr('checked', false);
         $( "#item-4").attr('disabled', true).attr('checked', false);
         $( "#item-5").attr('disabled', false).attr('checked', false);
         $( "#item-6").attr('disabled', true).attr('checked', false);
         $( "#item-7").attr('disabled', true).attr('checked', false);
         $( "#item-8").attr('disabled', true).attr('checked', false);
         $( ".item-list li:first-child label").css('color', '#a9a9a');
         $( ".item-list li:nth-child(2) label").css('color', '#a9a9a');
         $( ".item-list li:nth-child(3) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(4) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(5) label").css('color', 'black');
         $( ".item-list li:nth-child(6) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(7) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(8) label").css('color', '#a9a9a9');
     }
 });

 $("#brand-4").change(function() {
     if(this.checked) {
         $( "#item-1").attr('disabled', true).attr('checked', false);
         $( "#item-2").attr('disabled', true).attr('checked', false);
         $( "#item-3").attr('disabled', true).attr('checked', false);
         $( "#item-4").attr('disabled', true).attr('checked', false);
         $( "#item-5").attr('disabled', true).attr('checked', false);
         $( "#item-6").attr('disabled', false).attr('checked', false);
         $( "#item-7").attr('disabled', true).attr('checked', false);
         $( "#item-8").attr('disabled', true).attr('checked', false);
         $( ".item-list li:first-child label").css('color', '#a9a9a');
         $( ".item-list li:nth-child(2) label").css('color', '#a9a9a');
         $( ".item-list li:nth-child(3) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(4) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(5) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(6) label").css('color', 'black');
         $( ".item-list li:nth-child(7) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(8) label").css('color', '#a9a9a9');
     }
 });

 $("#brand-5").change(function() {
     if(this.checked) {
         $( "#item-1").attr('disabled', true).attr('checked', false);
         $( "#item-2").attr('disabled', true).attr('checked', false);
         $( "#item-3").attr('disabled', true).attr('checked', false);
         $( "#item-4").attr('disabled', true).attr('checked', false);
         $( "#item-5").attr('disabled', true).attr('checked', false);
         $( "#item-6").attr('disabled', true).attr('checked', false);
         $( "#item-7").attr('disabled', false).attr('checked', false);
         $( "#item-8").attr('disabled', true).attr('checked', false);
         $( ".item-list li:first-child label").css('color', '#a9a9a');
         $( ".item-list li:nth-child(2) label").css('color', '#a9a9a');
         $( ".item-list li:nth-child(3) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(4) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(5) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(6) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(7) label").css('color', 'black');
         $( ".item-list li:nth-child(8) label").css('color', '#a9a9a9');
     }
 });

 $("#brand-6").change(function() {
     if(this.checked) {
         $( "#item-1").attr('disabled', true).attr('checked', false);
         $( "#item-2").attr('disabled', true).attr('checked', false);
         $( "#item-3").attr('disabled', true).attr('checked', false);
         $( "#item-4").attr('disabled', true).attr('checked', false);
         $( "#item-5").attr('disabled', true).attr('checked', false);
         $( "#item-6").attr('disabled', true).attr('checked', false);
         $( "#item-7").attr('disabled', true).attr('checked', false);
         $( "#item-8").attr('disabled', false).attr('checked', false);
         $( ".item-list li:first-child label").css('color', '#a9a9a');
         $( ".item-list li:nth-child(2) label").css('color', '#a9a9a');
         $( ".item-list li:nth-child(3) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(4) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(5) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(6) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(7) label").css('color', '#a9a9a9');
         $( ".item-list li:nth-child(8) label").css('color', 'black');
     }
 });

//-----------------------------------===============================Full
//Password function
 $('.save-pass').on('click',function () {
     var oldPassword = $("#pass").val();
     var password = $("#new-pass").val();
     var confirmPassword = $("#rep-pass").val();


//match password
//      var passwordRegex = '/^[a-z0-9_-]{6,18}$/';
//Match 8 to 15 character string with at least one upper case letter, one lower case letter, and one digit (useful for passwords).
//      var passwordStrengthRegex = /((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,15})/gm;
//match elements that could contain a phone number
//https://www.sitepoint.com/jquery-basic-regex-selector-examples/

     if(oldPassword === 'roof'){
         console.log('yes');
         alert('Password correct');
     }else{
         console.log('nope');
         alert('Wrong password');
     }

     if(password === confirmPassword && password !== '' && confirmPassword !== ''){
         console.log('yes');
         alert('New password correct!');
     }else{
         console.log('nope');

     }

      if(password === '' || confirmPassword === ''){
          console.log('Write down password')
      }
 });

 //-----------------------------------===============================Full
 //Scroll on all page
 $(function() {

     jQuery.scrollSpeed(100, 800);

 });

 //-----------------------------------===============================Full
 //Transition function for preloader on modal window
 $('#modal-button').on('click',function () {
     $('#linePreloader').toggleClass("lineClick");
     console.log('bvhdfabvdffd');
 });

 //-----------------------------------===============================Full
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

 //-----------------------------------===============================Full
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

//-----------------------------------===============================1024
//Slider for main page
// $(document).ready(function(){
//     $('.tab-slider-1024px').slick({
//
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     // autoplay: true,
//                     // autoplaySpeed: 3000,
//                     arrows: false,
//                     slidesToScroll: 1,
//                     slidesToShow: 1
//                 }
//             }
//         ]
//     });
// });