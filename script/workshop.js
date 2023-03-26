$(window).scroll(function () {
    var scroll_amount = $(window).scrollTop();
    if (scroll_amount > 30) {
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

$("#source").change(function () {
    sourceChange($(this).val());
});

$("#other_source_div").hide();
function sourceChange(stateValue) {
    if (stateValue == "Others") {
        $("#other_source_div").fadeIn();
        $("#other_source").prop("disabled", false);
    }
    else {
        $("#other_source_div").hide();
        $("#other_source").prop("disabled", true);
    }
}