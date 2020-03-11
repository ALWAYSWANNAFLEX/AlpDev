$.fn.followTo = function (pos) {
    var $this = this,
        $window = $(window);

    $window.scroll(function (e) {
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'fixed',
                top: 0
            });
        } else {
            if(window.matchMedia('(max-width: 1024px)').matches){
                $this.css({
                    position: 'absolute',
                    top: 76
                });
            } else {
            $this.css({
                position: 'absolute',
                top: 81.6
            });
        }
        }
    });
};

if(window.matchMedia('(max-width: 1024px)').matches){
    $('.menu').followTo(81.6);
} else {
    $('.menu').followTo(81.6);
}