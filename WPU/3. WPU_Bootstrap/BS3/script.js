// (function() {

// })();

// event pda satu link
// $('.page-scroll').on('click', function(e){

//     // console.log('ok')

//     // ambil isi href
//     var tujuan = $(this).attr('href');
//     // console.log(href);
    
//     //tangkap elemen tersebut
//     var elemenTujuan = $(tujuan);
 
//     // pindahkan scroll
//     $('body').animate({
//         scrollTop: elemenTujuan.offset().top - 50
//     }, 1250, 'linear' );

//     e.preventDefault();
//     // console.log(elemenTujuan.offset().top);
// });

$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'linear' );
   
    e.preventDefault();
   });


// parallax

//    about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    // console.log(wScroll);

    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
    
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    // portfolio
    if( wScroll > $('.portfolio').offset().top - 500 ) {
        // console.log('ok');
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                // console.log('ok');
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1) );
        });
    }


});