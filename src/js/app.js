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
    $('.hamburger').css({
      top: -9,
    });
  } else {
    $('.top-nav nav').css({
      fontSize: '2.5rem',
      marginTop: 0,
    });
    $('.hamburger').css({
      top: 8,
    });
  }
});
