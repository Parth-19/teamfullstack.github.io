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

$(".bi-arrow-up-circle-fill").hide();
$("#previous_slide").hide();
$(window).scroll(function () {
    var scroll_amount = $(window).scrollTop();
    if (scroll_amount > 50) {
        $("#go_to_top").fadeIn();
    }
    if (scroll_amount == 0) {
        $("#go_to_top").fadeOut();
    }
});