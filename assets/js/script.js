$(function() {
  $(document).scroll(function() {
    var $nav = $(".navbar");
    $nav.toggleClass("bg-light", $(this).scrollTop() > $nav.height());
  });
});
