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

$(document).on('scroll', function() {
  let documentScrollTop = $(this).scrollTop();

  if (documentScrollTop > 10) {
    $('.top-nav nav').css({
      fontSize: '1.4rem',
      marginTop: -13,
      marginRight: 'auto',
    });

    $('.shadow-box').css({marginTop: 0});

    $('.hamburger').css({top: -9});

    $('#social-icons').css({top: 0});
    $('#social-icons svg').css({width: 20});

    $('#burger').css({top: 4});
    $('#burger svg').css({width: 22});
  } else {
    $('.top-nav nav').css({
      fontSize: '',
      marginTop: '',
    });

    $('.hamburger').css({top: ''});
    $('.shadow-box').css({marginTop: 96});

    $('#social-icons').css({top: ''});
    $('#social-icons svg').css({width: ''});

    $('#burger').css({top: ''});
    $('#burger svg').css({width: ''});
  }

  if (documentScrollTop < 10) {
    $('.shadow-box').css({marginTop: 96});
  }

});
