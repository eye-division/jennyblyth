(function($) {
  "use strict"; // Start of use strict
  $(document).ready(function() {

    // Syntax highlighting
    //hljs.initHighlightingOnLoad();

    // Header
    var menuToggle = $('#js-mobile-menu').unbind();
    $('#js-navigation-menu').removeClass("show");
    menuToggle.on('click', function(e) {
      e.preventDefault();
      $('#js-navigation-menu').slideToggle(function(){
        if($('#js-navigation-menu').is(':hidden')) {
          $('#js-navigation-menu').removeAttr('style');
        }
      });
    });

    // Drop down v2 - Bourbon
    $(".dropdown-button").click(function() {
      var $button, $menu;
      $button = $(this);
      $menu = $button.siblings(".dropdown-menu");
      $menu.toggleClass("show-menu");
      $menu.children("li").click(function() {
        $menu.removeClass("show-menu");
        $button.html($(this).html());
      });
    });


    // Lightbox2 options
    lightbox.option({
      'wrapAround': true
    });

    // fitvid on embed
    $('.media').fitVids();

    // flexslider
    $('.flexslider').flexslider({
      animation: "fade",
      controlNav: false,
      directionNav: true,
      slideshowSpeed: 5000,
      animationSpeed: 600,
      touch: true
    });

    // Bourbon expander
    $('.expander-trigger').click(function(){
      $(this).toggleClass("expander-hidden");
    });

  }); // end doc ready

})(jQuery); // End of use strict
