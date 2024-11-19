$(document).ready(function(){

    $('.top_menu.on').mouseenter(function(){
        $('.head_bg').css({
            height:0
        })
        $('.head_bg').css({
            height:'450px'
        })
        $('.sub_menu').css({
            height:0
        })
        $('.sub_menu',this).css({
            height:'400px'
        })
    })

    $('.head_bg').mouseleave(function(){
        $('.head_bg').css({
            height:0
        })
        $('.sub_menu').css({
            height:0
        })
    })

    $('.notice_tit>a').mouseenter(function(){
        let idx=$(this).index();
        $('.notice').removeClass('active');
        $('.notice').eq(idx).addClass('active');
        $('.hover').removeClass('hover');
        $(this).addClass('hover');
    })


    let scb=$('body').height() - $(window).height() - $(window).scrollTop();
    console.log(scb);
    let sct=$(window).scrollTop();
    console.log(sct);




})//끝