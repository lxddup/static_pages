
/**
 * Created by YuJiao on 2017/6/15.
 */
$(function () {
    $(".byj_nav_main_bar_div ").mouseover(function () {
        $(this).children("span").eq(1).css({
            transform: " rotate(180deg) ",
            "transition": "transform .3s ease .1s",
            "background-position": "0 -135px"
        });
        $(this).css({background: "#fff", color: "#333", border: "1px solid #ddd", "border-bottom": "0"});
        $(this).children("div").show();
    });
    $(".byj_nav_main_bar_div").mouseout(function () {
        $(this).children("span").eq(1).css({
            transform: " rotate(360deg)",
            "transition": "transform .3s ease .1s",
            "background-position": "0 -120px"
        });
        $(this).css({background: "#e45050", color: "#fff", border: "1px solid #e45050", "border-bottom": "0"});
        $(this).children("div").hide();
    });
    $(".byj_nav_main_bar_div_ul li").mouseover(function () {
        $(this).children("a").css({color: "#e45040"});
    });
    $(".byj_nav_main_bar_div_ul li").mouseout(function () {
        $(this).children("a").css({color: "#333"});
    });
    $(".byj_car_all").mouseover(function () {
        $(".byj_shoppingcar_detail").show();
    });
    $(".byj_car_all").mouseout(function () {
        $(".byj_shoppingcar_detail").hide();
    });
    $(".byj_middle_body_menu_content a").each(function () {
        $(this).click(function () {
            $(".byj_middle_body_menu_content a").removeClass("byj_middle_body_menu_content_active");
            $(this).addClass("byj_middle_body_menu_content_active");
        })
    });
    $(".byj_myOrder_type a").each(function () {
        $(this).click(function () {
            $(".byj_myOrder_type a").css({background: "#fff", color: "#666", "border-radius": "0px"});
            $(this).css({background: "#e4393c", color: "#fff", "border-radius": "2px"});
        });
    });
    $(".byj_myOrder_highsearch").click(function () {
        $(".byj_myOrder_detail").toggle()
    });
    $(".byj_highsearch_close").click(function () {
        $(".byj_myOrder_detail").hide()
    });
    $(".byj_myOrder_menu1 a").each(function(){
        $(this).click(function(){
            $(".byj_myOrder_menu1 a").removeClass("byj_myOrder_menu1_a2");
            $(this).addClass("byj_myOrder_menu1_a2");
        });
    });
    $("#byj_o_t_h_i_timetext").mouseover(function(){
        $(this).children(".byj_o_t_h_i_timelist").show()
        $("#byj_o_t_h_i_time").children(".byj_blank").show()
        $("#byj_o_t_h_i_time").css({"box-shadow": "0 0 10px rgba(0,0,0,.12)",background: "#fff",border:"1px solid #f5f5f5" })
            //addClass(".byj_o_t_h_i_timetext_hover")

    });
    $("#byj_o_t_h_i_timetext").mouseout(function(){
        $(this).children(".byj_o_t_h_i_timelist").hide()
        $("#byj_o_t_h_i_time").children(".byj_blank").hide()
        $("#byj_o_t_h_i_time").css({"box-shadow": "none",background: "#f5f5f5",border:"1px solid #f5f5f5" })
    });
    $("#byj_o_t_h_i_statetext").mouseover(function(){
        $(this).children(".byj_o_t_h_i_timelist").show()
        $("#byj_o_t_h_i_state").children(".byj_blank").show()
        $("#byj_o_t_h_i_state").css({"box-shadow": "0 0 10px rgba(0,0,0,.12)",background: "#fff",border:"1px solid #f5f5f5" })
    });
    $("#byj_o_t_h_i_statetext").mouseout(function(){
        $(this).children(".byj_o_t_h_i_timelist").hide()
        $("#byj_o_t_h_i_state").children(".byj_blank").hide()
        $("#byj_o_t_h_i_state").css({"box-shadow": "none",background: "#f5f5f5",border:"1px solid #f5f5f5" })
    });
    //$(".byj_myOrder_table_body").mouseover(function(){
    //    $(this).children(".byj_order_info_delete").show()
    //});
    //$(".byj_myOrder_table_body").mouseout(function(){
    //    $(this).children(".byj_order_info_delete").hide()
    //})
    $(".byj_person_name_all").mouseover(function(){
        $(this).next("div").show()
    });
    $(".byj_person_name_all").mouseout(function(){
        $(this).next("div").hide()
    });
    $(".byj_guess_switch a").each(function(){
        $(this).click(function(){
            $(".byj_guess_switch a").removeClass("byj_curr")
            $(this).addClass("byj_curr")
        });
    });
    $(".byj_guess_switch a").eq(0).click(function(){
        $(".byj_guess_goods_list_ul").hide()
        $("#byj_guess_ul1").show()
    });
    $(".byj_guess_switch a").eq(1).click(function(){
        $(".byj_guess_goods_list_ul").hide()
        $("#byj_guess_ul2").show()
    });
    $(".byj_guess_switch a").eq(2).click(function(){
        $(".byj_guess_goods_list_ul").hide()
        $("#byj_guess_ul3").show()
    });



});
