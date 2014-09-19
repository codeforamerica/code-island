$(document).ready(function () {

  $( 'a[href="#"]' ).click( function(e) {
        e.preventDefault();
     } );

  $('#jeff-bio-link').click(function(){
    // alert("Hi, I\'m Jeff");
    $('#jeff-bio').removeClass('hidden');
  });

  $('#amp-bio-link').click(function(){
    // alert("Hi, I\'m Jeff");
    $('#amp-bio').removeClass('hidden');
  });

  $('#andrew-bio-link').click(function(){
    // alert("Hi, I\'m Jeff");
    $('#andrew-bio').removeClass('hidden');
  });
});