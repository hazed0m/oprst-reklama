$('.block-wrapper .reklama-block, .block-wrapper .anim-block, .block-wrapper .threed-block').hover(
    function(){
        setTimeout(() => {
            $(this).find('video').trigger('play');
        },200);   
    },
    function(){
        $(this).find('video').trigger('pause');
        setTimeout(() => {
            $(this).find('video').trigger('load');
        },200);        
    }
);