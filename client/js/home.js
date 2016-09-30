// Template.home.render({
//     var wScoll = $(this).scrollTop();
//     console.log(wScroll);
// });

Template.home.onRendered(function() {

    $(window).scroll(example);

    function example() {

        var wScroll = $(window).scrollTop();

        if (wScroll > $('.project-home').offset().top - ($(window).height() / 1.5)) {

            $('.project-card').each(function(i){

                setTimeout(function() {
                    $('.project-card').eq(i).addClass('is-showing');
                }, (1000 * (Math.exp(i * 0.14))) - 1000);
            });

        }



        // var tempScrollTop = $(window).scrollTop();
        // console.log("Scroll from top: " + tempScrollTop.toString());
    };
});
