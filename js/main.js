$(document).ready(function(){



    // for height header

    $(function(){
        $('header').height($(window).height());
        $(window).resize(function(){
            $('header').height($(window).height());
        })
    });

    $('.venobox').venobox(); 



    // for navbar

    $(window).scroll(function(){
        if($(window).scrollTop()>=140)
        {
            $('nav').css
            (
                {
                    'background':'#0e1b4d',
                    'padding':'10px 0',
                    'box-shadow': '-4px 10px 14px -12px rgba(0,0,0,0.75)'
                }
            );
        }
        else
        {
            $('nav').css
            (
                {
                    "background":'transparent',
                    'paddingTop':'15px',
                    'box-shadow': 'none'
                }
            );
        }


       });

       if($(window).scrollTop()>=140)
       {
           $('nav').css
           (
               {
                'background':'#0e1b4d',
                'padding':'10px 0',
                'box-shadow': '-4px 10px 14px -12px rgba(0,0,0,0.75)'
               }
           );
       }
       else
       {
           $('nav').css
           (
               {
                "background":'transparent',
                'paddingTop':'15px',
                'box-shadow': 'none'
               }
           );
       }


       //testimanols btn

       $('.sec3 .btns a').on('click', function(e){

            e.preventDefault();

            $(this).addClass('active').siblings().removeClass('active');

            $('#' + $(this).data('click')).siblings().fadeOut(200, function(){

                $('#' + $(this).data('click')).siblings().removeClass('active2');

            });

            $('#' + $(this).data('click')).delay(200).fadeIn(200, function(){
                $('#' + $(this).data('click')).addClass('active2')
            })

       });
       $('.fancy').fancybox({
        selector : '.imglist a:visible',
        thumbs   : {
            autoStart : true
        }
        });


        // slider

        $('.owl-carousel').owlCarousel({
            loop:true,
            dots:true,
            margin:5,
            autoplay:true,
            center:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });


        // for f.a.q

        $('.toggle-icon i').click(function(){

            $(this).parent().parent().find('p').slideToggle(400);

            $('.sec8 .container ul li p').not($(this).parent().parent().find('p')).slideUp();

            $('.sec8 .container ul li h2 ,.sec8 .container ul li i').not($(this).parent().parent().find('h2,i') ).css('color','#000');

            $('.sec8 .container ul li i').not($(this).parent().parent().find('i')).attr('class','fas fa-plus-circle');
   

            if($(this).hasClass('fa-plus-circle'))
            {
                $(this).attr('class', 'fas fa-minus-circle');
                $(this).css('color','#f00');
                $(this).siblings().css('color','#f00');
             
            }else
            {
                $(this).attr('class', 'fas fa-plus-circle');
                $(this).css('color','#000');
                $(this).siblings().css('color','#000');
                
            }

        });


        $('.sec10 .container .pricing-grid .table-price ul li .fa-check ').css('color','green');
        $('.sec10 .container .pricing-grid .table-price ul li .fa-times ').css('color','red');







        // soothm scroll for nav bar

        $('ul.nav-links li a').on('click' , function(){
            $('html , boby').animate({
        
                scrollTop:$( "#" +  $(this).data('scroll')).offset().top
            },1500)
           });

           $('ul.nav-links li a').on('click' , function(){

            $(this).addClass('active5').parent().siblings().find('a').removeClass('active5');
         });



         $(window).scroll(function(){

            $('section , header').each(function(){
                if($(window).scrollTop()+100 >= $(this).offset().top)
                {
                    var secID =$(this).attr('id');
                    $('ul.nav-links li a').removeClass('active5');
                    $('ul.nav-links li a[data-scroll="' + secID +'"]').addClass('active5')
                }
            });
        });

    

          // button up

          $(window).scroll(function(){

            if($(window).scrollTop() >=550)
            {
                $('.up').fadeIn(1000);
            }
            else
            {
                $('.up').fadeOut(1000);
            }
          })
   

            // up button click

            $('.up button').click(function(){
                $('html , body').animate({
                    scrollTop:0
                },500)

            });
            
    $(function() {  
        $("body").niceScroll({
            cursorcolor: "#0078fe",
            cursorwidth: "8px",
            cursorborder:"none"
        });
    });


    $(function(){

        AOS.init();
        window.addEventListener('load',AOS.refresh);
    })


 });



        
  

// $('div.slide h4').click(function(){
//     $(this).next().slideToggle();
//     $('div.slide p').not( $(this).next()).slideUp();
      
//   });

// $('.sec8 .container ul li h2, .sec8 .container ul li i').not($(this).parent().parent()).css('color', '#000');
// $('.sec8 .container ul li i').not($(this).parent().parent()).attr('class', 'fas fa-plus-circle');