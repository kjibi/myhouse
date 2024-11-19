$(document).ready(function(){
    //어워드 영역
    let i=0;
    setInterval(function(){
        i++;
        if(i>2){
            i=0
        }
        $('.awards_img').fadeOut(500);
        $('.awards_img').eq(i).fadeIn(500);
    },5000)


    $('#tab_1').click(function(){
        $('.main_img').addClass('img_1 img_2');
    })
    $('#tab_2').click(function(){
        $('.main_img').addClass('img_1');
        $('.main_img').removeClass('img_2');
    })
    $('#tab_3').click(function(){
        $('.main_img').removeClass('img_1 img_2');
    })

//     $('#tab_1').click(function(){
//         $('.main_img').addClass('img_1');
//         $(this).removeClass('main_img');
//     },$('#tab_3').click(function(){
//         $('.main_img').addClass('img_2');
//         $('.main_img').removeClass('img_1');
//     })
// )
    

    $('.tab_car_but_wrap>button').click(function(){
        let idx=$(this).index();
        $('.tab').fadeOut(500);
        $('.tab').eq(idx).fadeIn(500);
    })



   

   




    $('button').hover(function(){
        let e=$(this).index();
  
        $('button').eq(e).css({
            backgroundColor:'silver'
           
        })
        

    },function(){
        $('button').css({
            backgroundColor:''
        })
    })

    



    //product box 영역
    // $('.product_img').hover(function(){
    //     $('.model_img',this),css({
    //     
    //     })
    // })
    
    // $('.li_1').click(function(){

    // })







})//끝