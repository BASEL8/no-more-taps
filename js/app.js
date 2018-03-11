$(document).ready(function() {
    $('.carousel').carousel();
    $('.scrollspy').scrollSpy();
    $('#nav-icon1').click(function() {
        $(this).toggleClass('open');
        $('.nav-items ').toggle();
    })
    $('#nav_item_list li').click(function() {
        $('#nav-icon1').toggleClass('open');
        $('.nav-items ').toggle('slow');
    })
});