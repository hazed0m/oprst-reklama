var autoHeight = $('.block-wrapper .inner-wrap > div').height(),
    catalizator = 80;
$(window).resize(function(){
    autoHeight = $('.block-wrapper .inner-wrap > div').height();
});
$('.block-wrapper .reklama-block, .block-wrapper .anim-block, .block-wrapper .threed-block').hover(
    function(){          
        $(this).find('.button-block').stop();
        let currentH = 0;
        if($(window).width()<=450)
        {
            currentH = parseInt($(this).height());
        }
        else
        {
            currentH = parseInt($(this).css('min-height'));
        }
        $(this).animate({height:currentH+catalizator},100); 
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