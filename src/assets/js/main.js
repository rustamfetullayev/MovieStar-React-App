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

$(document).on('click', '#heading .hidden_nav_icon', function () {
    if ($('#heading .hidden_main_nav').height() === 0) {
        $('#heading .hidden_main_nav').css('height', '270px');
    }
    else {
        $('#heading .hidden_main_nav').css('height', '0px');
    }
});

$(document).on('click', '#scroll_nav .hidden_nav_icon', function () {
    if ($('#scroll_nav .hidden_main_nav').height() === 0) {
        $('#scroll_nav .hidden_main_nav').css('height', '270px');
    }
    else {
        $('#scroll_nav .hidden_main_nav').css('height', '0px');
    }
});

$(document).on('click', '#selected_film .content .buttons .play', function () {
    $('#trailer').css('display', 'block');
})

$(document).on('click', '#main_slider .content .buttons .play', function () {
    var src = $(this).next().attr('src');
    $('#trailer').css('display', 'block');
    $('#trailer #trailer_iframe').attr('src', '');
    $('#trailer #trailer_iframe').attr('src', src);
})



$(document).on('click', '#trailer', function () {
    $(this).css('display', 'none');
    var video = $("#trailer_iframe").attr("src");
    $("#trailer_iframe").attr("src", "");
    $("#trailer_iframe").attr("src", video);
})

$(document).on('click', '#personal .posts nav ul #liked', function () {
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $(this).next().removeClass('active');
        $('#personal .posts .screen .liked').addClass('selected');
        $('#personal .posts .screen .saved').removeClass('selected');
    }
})

$(document).on('click', '#personal .posts nav ul #saved', function () {
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $(this).prev().removeClass('active');
        $('#personal .posts .screen .saved').addClass('selected');
        $('#personal .posts .screen .liked').removeClass('selected');
    }
})