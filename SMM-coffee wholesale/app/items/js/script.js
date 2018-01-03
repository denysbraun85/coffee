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
     var filter = document.getElementsByClassName('wrapper')[0];

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


// pageSize = 8;
//
// showPage = function(page) {
//     $(".item-cell").hide();
//     $(".item-cell").each(function(n) {
//         if (n >= pageSize * (page - 1) && n < pageSize * page)
//             $(this).show();
//     });
// };
//
// showPage(1);






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



//Text collapse-1
 $(document).ready(function(){
     $("#arrow-up").click(function(){
         $(".text-3-3").toggle();
     })
 });

//Change arrow up and down for text collapse-1
 $("#arrow-up").bind("click", function() {
     var src = ($(this).attr("src") === "../img/main/downwards-arrow-key-down.png")
         ? "../img/main/downwards-arrow-key.png"
         : "../img/main/downwards-arrow-key-down.png";
     $(this).attr("src", src);
 });

 //Display none for word "more" for collapse-2
 $(document).ready(function(){
     $(".img-arrow-up").click(function(){
         $(".collapse-word").toggle();
     })
 });

 //Text collapse-2
 $(document).ready(function(){
     $(".img-arrow-up").click(function(){
         $(".text-4-4").toggle();
     })
 });

 //Change arrow up and down for text collapse-2
 $(".img-arrow-up").bind("click", function() {
     var src = ($(this).attr("src") === "../img/main/downwards-arrow-key-down.png")
         ? "../img/main/downwards-arrow-key.png"
         : "../img/main/downwards-arrow-key-down.png";
     $(this).attr("src", src);
 });

 //Change icon to share
 $(".soc-img-1").bind("click", function() {
     var src = ($(this).attr("src") === "../img/main/sharing-interface.png")
         ? "../img/main/sharing-interface-red.png"
         : "../img/main/sharing-interface.png";
     $(this).attr("src", src);
 });

 //Change icon to love
 $(".soc-img-2").bind("click", function() {
     var src = ($(this).attr("src") === "../img/main/love.png")
         ? "../img/main/love-red.png"
         : "../img/main/love.png";
     $(this).attr("src", src);
 });

//Filter by type GROUND COFFEE
 $(document).ready(function () {

         $('#filter-type-1').on(
             'change',

             function () {
                 var active = 'show',
                     obj = $('#cell-1');
                    obj2 = $('#cell-9');
                    obj3 = $('#cell-17');
                    obj4 = $('#cell-25');
                 if ($('#filter-type-1').is(":checked")) active = 'hide';
                 obj[active]();
                 obj2[active]();
                 obj3[active]();
                 obj4[active]();
             });

     });

 //Filter by type COFFEE BEANS
 $(document).ready(function () {

     $('#filter-type-2').on(
         'change',

         function () {
             var active = 'show',
                 obj = $('#cell-3');
             obj2 = $('#cell-11');
             obj3 = $('#cell-19');
             obj4 = $('#cell-27');
             obj5 = $('#cell-7');
             obj6 = $('#cell-15');
             obj7 = $('#cell-23');
             obj8 = $('#cell-31');
             if ($('#filter-type-2').is(":checked")) active = 'hide';
             obj[active]();
             obj2[active]();
             obj3[active]();
             obj4[active]();
             obj5[active]();
             obj6[active]();
             obj7[active]();
             obj8[active]();
         });

 });

 //Filter by BRAND

$(document).ready(function () {
    var cell1 = $('#cell-1');
    // cell1.show(); // скрываем необходимый элемент
    var cell2 = $('#cell-2');
    var cell3 = $('#cell-3');
    var cell4 = $('#cell-4');
    var cell5 = $('#cell-5');
    var cell6 = $('#cell-6');
    var cell7 = $('#cell-7');
    var cell8 = $('#cell-8');
    var cell9 = $('#cell-9');
    var cell10 = $('#cell-10');
    var cell11 = $('#cell-11');
    var cell12 = $('#cell-12');
    var cell13 = $('#cell-13');
    var cell14 = $('#cell-14');
    var cell15 = $('#cell-15');
    var cell16 = $('#cell-16');
    var cell17 = $('#cell-17');
    var cell18 = $('#cell-18');
    var cell19 = $('#cell-19');
    var cell20 = $('#cell-20');
    var cell21 = $('#cell-21');
    var cell22 = $('#cell-22');
    var cell23 = $('#cell-23');
    var cell24 = $('#cell-24');
    var cell25 = $('#cell-25');
    var cell26 = $('#cell-26');
    var cell27 = $('#cell-27');
    var cell28 = $('#cell-28');
    var cell29 = $('#cell-29');
    var cell30 = $('#cell-30');
    var cell31 = $('#cell-31');
    var cell32 = $('#cell-32');

    $(".brand-list li:first-child input:radio:not(:checked)").on('click', function() {
        cell3.toggle('hide');
        cell4.toggle('hide');
        cell5.toggle('hide');
        cell6.toggle('hide');
        cell7.toggle('hide');
        cell8.toggle('hide');

        cell11.toggle('hide');
        cell12.toggle('hide');
        cell13.toggle('hide');
        cell14.toggle('hide');
        cell15.toggle('hide');
        cell16.toggle('hide');

        cell19.toggle('hide');
        cell20.toggle('hide');
        cell21.toggle('hide');
        cell22.toggle('hide');
        cell23.toggle('hide');
        cell24.toggle('hide');

        cell27.toggle('hide');
        cell28.toggle('hide');
        cell29.toggle('hide');
        cell30.toggle('hide');
        cell31.toggle('hide');
        cell32.toggle('hide');
    });
    
    $("#brand-name-2:radio:not(:checked)").on('click', function() {
        cell1.toggle('hide');
        cell2.toggle('hide');

        cell9.toggle('hide');
        cell10.toggle('hide');

        cell17.toggle('hide');
        cell18.toggle('hide');

        cell25.toggle('hide');
        cell26.toggle('hide');
    });
});







