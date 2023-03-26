$(window).scroll(function () {
    var scroll_amount = $(window).scrollTop();
    if (scroll_amount > 50) {
        $(".navbar").addClass('navbar_resize');
        $(".navbar").removeClass('navbar_noresize');
        $(".navbar img").addClass('navbar_logo_resize');
        $(".navbar img").removeClass('navbar_logo_noresize');
        $(".navbar-toggler").addClass('navbar_toggler_resize');
        $(".navbar-toggler").removeClass('navbar_toggler_noresize');

    }
    if (scroll_amount == 0) {
        $(".navbar").removeClass('navbar_resize');
        $(".navbar").addClass('navbar_noresize');
        $(".navbar img").removeClass('navbar_logo_resize');
        $(".navbar img").addClass('navbar_logo_noresize');
        $(".navbar-toggler").removeClass('navbar_toggler_resize');
        $(".navbar-toggler").addClass('navbar_toggler_noresize');
    }
});

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

var j = 0;
const video_width = $(".testimonials_video").width()
testimonial_videos = document.getElementsByClassName('testimonials_video')
for (j = 0; j < testimonial_videos.length; j++) {
    testimonial_videos[j].style.height = (9 / 16) * video_width + "px";
}
$(document).ready(function () {
    $(window).resize(function () {
        var j = 0;
        const video_width = $(".testimonials_video").width()
        testimonial_videos = document.getElementsByClassName('testimonials_video')
        for (j = 0; j < testimonial_videos.length; j++) {
            testimonial_videos[j].style.height = (9 / 16) * video_width + "px";
        }
    });
});