/**
 * Created by YuJiao on 2017/6/26.
 */
$(function(){
    $(".byj_r_form_input").focusin(function(){
        $(this).children('txt').css({display:"none"})
        $(this).next().children('span').css({display:'inline-block'});
    })
    $(".byj_r_form_input").focusout(function(){
        $(this).children('txt').css({display:"inline"})
        $(this).next().children('span').hide();
    })
    $('.byj_switch_item').each(function(){
        $(this).click(function(){
            $('.byj_switch_item').removeClass('byj_switch_item_hover')
            $(this).addClass('byj_switch_item_hover')
        })
    })
    $('.byj_switchbar').children().eq(0).click(function(){
        $('.byj_block').children().hide()
        $('.byj_block').children().eq(0).show()
    });
    $('.byj_switchbar').children().eq(1).click(function(){
        $('.byj_block').children().hide()
        $('.byj_block').children().eq(1).show()
    });
    $('.byj_switchbar').children().eq(2).click(function(){
        $('.byj_block').children().hide()
        $('.byj_block').children().eq(2).show()
    });
    $('.byj_switchbar').children().eq(3).click(function(){
        $('.byj_block').children().hide()
        $('.byj_block').children().eq(3).show()
    });
    $('.byj_switchbar').children().eq(4).click(function(){
        $('.byj_block').children().hide()
        $('.byj_block').children().eq(4).show()
    });
    $('.byj_switchbar').children().eq(5).click(function(){
        $('.byj_block').children().hide()
        $('.byj_block').children().eq(5).show()
    })
    $('#byj_switch,.byj_switch_item_ul li').click(function(){
        $('.byj_form_hidden').toggle()
    })
    $('.byj_switch_item_ul li').click(function(){
        $('#byj_switch').text($(this).children('a').text())
    })
})
