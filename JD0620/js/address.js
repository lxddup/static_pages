/**
 * Created by asus on 2017/6/20.
 */

$(function () {

    $(".Modalchoose_p").mouseover(function () {
        $(".Modalchoose", (this)).addClass("addborder_btm");
        $(".Modaladress").css({"display": "block"});
    });
    $(".Modalchoose_p").mouseleave
    (function () {
            $(".Modalchoose", (this)).removeClass("addborder_btm");
            $(".Modaladress").css({"display": "none"});
        }
    );


    var provinces = ['北京', '上海', '天津', '重庆', '河北', '山西', '河南', '辽宁', '吉林', '黑龙江', '内蒙古', '江苏', '山东', '广东', '安徽', '浙江', '福建', '湖北', '湖南', '广东', '广西', '江西', '四川', '海南', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '港澳', '台湾', '钓鱼岛'];
    var $provinces_li = $('.Modaladress_ul');
    $.each(provinces, function (e) {
        $provinces_li.append('<li class="Modaladress_li"><a href="javascript:void(0);" >' + this + '</a></li>');
    });
    var cities = ['沈阳市', '本溪市', '抚顺市', '大连市', '鞍山市', '丹东市', '营口市', '铁岭市', '葫芦岛', '朝阳市', '阜新市'];
    var $cities_li = $('.Modaladress_ul1');
    $.each(cities, function (e) {
        $cities_li.append('<li class="Modaladress_li"><a href="javascript:void(0);" >' + this + '</a></li>');
    });
    var areas = ['和平区', '沈河区', '大东区', '皇姑区', '康平县', '辽中县', '新民市', '法库县', '铁西区', '于洪区', '苏家屯区', '新城子区'];
    var $areas_li = $('.Modaladress_ul2');
    $.each(areas, function (e) {
        $areas_li.append('<li class="Modaladress_li"><a href="javascript:void(0);" >' + this + '</a></li>');
    });
    var lasts = ['城区'];
    var $lasts_li = $('.Modaladress_ul3');
    $.each(lasts, function (e) {
        $lasts_li.append('<li class="Modaladress_li"><a href="javascript:void(0);" >' + this + '</a></li>');
    });

    $(".Modaladress_li").click(function () {
        if ($("a", (this)).html() == '辽宁') {
            $(".provinces em").html('辽宁');
            $(".provinces").addClass("addafter");
            $(".provinces_ul").css({"display": "none"});
            $(".cities").css({"display": "block"});
            $(".cities_ul").css({"display": "block"});
        }
    });
    // 省选择之后
    $(".Modaladress_li").click(function () {
        if ($("a", (this)).html() == '沈阳市') {
            $(".cities em").html('沈阳市');
            $(".cities").addClass("addafter");
            $(".cities_ul").css({"display": "none"});
            $(".areas").css({"display": "block"});
            $(".areas_ul").css({"display": "block"});
        }
    });
    // 市选择之后
    $(".Modaladress_li").click(function () {
        if ($("a", (this)).html() == '和平区') {
            $(".areas em").html('和平区');
            $(".areas").addClass("addafter");
            $(".areas_ul").css({"display": "none"});
            $(".lasts").css({"display": "block"});
            $(".lasts_ul").css({"display": "block"});
        }
    });

    // 县，区选择之后
    $(".Modaladress_li").click(function () {
        if ($("a", (this)).html() == '城区') {
            $(".lasts em").html('城区');
            $(".Modaladress").css({"display": "none"});
            $(".choosedr").html($(".provinces").html() + '/' + $(".cities").html() + '/' + $(".areas").html() + '/' + $(".lasts").html());
        }
    });
    // var arr=["provinces","cities","areas","lasts"];
    // var arrul=["provinces_ul","cities_ul","areas_ul","lasts_ul"];
    // for(var i=0;i<arr.length;i++){
    //     $("."+arr).click(function(){
    //         $("."+arr).addClass("addafter");
    //         $(this).removeClass("addafter");
    //         $("."+arrul).css({"display": "none"});
    //         $("."+arrul+"_ul").css({"display": "block"});
    //     })
    // }

    $(".provinces").click(function () {
        $(".cities").addClass("addafter");
        $(".areas").addClass("addafter");
        $(".lasts").addClass("addafter");
        $(this).removeClass("addafter");
        $(".provinces_ul").css({"display": "block"});
        $(".cities_ul").css({"display": "none"});
        $(".areas_ul").css({"display": "none"});
        $(".lasts_ul").css({"display": "none"});

    });

    $(".cities").click(function () {
        $(".provinces").addClass("addafter");
        $(".areas").addClass("addafter");
        $(".lasts").addClass("addafter");
        $(this).removeClass("addafter");
        $(".cities_ul").css({"display": "block"});
        $(".provinces_ul").css({"display": "none"});
        $(".areas_ul").css({"display": "none"});
        $(".lasts_ul").css({"display": "none"});

    })

    $(".areas").click(function () {
        $(".cities").addClass("addafter");
        $(".provinces").addClass("addafter");
        $(".lasts").addClass("addafter");
        $(this).removeClass("addafter");
        $(".areas_ul").css({"display": "block"});
        $(".cities_ul").css({"display": "none"});
        $(".provinces_ul").css({"display": "none"});
        $(".lasts_ul").css({"display": "none"});

    });

    $(".lasts").click(function () {
        $(".cities").addClass("addafter");
        $(".areas").addClass("addafter");
        $(".provinces").addClass("addafter");
        $(this).removeClass("addafter");
        $(".lasts_ul").css({"display": "block"});
        $(".cities_ul").css({"display": "none"});
        $(".areas_ul").css({"display": "none"});
        $(".provinces_ul").css({"display": "none"});

    });
    // 删除元素
    $(".delete_a").click(function () {
        $(this).parent().parent().parent().css({"display": "none"});
    });
    // 启动模态窗口
    $(".myadr_a ").click(function(){
        $(".Modalbackground").css({"display": "block"});
        $(".alertAddAddressDiag").css({"display": "block"});
    });
    // 关闭模态窗口
    $(".Modal_close").click(function () {
        $(".Modalbackground").css({"display": "none"});
        $(".alertAddAddressDiag").css({"display": "none"});
        $(".Modal1_spa").css({"display": "none"});
    });

    //验证部分
    $(".name_ipt").blur(function(){
        if($(".name_ipt").val()==""){
            $(this).parent().children("span").removeClass("name_ipt_s");
        }
    });
    $(".adr_ipt").blur(function(){
        if($(".adr_ipt").val()==""){
            $(this).parent().children("span").removeClass("name_ipt_s");
        }
    });
    $(".Telephone_ipt").blur(function(){
        if($(".Telephone_ipt").val()==""){
            $(this).parent().children("span").removeClass("name_ipt_s");
        }
    });
    $(".showtop_a").click(function(){
        $(this).parent().parent().children(".banshou").css({"display":"block"});
        $(this).parent(".h3").parent(".showtop").children(".banshou").children(".banshou1").children(".banshou1_ipt").val( $(this).parent().contents().filter(function(){
            return this.nodeType==Node.TEXT_NODE;
        }).text().trim());

    });
    // 让模态窗口后面的网页随鼠标滚动
    $(".showtop_a").on("click",function(e){
        $(this).parent().parent().children(".banshou").show();
        $(document).one("click",function(){
            $(".showtop_a").parent().parent().children(".banshou").hide();
        });
        e.stopPropagation();
    });
});


