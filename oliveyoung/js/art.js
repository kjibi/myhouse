$(document).ready(function(){
    let ww=$(window).width();

    layout();
    
$(window).resize(function(){

    ww=$(window).width();
    layout();

})


function layout(){
    //1.공통스타일영역 함수 호출


    if(ww>1200){
      // 2.윈도우의 가로크기가 1200보다 클 때 함수 호출 영역
      pc_f();
    }else if(ww<=1200){
      // 3.윈도우의 가로크기가 1200~일때 함수 호출영역
      mo_f();
    }
  }

function pc_f(){
    }//pc_f 괄호
    if(ww>1200){
    $('.family_site').hover(function(){
        $('.family_site_sub').css({
            display:'block'
        })
    },function(){
        $('.family_site_sub').css({
            display:'none'
        })
    })

    let header_bg=['orange','hotpink','aqua','greenyellow','royalblue']
    $('.top_menu').hover(function(){
        let top_menu_index=$(this).index();
        $('.main_header').css({
            backgroundColor:header_bg[top_menu_index]
        })
        $('.sub_menu',this).css({
            backgroundColor:header_bg[top_menu_index]
        })
        

    },function(){
        $('.main_header,.sub_menu').css({
            backgroundColor:'gold'
        })
    })
    $('.best_img_box').hover(function(){
        $(this).css({
            border: '3px,solid,hotpink',
            transform:'scale(1.02)',
        })

        $('.text_wrap>p').css({
            display:'none'
        })
        
    },function(){
        $(this).css({
            border:'0',
            transform:'scale(1)'
        })

        $('.text_wrap>p').css({
            display:'block'
        })

    })


    
    $('.best_img_1').hover(function(){
        $('.b_text_1').css({
            display:'block'
        })
    },function(){
        $('.b_text_1').css({
            display:'none'
        })
    })
    $('.best_img_2').hover(function(){
        $('.b_text_2').css({
            display:'block'
        })
    },function(){
        $('.b_text_2').css({
            display:'none'
        })
    })

    $('.best_img_3').hover(function(){
        $('.b_text_3').css({
            display:'block'
        })
    },function(){
        $('.b_text_3').css({
            display:'none'
        })
    })


    $('.icon_box,.rotate_icon').hover(function(){
        $('.arrow_but',this).animate({
            opacity:1
        })
        $('.rotate_text',this).animate({
            opacity:0
        })
    },function(){
        $('.arrow_but',this).animate({
            opacity:0
        })
        $('.rotate_text',this).animate({
            opacity:1
        })
    })

    
   
    
    
    
    // $('.s_box_1').hover(function(){
    //     $(this).addClass('on');
    //     $('.text_1').addClass('text_on');
    // },function(){
    //     $(this).removeClass('on');
    //     $('.size_text_wrap').removeClass('text_on');
    // })
    // $('.s_box_2').hover(function(){
    //     $(this).addClass('on');
    //     $('.text_2').addClass('text_on');
    // },function(){
    //     $(this).removeClass('on');
    //     $('.size_text_wrap').removeClass('text_on');
    // })
    // $('.s_box_3').hover(function(){
    //     $(this).addClass('on');
    //     $('.text_3').addClass('text_on');
    // },function(){
    //     $(this).removeClass('on');
    //     $('.size_text_wrap').removeClass('text_on');
    // })

    $('.s_box_1').mouseenter(function(){
        $('.size_box').removeClass('on');
        $('.size_text_wrap').removeClass('text_on');
        $(this).addClass('on');
        $('.text_1').addClass('text_on');
        $('.trans_color').css({
            backgroundColor:'rgb(31,215,31)',
            color:'black'
        })
    })
    $('.s_box_2').mouseenter(function(){
        $('.size_box').removeClass('on');
        $('.size_text_wrap').removeClass('text_on');
        $(this).addClass('on');
        $('.text_2').addClass('text_on');
        $('.trans_color').css({
            backgroundColor:'black',
            color:'white'
        })
    })
    $('.s_box_3').mouseenter(function(){
        $('.size_box').removeClass('on');
        $('.size_text_wrap').removeClass('text_on');
        $(this).addClass('on');
        $('.text_3').addClass('text_on');
        $('.trans_color').css({
            backgroundColor:'royalblue',
            color:'black'
        })
    })



    //size_box 영역

    // $('.s_box_1').hover(function(){
    //     // $(this).addClass('on');
    //     // $('.text_1').addClass('text_on');
    // },function(){
    //     $(this).toggleClass('on')
    //     $('.text_1').toggleClass('text_on')
    // })

    // $('.s_box_2').hover(function(){
    //     // $(this).addClass('on');
    //     // $('.text_2').addClass('text_on');
    //     $(this).toggleClass('on')
    //     $('.text_2').toggleClass('text_on')
    // })
    //     // $('.s_box_2').removeClass('on');
    //     // $('.text_2').removeClass('text_on');
    

    // $('.s_box_3').hover(function(){
    //     // $(this).addClass('on');
    //     // $('.text_3').addClass('text_on');
    //     $(this).toggleClass('on')
    //     $('.text_3').toggleClass('text_on')
    // })
    //     // $('.s_box_3').removeClass('on');
    //     // $('.text_3').removeClass('text_on');
   


//move_text 영역

    ani_box();
    setInterval(function(){
    //     $('.move_text_box').animate({
    //         left:-700
    //     },2000,function(){
    //         $('.text_box').first().appendTo('.move_text_box');
    //         $('.move_text_box').css({
    //             left:0
    //         })
    //     },2000)
    ani_box();
    },4000)

    function ani_box(){
        $('.move_text_box').animate({
            left:-700
        },4000,'linear',function(){
            $('.text_box').first().appendTo('.move_text_box');
            $('.move_text_box').css({
                left:0
            })
        })
    }






    //bottom_page banner_img 영역
    $('.banner_img').eq(0).hover(function(){
        $('.banner_img_1').css({
            opacity:0.6
        })
        $('.banner_text_box',this).css({
            display:'block'
        })
    },function(){
        $('.banner_img_1').css({
            opacity:1
        })
        $('.banner_text_box',this).css({
            display:'none'
        })
    })
    $('.banner_img').eq(1).hover(function(){
        $('.banner_img_2').css({
            opacity:0.6
        })
        $('.banner_text_box',this).css({
            display:'block'
        })
    },function(){
        $('.banner_img_2').css({
            opacity:1
        })
        $('.banner_text_box',this).css({
            display:'none'
        })
    })
    $('.banner_img').eq(2).hover(function(){
        $('.banner_img_3').css({
            opacity:0.6
        })
        $('.banner_text_box',this).css({
            display:'block'
        })
    },function(){
        $('.banner_img_3').css({
            opacity:1
        })
        $('.banner_text_box',this).css({
            display:'none'
        })
    })
    $('.banner_img').eq(3).hover(function(){
        $('.banner_img_4').css({
            opacity:0.6
        })
        $('.banner_text_box',this).css({
            display:'block'
        })
    },function(){
        $('.banner_img_4').css({
            opacity:1
        })
        $('.banner_text_box',this).css({
            display:'none'
        })
    })
    



    $('.left_but').click(function(){
        $('.banner_move').animate({
            left:250
        },function(){
            $('.banner_img').last().prependTo('.banner_move');
            $('.banner_move').css({
                left:0
            })
        })
    })
    
    $('.right_but').click(function(){
        $('.banner_move').animate({
            left:-250
        },function(){
            $('.banner_img').first().appendTo('.banner_move');
            $('.banner_move').css({
                left:0
            })
        })
    })


    //스크롤 영역 드가자
   
    // let mpt_w=$('.mpt_img_box').first().width();
    // let mpt_h=$('.mpt_img_box').first().height();
    let sct_now=0;
    $(window).scroll(function(){
        let sct=$(this).scrollTop();
        let mpt_t=sct;
        let mpt_s=sct*1.5;


    if(sct>=0 && sct<=100){
        // 0,100
        $('.main_page_title').css({
            top:mpt_t,
            left:0,
            width:'100%'
        })
        $('.main_page_text').css({
            opacity:0
        })
        
    }

    else if(sct>100 && sct<700){
        // 200,300,400,500,600
        $('.main_page_title').css({
            top:mpt_t,
            left:-mpt_t*0.2,
            width:`${1550-mpt_s}`
        })
        $('.main_page_text').css({
            opacity:0
        })
        if(sct_now<sct)
            console.log(sct);
    
    
        if(sct>200){
            $('.scroll_icon').css({
                bottom:-200
            })
        }else{
            $('.scroll_icon').css({
                bottom:-80
            })
        }
        if(sct>=300 && sct<700){
            // 300 400 500 600
            $('.mpt_img_box').first().css({
                width:'-=55',
                height:'-=72.5',
                minWidth:480,
                minHeight:560
                
            })
            $('.rotate_icon_2').css({
                top:'-=50'
            })
            $('.rotate_icon_3').css({
                opacity:1
            })
           
           if(sct_now>=sct){
            $('.mpt_img_box').first().css({
                width:'+=55',
                height:'+=72.5',
                maxWidth:700,
                maxHeight:850
                
            })
            $('.rotate_icon_2').css({
                top:`+=50`
            })
           
           }
        
        
    }
     
       
    }

    else if(sct>=700 && sct<1200){
        // 700, 800,900,1000,1100
        $('.main_page_text').css({
            opacity:1
        })
        $('.rotate_icon_3').css({
            opacity:0
        })
        $('.mpt_move_box').css({
            left:`-=108`
        })
        $('.main_page_title').css({
            top:`-=100`
        })

        
        if(sct_now>=sct){
            $('.main_page_title').css({
                top:`+=100`
            })  
            $('.rotate_icon_3').css({
                opacity:1
            }) 
            $('.mpt_move_box').css({
                left:`+=108`
            })
        }
        
    }
        








    


    if(sct_now<sct){
        //스크롤을 내릴때 sct값이 커지는중
        $('.toggle_menu').css({
            top:-150
        })
        $('.close').fadeOut();
        $('.open').fadeIn();
    
        sct_now=sct;
    }else if(sct_now>sct){
        //스크롤을 올릴때 sct값이 작아지는중
        $('.toggle_menu').css({
            top:-100
        })
        $('.close').fadeOut();
        $('.open').fadeIn();
        if(sct<=100){
            $('.toggle_menu').css({
                top:-150
            })
            $('.close').fadeOut();
            $('.open').fadeIn();
        }
        sct_now=sct;
    }





    })//스크롤 괄호


    //토글메뉴 영역
    $('.toggle_top').hover(function(){
        $('.toggle_menu').css({
            paddingBottom:50
        })
    },function(){
        $('.toggle_menu').css({
            paddingBottom:0
        })
    })



    $('.open').click(function(){
        $('.open').fadeOut();
        $('.close').fadeIn();
        $('.toggle_menu').css({
            top:0
        })
    })
    $('.close').click(function(){
        $('.close').fadeOut();
        $('.open').fadeIn();
        $('.toggle_menu').css({
            top:-150
        })
    })



    }//pc영역 괄호




//모바일 영역
function mo_f(){
}//mo괄호
    if(ww<=1200){
    $('.family_site').hover(function(){
        $('.family_site_sub').css({
            display:'block'
        })
    },function(){
        $('.family_site_sub').css({
            display:'none'
        })
    })

    //move_text 영역

    ani_box();
    setInterval(function(){
    //     $('.move_text_box').animate({
    //         left:-700
    //     },2000,function(){
    //         $('.text_box').first().appendTo('.move_text_box');
    //         $('.move_text_box').css({
    //             left:0
    //         })
    //     },2000)
    ani_box();
    },4000)

    function ani_box(){
        $('.move_text_box').animate({
            left:-380
        },4000,'linear',function(){
            $('.text_box').first().appendTo('.move_text_box');
            $('.move_text_box').css({
                left:0
            })
        })
    }


    //mo 스크롤영역
    let sct_now=0;
    $(window).scroll(function(){
        let sct=$(this).scrollTop();
        let mpt_t=sct;
        let mpt_s=sct*1.5;

   
    if(sct>0 && sct<=2000){
        //100,200,---,2000
        $('.mpt_move_box').css({
           left:-sct
        })
        // if(sct<sct_now){
        //     //스크롤 올라갈때
        //     $('.mpt_move_box').css({
        //        left:'+=100'
        //     })
        // }
        if(sct>200 && sct<600){
            // 300 400 500 
            $('.rotate_icon_2').css({
                top:'-=50'
            })
           if(sct_now>sct){
            $('.rotate_icon_2').css({
                top:`+=50`
            })
           
           }
        
        
    } 
 
        
    }

    if(sct_now<sct)
        console.log(sct);


    if(sct>200){
        $('.scroll_icon').css({
            bottom:-200
        })
    }else{
        $('.scroll_icon').css({
            bottom:-60
        })
    }


    if(sct_now<sct){
        //스크롤을 내릴때 sct값이 커지는중
        $('.toggle_menu').css({
            top:-150
        })
        $('.close').fadeOut();
        $('.open').fadeIn();
    
        sct_now=sct;
    }else if(sct_now>sct){
        //스크롤을 올릴때 sct값이 작아지는중
        $('.toggle_menu').css({
            top:-100
        })
        $('.close').fadeOut();
        $('.open').fadeIn();
        if(sct<=100){
            $('.toggle_menu').css({
                top:-150
            })
            $('.close').fadeOut();
            $('.open').fadeIn();
        }
        sct_now=sct;
    }
    
    

    

    })//mo 스크롤 괄호
    
    $('.s_box_1').mouseenter(function(){
        $('.trans_color').css({
            backgroundColor:'rgb(31,215,31)',
            color:'black'
        })
    })
    $('.s_box_2').mouseenter(function(){

        $('.trans_color').css({
            backgroundColor:'black',
            color:'white'
        })
    })
    $('.s_box_3').mouseenter(function(){
        $('.trans_color').css({
            backgroundColor:'royalblue',
            color:'black'
        })
    })




    //best_img 영역
    $('.best_img_box').hover(function(){
        $('.text_wrap').css({
            opacity:0
        })
    },function(){
        $('.text_wrap').css({
            opacity:1
        })
    })
    $('.b_text_1').appendTo('.best_img_box_1');
    $('.b_text_2').appendTo('.best_img_box_2');
    $('.b_text_3').appendTo('.best_img_box_3');


    //bottom_page banner_img 영역
    $('.banner_img').eq(0).hover(function(){
        $('.banner_img_1').css({
            opacity:0.6
        })
        $('.banner_text_box',this).css({
            display:'block'
        })
    },function(){
        $('.banner_img_1').css({
            opacity:1
        })
        $('.banner_text_box',this).css({
            display:'none'
        })
    })
    $('.banner_img').eq(1).hover(function(){
        $('.banner_img_2').css({
            opacity:0.6
        })
        $('.banner_text_box',this).css({
            display:'block'
        })
    },function(){
        $('.banner_img_2').css({
            opacity:1
        })
        $('.banner_text_box',this).css({
            display:'none'
        })
    })
    $('.banner_img').eq(2).hover(function(){
        $('.banner_img_3').css({
            opacity:0.6
        })
        $('.banner_text_box',this).css({
            display:'block'
        })
    },function(){
        $('.banner_img_3').css({
            opacity:1
        })
        $('.banner_text_box',this).css({
            display:'none'
        })
    })
    $('.banner_img').eq(3).hover(function(){
        $('.banner_img_4').css({
            opacity:0.6
        })
        $('.banner_text_box',this).css({
            display:'block'
        })
    },function(){
        $('.banner_img_4').css({
            opacity:1
        })
        $('.banner_text_box',this).css({
            display:'none'
        })
    })

    //but 클릭시 
    $('.left_but').click(function(){
        $('.banner_move').animate({
            left:250
        },function(){
            $('.banner_img').last().prependTo('.banner_move');
            $('.banner_move').css({
                left:0
            })
        })
    })
    
    $('.right_but').click(function(){
        $('.banner_move').animate({
            left:-250
        },function(){
            $('.banner_img').first().appendTo('.banner_move');
            $('.banner_move').css({
                left:0
            })
        })
    })


    //토글메뉴 영역
    $('.toggle_top').hover(function(){
        $('.toggle_menu').css({
            paddingBottom:50
        })
    },function(){
        $('.toggle_menu').css({
            paddingBottom:0
        })
    })



    $('.open').click(function(){
        $('.open').fadeOut();
        $('.close').fadeIn();
        $('.toggle_menu').css({
            top:0
        })
    })
    $('.close').click(function(){
        $('.close').fadeOut();
        $('.open').fadeIn();
        $('.toggle_menu').css({
            top:-150
        })
    })

    




    
    // $('.top_menu').eq(0).hover(function(){
    //     $('.main_header,.sub_menu').css({
    //         backgroundColor:'orange'
    // })
    // },function(){
    //     $('.main_header,.sub_menu').css({
    //         backgroundColor:'gold'

    // })
    // })
    // $('.top_menu').eq(1).hover(function(){
    //     $('.main_header,.sub_menu').css({
    //         backgroundColor:'hotpink'
    // })
    // },function(){
    //     $('.main_header,.sub_menu').css({
    //         backgroundColor:'gold'

    // })
    // })
    // $('.top_menu').eq(2).hover(function(){
    //     $('.main_header,.sub_menu').css({
    //         backgroundColor:'aqua'
    // })
    // },function(){
    //     $('.main_header,.sub_menu').css({
    //         backgroundColor:'gold'

    // })
    // })
    // $('.top_menu').eq(3).hover(function(){
    //     $('.main_header,.sub_menu').css({
    //         backgroundColor:'greenyellow'
    // })
    // },function(){
    //     $('.main_header,.sub_menu').css({
    //         backgroundColor:'gold'

    // })
    // })
    // $('.top_menu').eq(4).hover(function(){
    //     $('.main_header,.sub_menu').css({
    //         backgroundColor:'royalblue'
    // })
    // },function(){
    //     $('.main_header,.sub_menu').css({
    //         backgroundColor:'gold'

    // })
    
   
///사이트맵 클릭시 이미지 변경???
    // $('.site_map').click(function(){
    //     $()
    // })



   




}//mo영역 괄호

})//끝