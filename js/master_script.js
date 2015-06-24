$('.nav-menu-button').click(function() {
    $('.page').addClass('is-navigating');
    $('html, body').addClass('is-not-scrollable');
});
$('.page-content-overlay').click(function() {
    $('.page').removeClass('is-navigating');
    $('html, body').removeClass('is-not-scrollable');
});