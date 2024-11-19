$(document).ready(function(){
    let ww=$(window).width();
    
    if(ww<1024){
        wh=ww*2;
    }    
    if(ww>=1024){
        wh=$(window).height();
    }
    
layout();
$(window).resize(function(){
    ww=$(window).width();
    if(ww<1024){
        wh=ww*2
    }    
    if(ww>=1024){
        wh=$(window).height();
    }
    
    layout();
})

function layout(){
    fb_w=$('.folder_box').width();
    $('.left_box').css({
        transform: `rotateY(90deg) translate3d(0,0,${fb_w*0.5}px)`
    })
    $('.right_box').css({
        transform: `rotateY(270deg) translate3d(0,0,${fb_w*0.5}px)`
    })
    $('.page').css({
        height:wh,
        maxHeight:'100vh',
        minHeight:'100vh'
    })
    if(ww<1024){
        $('.info_img').css({
            height:'330px',
            minWidth:'320px',
            maxWidth:'320px'
        })
    }    
    if(ww>=1024){

    }
}

$('.tab_con_wrap').on({
    mouseenter:function(){
      $(this).addClass('on')
    },
    mouseleave:function(){
      $(this).removeClass('on')
    },
    click:function(){
      hasclass=$(this).hasClass('t_w_on');
      this_index=$(this).index();
      wh=$('.page').height();
      console.log(hasclass);
      if(hasclass==false){
        $(this).addClass('t_w_on',500,function(){
         $(this).delay(500).addClass('t_w_on_2',500,function(){
          $(this).delay(500).addClass('t_w_on_3',500,function(){
            sct=this_index*wh
            $('html,body').delay(500).animate({
              scrollTop:sct
            },500)
          });
         })
        })
        $(this).removeClass('on')
      }else{
        $(this).removeClass('t_w_on_3',1000,function(){
            $(this).delay(500).removeClass('t_w_on_2',500)
            $(this).delay(500).removeClass('t_w_on',500)
        });
      }
  
    }
  
  })


//tab_menu 클릭시 페이지 이동 영역
$('.tab_menu a').click(function(){
    let tm_i=$(this).index();
    
    $('html,body').animate({
        scrollTop:wh*tm_i
    })
    $('.tab_con_wrap').removeClass('t_w_on_3',500);
    $('.tab_con_wrap').delay(500).removeClass('t_w_on_2',500);
    $('.tab_con_wrap').delay(500).removeClass('t_w_on',1000)
})



//scroll 이벤트
$(window).scroll(function(){
    let sct=$(this).scrollTop();
    let ph=$('.page').height();

if(ww<1024){
    console.log(sct)

    //menu_mo,info_wrap
    if(sct>=wh*0.3){
        $('.tab_menu_mo').css({
            opacity:1,
            transform:'none'
        })
        $('.info_wrap').css({
            transform: 'scale(1)'
        })
    }else{
        $('.tab_menu_mo').css({
            opacity:0,
            transform: 'translateY(500px)',
        })
    }

    //top_button
    if(sct>=ph*0.5){
        $('.top_button').css({
            opacity:1,
            transform:'none'
        });
    }
    else{
        $('.top_button').css({
            opacity:0,
            transform:'translateY(200px)'
        });
    }

    //content
    if(sct>=wh){
        $('.content_wrap').css({
            opacity:1
        })
    }else{
        $('.content_wrap').css({
            opacity:0
        })
    }

    if(sct>=wh*1.5){
        $('.contact_sns>span').css({
            transform:'unset',
            opacity:1
        })
        $('.footer_down').css({
            opacity:1,
            transitionDelay:'1.5s'
        })
    }else{
        $('.contact_sns>span').css({
            transform:'translateY(100px)',
            opacity:0
        })
        $('.footer_down').css({
            opacity:0,
            transitionDelay:'1.5s'
        })
    }

}    
if(ww>=1024){
    if(sct>=ph){
        $('.top_button').css({
            opacity:1,
            transform:'none'
        });
    }
    else{
        $('.top_button').css({
            opacity:0,
            transform:'translateY(200px)'
        })
       
    }
    if(sct>=ph*0.9){
        $('.info_wrap').css({
            transform: 'scale(1)'
        })
    }
    if(sct>=ph*1.7){
        $('.content_wrap').css({
            opacity:1
        })
    }else{
        $('.content_wrap').css({
            opacity:0
        })
    }
}
})


//top_button 클릭 이벤트

$('.top_button').click(function(){
    $('html,body').animate({
        scrollTop:0
    })
    $('.tab_con_wrap').removeClass('t_w_on_3',500);
    $('.tab_con_wrap').delay(500).removeClass('t_w_on_2',500);
    $('.tab_con_wrap').delay(1000).removeClass('t_w_on',1000)
})
   
$('.tab_menu a').hover(function(){
    $(this).css({
        fontWeight:900,
        fontSize:18
    })
 },function(){
    $(this).css({
        fontSize:16,
        fontWeight:500,
    })
})

//tab_menu,tab_menu_bar 고정 컬러
   $('.tab_menu>.hover_text').eq(0).css({
    borderBottomColor:'skyblue',
    zIndex:3
})
   $('.tab_menu_bar').eq(0).css({
    backgroundColor:'skyblue',
    
})

   $('.tab_menu>.hover_text').eq(1).css({
    borderBottomColor:'lightcoral',
    zIndex:3
})
   $('.tab_menu_bar').eq(1).css({
    backgroundColor:'lightcoral'
})
   
   $('.tab_menu>.hover_text').eq(2).css({
    borderBottomColor:'palegreen',
    zIndex:3
})
   $('.tab_menu_bar').eq(2).css({
    backgroundColor:'palegreen'
})
    
    // let tab_bg=['skyblue','lightcoral','palegreen']
    // let t_i=$(this).index();
    

    // $('.hover_text').css({
    //     borderBottomColor:tab_bg[t_i]
    // })
    // $('.tab_menu_bar').css({
    //     backgroundColor:tab_bg[t_i]
    // })
    

 

//site_but hover효과
   $('.site_but p').hover(function(){
    $(this).css({
        transform:'scale(1.1)',
        backgroundColor:'skyblue',
        opacity:0.9
    })
   },function(){
    $(this).css({
        transform:'scale(1)',
        backgroundColor:'#f5f5f5',
        opacity:1
    })
   })


//slide_bar hover,click효과
$('.arrow_but').hover(function(){
    $('.arrow',this).css({
        borderRadius:'25%',
        opacity:1,
        transform:'scale(1.1)'
    })
},function(){
    $('.arrow',this).css({
        borderRadius:'15px',
        opacity:0.5,
        transform:'scale(1.0)'
    })
})



//slide_check click이벤트
let n=0;

function slide_event(){
$('.slide_check').click(function(){
    n=$(this).index();
    console.log(n);
    $('.content_img_box').removeClass('but_on');
    $('.content_img_box').eq(n).addClass('but_on');
    $('.prj_info_box').removeClass('but_on');
    $('.prj_info_box').eq(n).addClass('but_on');
    $('.slide_check').removeClass('check_on');
    $('.slide_check').eq(n).addClass('check_on');
})
}

slide_event();

$('.right_but').click(function(){
    n++;
    if(n>=3){
        n=3;
    }
    $('.content_img_box').removeClass('but_on');
    $('.content_img_box').eq(n).addClass('but_on');
    $('.prj_info_box').removeClass('but_on');
    $('.prj_info_box').eq(n).addClass('but_on');
    $('.slide_check').removeClass('check_on');
    $('.slide_check').eq(n).addClass('check_on');
})
$('.left_but').click(function(){
    n--;
    if(n<=0){
        n=0;
    }
    $('.content_img_box').removeClass('but_on');
    $('.content_img_box').eq(n).addClass('but_on');
    $('.prj_info_box').removeClass('but_on');
    $('.prj_info_box').eq(n).addClass('but_on');
    $('.slide_check').removeClass('check_on');
    $('.slide_check').eq(n).addClass('check_on');
})

$('.slide_check').click(function(){
    $('.slide_check').removeClass('check_on');
    $(this).addClass('check_on');
})
$('.slide_check').hover(function(){
    $(this).css({
       transform:'scale(1.1)'
    })
},function(){
    $(this).css({
       transform:'scale(1)'
    })
})


//down_con 효과
$('.down_in_con').hover(function(){
    $(this).css({
        backgroundColor:'palegreen',
        opacity:0.9,
        color:'black',
        fontWeight:700
    })
},function(){
    $(this).css({
        backgroundColor:'',
        opacity:1,
        color:'#f5f5f5'
    })
})    


//tab_menu_mo 영역
$('.tab_menu_mo a').click(function(){
    let tm_mo=$(this).index()+1;
    let ph=$('.page').height();
    $('html,body').animate({
        scrollTop:ph*tm_mo
    })
    $('.tab_con_wrap').removeClass('t_w_on_3',500);
    $('.tab_con_wrap').delay(500).removeClass('t_w_on_2',500);
    $('.tab_con_wrap').delay(500).removeClass('t_w_on',1000)
})






})//끝