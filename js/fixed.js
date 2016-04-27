var toc = document.getElementById("toc");
var offset = $(toc).offset().top;
var height = $(toc).height();
$(window).scroll(function() {
    var scrollYpos = $(document).scrollTop();
    if (scrollYpos > offset) {
        $(toc).css({
            'top': '1em',
            'position': 'fixed',
        });
    } else {
        $(toc).css({
            'top': 'auto',
            'position': 'relative'
        });
    }
});