$('.slider').slick({
    // autoplay:true,
    // autoplaySpeed:5000,
    // centerMode: true,
    // centerPadding: '60px',
    // slidesToShow: 1,
    // dots:true,

    // autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '100px',
    // centerPadding: 'calc((100%-1000px)/2)',
    // ⭐️
    focusOnSelect: true,

    // responsive: [{
    //     breakpoint:768 ,
    //     settings: {
    //       centerPadding: '80px',
    //     }
    // },
    // {
    //     breakpoint:480 ,
    //     settings: {
    //      centerPadding: '30px',
    //     }
    // }]
});


// ハンバーガーボタン

$('.burger-btn').on('click',function(){//.burger-btnをクリックすると
    $('.burger-btn').toggleClass('close');
    //.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
    $('.header__inner__sp').toggleClass('open');
    //.gnav__wrapperにopenクラスを付与
});



//サイドメニュークリックで表示

$('.burger-btn').on('click',function(){
    if($('#side-menu').hasClass('off')){
      $('#side-menu').removeClass('off');
      $('#side-menu').animate({'marginRight':'259px'},400).addClass('on');
    }else{
      $('#side-menu').addClass('off');
      $('#side-menu').animate({'marginRight':'0px'},400);
    }
    $('.side-menu').toggleClass('bg');
});

//     参考サイト         実装
//     #slideL  ▶︎   .burger-btn
//     #slide   ▶︎   #side-menu
// 
//   ＜参考サイト＞ https://gimmicklog.com/jquery/203/



$('.slick-prev, .slick-next').on('click',function(){
    $('.mv__slide[aria-hidden="true"]').toggleClass('.hidden');
});


