jQuery(function ($) {
  $("#year").text(new Date().getFullYear());

  $(".menu-bar").on("click", function (e) {
    e.preventDefault();
    $("nav").toggleClass("hide");
    $("span", this).toggleClass("lnr-menu lnr-cross");
    $(".main-menu").addClass("mobile-menu");
  });

  $(".play-btn").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  $(".testimonials").slick({
    infinite: true,
    autoplay: false,
    arrows: true,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="js-prev"><i class="fas fa-long-arrow-alt-left"></i></div>',
    nextArrow: '<div class="js-next"><i class="fas fa-long-arrow-alt-right"></i></div>',
  });
});
