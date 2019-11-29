
//scroll an all links
var offset = 0;
$(document).ready(function(id){
   $('a[href^="#l"]').on("click",function(id) {

      
           
      if($(".method_show_row_1").is(":hidden")){
            
         $(".method_show_row_1").show();
         $(".hide.while").show();

      }


      var elementClick = $(this).attr("href");

      var destination = $(elementClick).offset().top ;
   
   $('html, body').animate({
      scrollTop: destination 
   }, 1000);  
        
    });

});

 




$(".login-a").on("click",function(){
 ///   $(".l").removeClass("default");
    $(".links_hide").css("display","none");

  
   
   

});
  

$(".close").on("click",function(){
        
  $(".links_hide").css("display","block  ");
});



//add style for hat on scroll
$(document).ready(function(){
    $(".links_all").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 20) {
					 $(".links_all").addClass("default").fadeIn('fast');
			} else {
				$(".links_all").removeClass("default").fadeIn('fast');
				};
		});
    });

$(document).ready(function(){
     
   $('.login-a').on('click',function(){
    $(document).bind('touchmove', false);
   })

});


$('.login-a').on('click', function (event) {
  $("body").css("overflow","hidden"); 
});

$('.close').on('click', function (event) {
  $("body").css("overflow","auto"); 
});



    //show or hide men
    $(document).ready(function(){
      $(".links_all").removeClass("default");
           $(window).scroll(function(){
              if ($(this).scrollTop() > 200) {
               $( ".method_show_row_1" ).show( 'slow', function() {
                });
                $( ".method_show_row_2" ).show( 'slow', function() {
               });
               $( ".method_show_row_3" ).show( 'slow', function() {
               });


              }
              if($(this).scrollTop()>750){
                 $("#hide_while_1").show('slow',function(){

                 });
                 $("#hide_while_2").show('slow',function(){

               });
               $("#hide_while_3").show('slow',function(){

               });
               }
              
            });
         });



         
        
         var slides=0;


         showSlides();
         
         
         function showSlides(){
         
           var slide = document.getElementsByClassName("slide");
         
           for(var i =0;i<slide.length;i++){
             slide[i].style.display="none";
           }
           slides++;
           if(slides>slide.length){slides=1}
           slide[slides-1].style.display="block";
           setTimeout(showSlides, 2500); 
         }



         
         $(document).ready(function() {
            $('#example').DataTable();
        } );
      


$('.read_1').on('click',function(){
     
  $('.paris_offer').slideToggle( "fast", function() {
      $('.paris_offer').toggleClass('show');
    });
          
});
$('.read_2').on('click',function(){
     
   $('.york').slideToggle( "fast", function() {
       $('.york').toggleClass('show');
     });
           
 });
 $('.read_3').on('click',function(){
     
   $('.vena_desc').slideToggle( "fast", function() {
       $('.vena_desc').toggleClass('show');
     });
           
 });
 $('.read_4').on('click',function(){
     
   $('.croatia_desc_1').slideToggle( "fast", function() {
       $('.croatia_desc_1').toggleClass('show');
     });
           
 });
 $('.read_5').on('click',function(){
     
   $('.monte_desc_1').slideToggle( "fast", function() {
       $('.monte_desc_1').toggleClass('show');
     });
           
 });
 $('.read_6').on('click',function(){
     
   $('.berlin_desc_1').slideToggle( "fast", function() {
       $('.berlin_desc_1').toggleClass('show');
     });
           
 });