import ScrollReveal from 'scrollreveal';

$(window).on("load", () => {
  $('#blog .container').css({visibility: 'visible'});

  const sr = ScrollReveal({
    reset: true,
    distance: '1px',
    duration: 200,
  });

  sr.reveal('#blog div', 50);

  $(".col-3 input").val("");

  $(".input-effect input").on('focusout', function(){
    console.log('wtf mate');
    if($(this).val() != ""){
      $(this).addClass("has-content");
    }else{
      $(this).removeClass("has-content");
    }
  })
});

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

/*
$('#burger').toggle(function() {
  $('#modal-menu').css({visibility: 'visible'});
}, function() {
  $('#modal-menu').css({visibility: 'hidden'});
});
*/

$(document).on('scroll', function() {
  let documentScrollTop = $(this).scrollTop();

/*
  if (documentScrollTop > 0) {
    $('main.content').addClass('shrink-nav');
    $('.top-nav nav').css({height: 30});

    document.documentElement.style.setProperty('--fixed-top-border-width', '30px');
  } else {
    $('main.content').removeClass('shrink-nav');
    $('.top-nav nav').css({height: 70});
    $('.brand').css({
      fontSize: '',
      marginTop: '',
    });
  }
*/

/*
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
*/

});
