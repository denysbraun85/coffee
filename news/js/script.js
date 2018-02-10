//----------------------------------------------------=====================================================Full
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
     var mainen = document.getElementsByTagName('main')[0];

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
         $('.menu-bar').removeClass('back-grey');
         $('.menu-bar').removeClass('menu-bar-position');
         //Get OFF dark background filter for page
         mainen.style.backgroundColor = 'rgba(0,0,0,0)';
         $('.main-information-container').removeClass('back');
         //Get  scroll ON
         $('html').toggleClass('noscroll');
     }

     // Function to close modal if outside click
     function outsideClickAll(e){
         if(e.target === modalAll || e.target === menuBar){
             modalAll.style.display = 'none';
             // filter.style.filter = 'none';
             $('.menu-bar').removeClass('menu-bar-position');
             $('#registration-modal').toggleClass('close-window-modal');
             //Get OFF dark background filter for page
             mainen.style.backgroundColor = 'rgba(0,0,0,0)';
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

//----------------------------------------------------=====================================================Full
//Pagination function
 var nombrePage = $(".page").length;

 showPage = function(pagination) {
     if (pagination < 0 || pagination >= nombrePage) return;

     $(".page").hide().eq(pagination).show();
     $("#pagin li").removeClass("active").eq(pagination).addClass("active");
 };

 // Go to Left
 $(".prev").click(function() {
     showPage($("#pagin ul .active").index() - 1);
 });

 // Go to Right
 $(".next").click(function() {
     showPage($("#pagin ul .active").index() + 1);
 });

 $("#pagin ul a").click(function(e) {
     e.preventDefault();
     showPage($(this).parent().index());
 });

 showPage(0);

//----------------------------------------------------=====================================================Full
//Pagination function 2
 var nombrePage2 = $(".page").length;

 showPage2 = function(pagination) {
     if (pagination < 0 || pagination >= nombrePage2) return;

     $(".page").hide().eq(pagination).show();
     $("#pagin-2 li").removeClass("active").eq(pagination).addClass("active");
 };

 // Go to Left
 $(".prev").click(function() {
     showPage($("#pagin-2 ul .active").index() - 1);
 });

 // Go to Right
 $(".next").click(function() {
     showPage($("#pagin-2 ul .active").index() + 1);
 });

 $("#pagin-2 ul a").click(function(e) {
     e.preventDefault();
     showPage($(this).parent().index());
 });

 showPage2(0);

//----------------------------------------------------=====================================================Full
 //Change icon to share
 $(".social-share-img1").bind("click", function() {
     var src = ($(this).attr("src") === "../img/main/sharing-interface.png")
         ? "../img/main/sharing-interface-red.png"
         : "../img/main/sharing-interface.png";
     $(this).attr("src", src);
 });
 $(".social-share-icon1").bind("click", function() {
     var src = ($(this).attr("src") === "../img/main/sharing-interface.png")
         ? "../img/main/sharing-interface-red.png"
         : "../img/main/sharing-interface.png";
     $(this).attr("src", src);
 });

//----------------------------------------------------=====================================================Full
 //Change icon to love
 $(".social-share-img2").bind("click", function() {
     var src = ($(this).attr("src") === "../img/main/love.png")
         ? "../img/main/love-red.png"
         : "../img/main/love.png";
     $(this).attr("src", src);
 });
 $(".social-share-icon2").bind("click", function() {
     var src = ($(this).attr("src") === "../img/main/love.png")
         ? "../img/main/love-red.png"
         : "../img/main/love.png";
     $(this).attr("src", src);
 });

//----------------------------------------------------=====================================================Full
//  //Pagination function
//  var nombrePage = $(".page").length;
//
//  showPage = function(pagination) {
//      if (pagination < 0 || pagination >= nombrePage) return;
//
//      $(".page").hide().eq(pagination).show();
//      $("#pagin li").removeClass("active").eq(pagination).addClass("active");
//  };
//
//  // Go to Left
//  $(".prev").click(function() {
//      showPage($("#pagin ul .active").index() - 1);
//  });
//
//  // Go to Right
//  $(".next").click(function() {
//      showPage($("#pagin ul .active").index() + 1);
//  });
//
//  $("#pagin ul a").click(function(e) {
//      e.preventDefault();
//      showPage($(this).parent().index());
//  });
//
//  showPage(0);

 // $('.tabbable-panel').each(function(i, elm) {                //tabs for news page
 //
 //     $(elm).text($(elm).next('ul').find('li.active a').text());
 //
 // });
 //
 // $('.tabbable-panel').on('click', function(e) {
 //
 //     e.preventDefault();
 //
 //     $(e.target).toggleClass('open').next('ul').slideToggle();
 //
 // });
 //
 // $('#tab-content a[data-toggle="tab"]').on('click', function(e) {
 //
 //     e.preventDefault();
 //
 //     $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());
 //
 // });



 // $(document).ready(function(){
 //     $("#tab_default_2").hide();
 //     $("#tab_default_3").hide();
 //     $(".tab-nav").eq(0).addClass("active");
 //     $(".tab-nav").click(function(){
 //         $(".tab-nav").removeClass("active");
 //         debugger;
 //         $("#tab_default_1").hide();
 //         $("#tab_default_2").hide();
 //         $("#tab_default_3").hide();
 //         $(this).addClass("active");
 //     });
 // });

//----------------------------------------------------=====================================================Full
 // Tabs on main page
 $(function () {
     var tabContent = $('.tab-content > div');
     tabContent.hide().filter(':first').fadeIn('slow');
     $('#tabs  li:first a').addClass('selected');
     $('#tabs  li:nth-child(2) a').removeClass('selected');
     $('#tabs  li:nth-child(3) a').removeClass('selected');
     $('#tabs  li:first').addClass('selected');


     $('#tabs  li:nth-child(2) a').click(function () {
         tabContent.hide();
         tabContent.filter(this.hash).fadeIn('slow');
         $('#tabs  li:first a').removeClass('selected');
         $('#tabs  li:nth-child(3) a').removeClass('selected');
         $(this).addClass('selected');
         $('#tabs  li:first').removeClass('selected');
         $('#tabs  li:nth-child(3)').removeClass('selected');
         $('#tabs  li:nth-child(2)').addClass('selected');

         return false;
     });

     $('#tabs  li:nth-child(3) a').click(function () {
         tabContent.hide();
         tabContent.filter(this.hash).fadeIn('slow');
         $('#tabs  li:first a').removeClass('selected');
         $('#tabs  li:nth-child(2) a').removeClass('selected');
         $(this).addClass('selected');
         $('#tabs  li:first').removeClass('selected');
         $('#tabs  li:nth-child(2)').removeClass('selected');
         $('#tabs  li:nth-child(3)').addClass('selected');

         return false;
     });

     $('#tabs  li:nth-child(1) a').click(function () {
         tabContent.hide();
         tabContent.filter(this.hash).fadeIn('slow');
         $('#tabs  li:nth-child(2) a').removeClass('selected');
         $('#tabs  li:nth-child(3) a').removeClass('selected');
         $(this).addClass('selected');
         $('#tabs  li:nth-child(2)').removeClass('selected');
         $('#tabs  li:nth-child(3)').removeClass('selected');
         $('#tabs  li:first').addClass('selected');

         return false;
     });
     // $('.selected').css('border-bottom','4px solid #ef524b','box-sizing','border-box')
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

    //
    // if($('#tabs').find('li:nth-child(2) a').hasClass('selected')){
    //      // $('.tab-content').css('paddingBottom','0','marginBottom','22');
    //     console.log('sjahdsfkghkdfhgkufhdukhkdfg');
    // }else{
    //     console.log('999999999');
    // }

