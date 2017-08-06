/**
 * Created by Administrator on 2017/6/15.
 */
$(function(){
    $('.l-tabbar li').click(function(){
        $(this).addClass('current');
        $(this).css({"background":"#c3c8d8"});
        $(this).siblings().css({"background":"#69798e"})
        $(this).siblings().removeClass('current');
        if($(this).attr("tab")==1){
            $('div[tab=1]').css("display",'block');
         $('div[tab=1]').siblings().css("display",'none');
        }
        if($(this).attr("tab")==2){
            $('div[tab=2]').css("display",'block');
            $('div[tab=2]').siblings().css("display",'none');
        }
    });
});