/**
 * Created by YuJiao on 2017/6/27.
 */
$(function(){
    $('#byj_m_b_1_1').click(function(){
        $('.byj_acc_right').children().hide()
        $('#byj_personal_info').show()
    });
    $('#byj_m_b_1_2').click(function(){
        $('.byj_acc_right').children().hide()
        $('#byj_acc_safe').show()
    });
    $('#byj_m_b_1_3').click(function(){
        $('.byj_acc_right').children().hide()
        $('#byj_myaddress').show()
    });
    $('.byj_perinfo_nav_li').each(function(){
        $(this).click(function(){
            $('.byj_perinfo_nav_li a').removeClass('byj_perinfo_nav_a');
            $(this).children('a').addClass('byj_perinfo_nav_a');
        });
    });
    $('#byj_name_change').click(function(){
        $('.byj_name_text').hide()
        $('.byj_name_input').show()
        $('#byj_prompt1').show()

    })
    $('#byj_input1').focusout(function(){
        $('#byj_prompt1').hide()
    });
    $('#byj_input2').focusin(function(){
        $('#byj_prompt2').show();
    });
    $('#byj_input2').focusout(function(){
        $('#byj_prompt2').hide();
    });
    $('#byj_input3').focusin(function(){
        $('#byj_prompt3').show();
    });
    $('#byj_input3').focusout(function(){
        $('#byj_prompt3').hide();
    });
    $('#byj_input4').focusin(function(){
        $('#byj_prompt4').show();
    });
    $('#byj_input4').focusout(function(){
        $('#byj_prompt4').hide();
    });
    $('.byj_hobby_list li').click(function(){
        $(this).toggleClass('byj_hobby_type_selected');
        $(this).children('span').toggleClass('byj_display')
    });
    $('#byj_pernav_li1').click(function(){
        $('.byj_perinfo_main').hide()
        $('#byj_perinfo_basic').show()
    });
    $('#byj_pernav_li2').click(function(){
        $('.byj_perinfo_main').hide()
        $('#byj_perinfo_img').show()
    });
    $('#byj_pernav_li3').click(function(){
        $('.byj_perinfo_main').hide()
        $('#byj_perinfo_more').show()
    });

    var addr=$('#byj_bigimg')[0].src;
    $('.byj-img1 img').attr('src',addr);
    $('.byj-img2 img').attr('src',addr);




});
