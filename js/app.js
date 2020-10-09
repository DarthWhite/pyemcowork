$(document).on('ready', function() {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
    });

(function() {
        var $gallery = new SimpleLightbox('.gallery a', {});
    })();

(function() {
        var $gallery = new SimpleLightbox('.gallery1 a', {});
    })();