$(document).ready(function() {
    $('.nav-menu-button').click(function() {
        $('.page').addClass('is-navigating');
    });
    $('.page-content-overlay').click(function() {
        $('.page').removeClass('is-navigating');
    });
});