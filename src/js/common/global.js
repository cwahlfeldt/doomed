import ScrollReveal from 'scrollreveal';
import mediumZoom from 'medium-zoom';

$(window).on("load", () => {
  $('#loading').remove();
  $('.single').css({opacity: 1})
  $('#blog .container').css({visibility: 'visible'});

  const sr = ScrollReveal({
    reset: true,
    distance: '1px',
    duration: 200,
  });

  sr.reveal('#blog div', 50);

  $(".col-3 input").val("");

  $(".input-effect input").on('focusout', function(){
    if ($(this).val() != "") {
      $(this).addClass("has-content");
    } else {
      $(this).removeClass("has-content");
    }
  });
});


$(document).ready(() => {
  // JS Goes here - ES6 supported
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", (user) => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }

  $('.single p > img').parent().addClass('image');

  mediumZoom('.single p > img', {});
});
