$(document).ready(function() {
    $('button').click(function() {
        $('.splash').addClass('hide');
        $('main').show('show').removeClass('hide');
        console.log("clicked!");
    });
});