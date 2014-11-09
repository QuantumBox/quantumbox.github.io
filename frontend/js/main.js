$(document).ready(function () {
    $('nav.top').click(function () {
        $(this).toggleClass('active');
    });
    
    $('article.post').click(function () {
        if(!$(this).hasClass('active'))
        {
            $('article.post').removeClass('active');  
            $(this).addClass('active');
        }
    });
    
    $('article.post').mouseleave(function () {
        $('article.post').removeClass('active');   
    });

});
