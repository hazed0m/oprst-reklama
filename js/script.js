var autoHeight = $('.block-wrapper .inner-wrap > div').height();
$(window).resize(function(){
    autoHeight = $('.block-wrapper .inner-wrap > div').height();
});
$('.block-wrapper .reklama-block, .block-wrapper .anim-block, .block-wrapper .threed-block').hover(
    function(){    
        let currentH = $(this).height();
        $(this).animate({height:currentH+70},100); 
        $(this).find('.button-block').delay(300).fadeIn('fast');
        setTimeout(() => {
            $(this).find('video').trigger('play');
        },200);
    },
    function(){       
        let currentH = $(this).height(); 
        $(this).delay(200).animate({height:autoHeight},100);
        $(this).find('.button-block').fadeOut('fast');
        setTimeout(() => {
            $(this).find('video').trigger('pause');
        },200);        
    }
);