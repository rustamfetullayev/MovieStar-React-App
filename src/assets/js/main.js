import $ from "jquery";

$(document).ready(function () {
    $('#preloader').css('display', 'none');
})

window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        $('#scroll_nav').css('top', '0%');
    }
    else {
        $('#scroll_nav').css('top', '-50%');
    }
}

$(document).on("click", "#films .select_list", function () {
    if (!$(this).hasClass('active')) {
        $(this).parent().siblings().children('.select_list').removeClass('active');
        $(this).addClass('active');
    }
    else {
        $(this).removeClass('active');
    }
})

$(document).on('click', '#news .inner .mini_img img', function () {
    var oldsrc = $(this).parent().parent().prev().children().children('img').attr('src');
    var src = $(this).attr('src');
    $(this).attr('src', oldsrc);
    $(this).parent().parent().prev().children().children('img').attr('src', src);
})