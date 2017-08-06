/**
 * Created by YuJiao on 2017/6/12.
 */
$(function(){
    $('.logo_from_top_l a').click(function(){
        $('.logo_from_top_l a').css({"font-weight": "700","color": "#e4393c"})
        $('.logo_from_top_r a').css({"font-weight": "0","color": "#676767"})
        $('.logo_from_middle_r').hide();
        $('.logo_from_middle_l').show();

    })
    $('.logo_from_top_r a').click(function(){
        $('.logo_from_top_r a').css({"font-weight": "700","color": "#e4393c"})
        $('.logo_from_top_l a').css({"font-weight": "0","color": "#676767"})
        $('.logo_from_middle_l').hide();
        $('.logo_from_middle_r').show();
    })
} )
