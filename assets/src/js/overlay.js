$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked"); 
    if ($(".overlay").hasClass('open')) {
        $('<div class="darken">&nbsp;</div>').prependTo($('body'));
    } else {
        $('.darken').remove();
    }
});