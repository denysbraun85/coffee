
 $(document).ready(function(){              //slider for main page
     $('.slider-1').slick({
         slidesToShow: 6,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 3000,
         arrows: false
 });
 });



 $(".social-share-img1").bind("click", function() {                         //change picture for social needs
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



 $(".scroll").click(function(){                             // scroll on picture
     $("html, body").animate({scrollTop: $(".navigation").height()+ 700 },"slow");

     return false;});


// $(document).ready(function(){    // scroll for all document
//     $(window).scroll(function(){
//         var bo = $("body").scrollTop();
//         if ( bo > 200 ) $(".container-menu-main").animate({'opacity':'1'},500);
//     })
// });

 jQuery(function(f) {           //scroll show and hide nav menu
     var element = f('.container-menu-main');
     f(window).scroll(function () {
         element['fade' + (f(this).scrollTop() > 600 ? 'In' : 'Out')](500);
     })

 });

$(function () {                    // tabs on main page
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


 // $(".tab").bind("click", function() {     // change check picture on tabs main page
 //     var src = ($('.tabs-img').attr("src") === "../img/main/type.png")
 //         ? "../img/main/type_copy_red.png"
 //         : "../img/main/type.png";
 //     $(this).attr("src", src);
 // });





 $(function() {
     $("input[id='message']").keyup(function countRemainingChars(){     //count for message  NEED TO FIX
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


 function randomInteger(min, max) {                                 //random code for verification
     var write = document.getElementById('code-number');
     var rand = min - 0.5 + Math.random() * (max - min + 1);
     rand = Math.round(rand);
     write.innerHTML = rand;
     return rand;
 }

//randomInteger (100000, 999999);

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

// $('.modal-button').on('click', function (){          //something wrong with this code
//         $('.modal-text-2').css("opacity", "1");
//         console.log('safdfsf');
// });



//Modal window for MAIN PAGE
 function modalMain() {
     // Get modal element
     var modal = document.getElementById('registration-modal');
     // Get open modal button
     var modalBtn = document.getElementById('span-off');
     var modalImg = document.getElementsByClassName('log-img')[0];
     // Get close button
     var closeBtn = document.getElementById('close');
     //var header = document.getElementById('header');   //Why this is wrong?

     // Listen for open click
     modalBtn.addEventListener('click', openModal);
     modalImg.addEventListener('click', openModal);

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

 //Modal window for REST OF PAGES
    function ModalAll() {
        // Get modal element
        var modalAll = document.getElementById('registration-modal');
        // Get open modal button
        var modalBtnAll = document.getElementById('log-img');
        var modalImgAll = document.getElementsByClassName('log-img')[0];
        // Get close button
        var closeBtnAll = document.getElementById('close');
        //var header = document.getElementById('header');   //Why this is wrong?

        // Listen for open click
        // modalBtnAll.addEventListener('click', openModalAll);
        modalImgAll.addEventListener('click', openModalAll);

        // Listen for close click
        closeBtnAll.addEventListener('click', closeModalAll);
        // Listen for outside click
        window.addEventListener('click', outsideClickAll);

        // Function to open modal
        function openModalAll(){
            modalAll.style.display = 'block';
            //header.style.background = "rgba(0,0,0,0)";        //the same shit
        }

        // Function to close modal
        function closeModalAll(){
            modalAll.style.display = 'none';
        }

        // Function to close modal if outside click
        function outsideClickAll(e){
            if(e.target === modalAll){
                modalAll.style.display = 'none';
            }
        }
    }
 ModalAll();


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

