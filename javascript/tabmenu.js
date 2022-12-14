$(document).ready(function(){
    $('ul.menu-links li').click(function(){
        var tab = $(this).attr('data-tab');

        $('ul.menu-links li').removeClass('current');
        $('.tab-content').removeClass('active');

        $(this).addClass('current');
        $('#' + tab).addClass('active');
    });

    $('#tab-01 ul.list li').click(function(){
        var tab = $(this).attr('data-tab');
        var split = tab.split('-');

        $('ul.menu-links li').removeClass('current');
        $('.tab-content').removeClass('active');

        $('#'+split[0]+split[1]).addClass('current');
        $('#' + tab).addClass('active');
    });

    $('#tab-02 ul#tab-content-list li').click(function(){
        var tab = $(this).attr('data-set');

        $('ul#tab-content-list li').removeClass('on');
        $('.set-content').removeClass('on');

        $('#' + tab).addClass('on');
        $(this).addClass('on');
    });
});