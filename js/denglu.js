$(function(){
    let zuo=$('.zuo>a');
    let you=$('.you>a');
    let li1=$('.li1');
    let li2=$('.li2');
    let w=li1.width();
    zuo.on('click',function(){
        zuo.css({color:'#46be8a'})
        you.css({color:'#565958'})
        li1.css({left:0})
        li2.css({left:w})
    })
    you.on('click',function () {
        you.css({color:'#46be8a'})
        zuo.css({color:'#565958'})
        li2.css({left:0})
        li1.css({left:w})
    })
})