
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








