$(document).ready(function(){
let ww=$(window).width();
let wh=$(window).height();
layout();

$(window).resize(function(){

    ww=$(window).width();
    wh=$(window).height();
    layout();
})

function layout(){
    //1.공통스타일영역 함수 호출

    if(ww>1680){
      // 2.윈도우의 가로크기가 1640보다 클 때 함수 호출 영역
     // pc_f();
    }else if(ww>1240 && ww<=1680){
      // 3.윈도우의 가로크기가 1640~1241일때 함수 호출영역
     // tab_f();
    }else if(ww<=1240){
      // 4.윈도우의 가로크기가 1241보다 작을때 함수 호출영역
     // mo_f();
    }
  }



// main_header 영역

  let bg_num=$('.bg_img').index();
  setInterval(function(){
    bg_num++;
    if(bg_num>=4){
      bg_num=0;
    }
    // console.log(bg_num);
    $('.bg_img').removeClass('bg_on')
    $('.bg_img').eq(bg_num).addClass('bg_on')
  
  },4000)

  //lang_box 클릭 이벤트
  $('.lang_box').click(function(){
    $('.lang').toggleClass('active')
  })  
  $('.lang').children().click(function(){
    $(this).removeClass('active')
  })

  // lang_box 텍스트 변경 이벤트
  $('.lang li').click(function(){
    let txt=$(this).text();
      $('.lang_box>p').text(txt);
  })
  //search 클릭 이벤트
  $('.search_icon').click(function(){
    $('.search_on').css({
      height:'500px',
      zIndex:100
    })
    $('.main_menu').css({
      zIndex:9
    })
  })
  $('.x_but').click(function(){
    $('.search_on').css({
      height:0,
      zIndex:9
    })
    $('.main_menu').css({
      zIndex:99
    })
  })


// mo_aside 모바일 영역
$('.mo_menu').click(function(){
  $('.mo_aside').css({
    transform:'unset',
    opacity:1
  })
})
$('.aside_but').click(function(){
  $('.mo_aside').css({
    transform:'translateX(100%)',
    opacity:0
  })
})


// page_1 영역

//page_1 슬라이드 애니메이션  클릭 이벤트
let i=$('.num').index();
i=0;
function slide_event(){
  $('.slide').addClass('stop');
  $('.num').removeClass('on');
  $('.num').eq(i).addClass('on');
  $('.text_con').removeClass('on');
  $('.text_con').eq(i).addClass('on');
  $('.img_box>img').removeClass('on');
  $('.img_box>img').eq(i).addClass('on');
}
slide_event();

$('.but_r').click(function(){
  i++;
  if(i>=4){
    i=0;
  }
  slide_event();
console.log(i)
})

$('.but_l').click(function(){
  i--;
  if(i<=0){
    i=0;
  }
  slide_event();
})

setInterval(function(){
  //슬라이드 버튼 클릭시 슬라이드바 초기화
let has_stop=$('.slide').hasClass('stop');
 if(has_stop==true){
  $('.slide').removeClass('stop');
 }
},100)

// 슬라이드 화살표 hover시 bar 멈춤
$('.slide_arr').hover(function(){
  $('.slide').css({
    animationPlayState:'paused' 
  });
},function(){
  $('.slide').css({
    animationPlayState:'running' 
  });
})

setInterval(function(){
  //슬라이드 바 꽉차면
  //슬라이드 자동 넘기기(.but_r 계속 클릭)
  let slide_w=$('.slide').width();
  // console.log(slide_w);
  if(slide_w>=195){
    $('.slide').addClass('click');
    let has_click=$('.slide').hasClass('click');
    if(has_click==true){
      $('.but_r').trigger('click');
      $('.slide').removeClass('click');
    }
  }
},100)


//scroll 이벤트
let sct_now=0;

  $(window).scroll(function(){
      let sct=$(this).scrollTop();
      if(sct_now<sct){
        // 내렸을때
        $('.main_menu').css({
            transform:'translateY(-200px)'
        })

        sct_now=sct;

    }//스크롤 내릴때 괄호

    else if(sct_now>sct){
        // 올렸을때
        $('.main_menu').css({
            transform:'translateY(0px)'
        })

        sct_now=sct;
    }//스크롤 올릴때 괄호


  

  let pg_h=ww*0.49;
  let pg_h_st=pg_h+wh;
  // // console.log(pg_h);
  // // console.log(pg_h_st);
  // // console.log(pg_h_st+pg_h);
  // // console.log(pg_h_st+pg_h*4);

  
  if(sct>=pg_h_st*0.8 && sct<pg_h_st+pg_h*2){
    //스크롤(arflex영역)
    $('.brand_wrap').addClass('active')
    $('.brand').removeClass('on_2');
    $('.arflex').addClass('on_2');
    $('.brand_text_box').eq(0).addClass('on_2');
    $('.brand_img').eq(0).addClass('on_2');
  }
  else{
    $('.brand_wrap').removeClass('active');
  }

  if(sct>=pg_h_st+pg_h*2 && sct<pg_h_st+pg_h*2.7){
    //스크롤(arflex 삭제, baxter영역)
    brand_scroll(0,1);
    
  }

  if(sct>=pg_h_st+pg_h*2.7 && sct<pg_h_st+pg_h*3.3){
    //스크롤(baxter 삭제, porada영역)
    brand_scroll(1,2);

  }

  if(sct>=pg_h_st+pg_h*3.3 && sct<pg_h_st+pg_h*4.3){
    //스크롤(porada 삭제, riva영역)
    brand_scroll(2,3);

  }

  if(sct>=pg_h_st+pg_h*4.3){
    //스크롤(riva 삭제, 닫힘)
    $('.riva').removeClass('on_2');
    $('.brand_wrap').addClass('active');
  }

  //brand_wrap 스크롤 함수
  function brand_scroll(t,n){
    $('.brand').removeClass('on_2');
    $('.brand_text_box').eq(t).removeClass('on_2');
    $('.brand_img').eq(t).removeClass('on_2')
    $('.brand').eq(n).addClass('on_2');
    $('.brand_text_box').eq(n).addClass('on_2');
    $('.brand_img').eq(n).addClass('on_2');
    $('.brand_wrap').addClass('active');
  }

  //page_3,4 scroll 이벤트
  let page3_top=$('.page_3').offset().top;
  let page4_top=$('.page_4').offset().top;
  let move_top=$('.move_content').offset().top;
  let show_top=$('.show_page').offset().top;
  

  // console.log(`스크롤 : ${sct}`);
  // console.log(`page3 : ${page3_top}`);
  // console.log(`page4 : ${page4_top}`);
  console.log(`move_top : ${move_top}`);
  console.log(`show_top : ${show_top}`)
  
    if(sct>page3_top*0.95 && sct<page4_top*0.935){
      $('.wrap>div').css({
        backgroundColor:'black',
        transitionDuration:'1s'
      })
      $('.bk').css({
        transform:'translate(0px,0px)'
      })
      $('.main_title span').css({
        opacity:1,
        zIndex:1
      })
      $('.page_3 .text_title').addClass('active');
      $('.page_3 .text_sub').addClass('active');
    }else{
      $('.wrap>div').css({
        backgroundColor:'',
        transitionDuration:'1s'
      })
      $('.main_title span').css({
        opacity:0,
        zIndex:1
      })
      $('.text_title').removeClass('active');
      $('.text_sub').removeClass('active');
    }

    if(sct>page4_top*0.94 && sct<move_top*0.95){
      $('.top_box').children().addClass('active')
    }else{
      $('.top_box').children().removeClass('active')
    }
    

    //page_4 cont 이미지 스크롤 이벤트
    if(sct>page4_top*0.95){

      radius(0,1);
    }
    if(sct>page4_top*1.05){
      radius(2,3);
    }
    if(sct>page4_top*1.15){
      radius(4,5);
    }
    if(sct>page4_top*1.25){
      radius(6);
    }
    
    
  function radius(a,b){
      $('.cont').eq(a).addClass('active');
      $('.cont').eq(b).addClass('active');
      $('.hover').eq(a).addClass('radius');
      $('.hover').eq(b).addClass('radius');
      $('.cont_img').eq(a).addClass('radius');
      $('.cont_img').eq(b).addClass('radius');
      $('.hover_text').eq(a).addClass('radius');
      $('.hover_text').eq(b).addClass('radius');
    }
    
    // show_page 스크롤 이벤트
    // let video_w=$('.video_on').width();
    if(sct>show_top*0.99){
      $('.video_on').addClass('active');
    }else{
      $('.video_on').removeClass('active');
    }

    //top_but on,off 이벤트
    if(sct>=600){
      $('.top_but').css({
        opacity:1
      })
    }else{
      $('.top_but').css({
        opacity:0
      })
    }
    //top_but 클릭시 최상단으로 스크롤이동
    $('.top_but').click(function(){
      $('html,body').stop().animate({
        scrollTop:0
      },500);
    });

  })//scroll 괄호


 





//page_2 영역
$('.menu').hover(function(){
  $('.menu',this).addClass('hover')
},function(){
  $('.menu',this).removeClass('hover')
  
})

//page_3 영역




//move_content 영역

$('.brands').hover(function(){
  $('.move_box').css({
    animationPlayState:'paused'
  })
},function(){
  $('.move_box').css({
    animationPlayState:'running'
  })
})






})//끝
