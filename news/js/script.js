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
     var filter = document.getElementsByClassName('main-information-container')[0];

     // Listen for open click
     modalBtnAll.addEventListener('click', openModalAll);
     modalImgAll.addEventListener('click', openModalAll);

     // Listen for close click
     closeBtnAll.addEventListener('click', closeModalAll);
     // Listen for outside click
     window.addEventListener('click', outsideClickAll);

     // Function to open modal
     function openModalAll(){
         modalAll.style.display = 'block';
         //Get dark background filter for page
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
 }
 ModalAll();

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

 // Tabs on main page
 $(function () {
     var tabContent = $('.tab-content > div');
     tabContent.hide().filter(':first').fadeIn('slow');
     $('#tabs  li:first a').addClass('selected');

     $('#tabs  a').click(function () {
         tabContent.hide();
         tabContent.filter(this.hash).fadeIn('slow');
         $('#tabs  li:first a').removeClass('selected');
         $(this).addClass('selected');

         return false;
     })
     // $('.selected').css('border-bottom','4px solid #ef524b','box-sizing','border-box')
 });




 // var tabs = document.getElementsByClassName('Tab');

 // Array.prototype.forEach.call(tabs, function(tab) {
 //     tab.addEventListener('click', setActiveClass);
 // });

 // function setActiveClass(evt) {
 //     Array.prototype.forEach.call(tabs, function(tab) {
 //         tab.classList.remove('active');
 //     });

 //     evt.currentTarget.classList.add('active');
 // }