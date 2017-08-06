/**
 * Created by Administrator on 2017/6/29.
 */
$(function(){
    $('.mc li .p-del').click(function(){
       $(this).parent().remove();
    })
    window.onscroll=function(){
        var scroll=parseInt(window.scrollY);
        // console.log(scroll);
        $('.p-line-red').height(scroll);
    }
    var hcount=$('.goods-item').length;
    console.log(hcount);
    $('.p-line').height(hcount*410);
})
