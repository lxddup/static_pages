/**
 * Created by asus on 2017/6/19.
 */
window.onload=function(){
// alert(1);
$(".nav_li").hover(function(){
    $(this).children(".xiala_div").addClass("block");
    $(this).siblings().children(".xiala_div").removeClass("block");

},function(){
    $(this).children(".xiala_div").removeClass("block");
    $(this).siblings().children(".xiala_div").removeClass("block");
});
    $(".navright").hover(function(){
        $(this).siblings().children(".xiala_div").removeClass("block");
        $(".navright").children(".xiala_div").addClass("block");
    },function(){
        $(".xiala_div").removeClass("block");
    })

    $(".l").hover(function(){
        $(this).siblings(".leftbar_div").addClass("block");
    },function(){
        $(this).siblings(".leftbar_div").removeClass("block");
    });
    // $('.nav_a').click(function(){
    //     $('#iframe').attr("src","qiantao.html");
    // });
    $('.xiala_a1').click(function(){//用户管理
        $('#iframe').attr({"src":"userManage.html"});
    })
    $('.xiala_a2').click(function(){//订单列表，跟原网站一样的
        $('#iframe').attr({"src":"listManage.html"});
    })
    $('.xiala_a3').click(function(){//用户地址管理
        $('#iframe').attr({"src":"useradressManage.html"});
    })
    $('.xiala_a4').click(function(){//订单管理列表，是根据数据库图设计的
        $('#iframe').attr({"src":"orderManage.html"});
    })
    $('.xiala_a5').click(function(){//商品管理
        $('#iframe').attr({"src":"goodsSort.html"});
    })
    $('.xiala_a6').click(function(){//商品管理
        $('#iframe').attr({"src":"recodeList.html"});
    })
};
