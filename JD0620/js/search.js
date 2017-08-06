/**
 * Created by Administrator on 2017/6/25.
 */
$(function () {
    $("#city").hover(function () {
        $(".mycity").show();
    }, function () {
        $(".mycity").hide();
    });

    $("#myjd").hover(function () {
        $(".myjd-drop").show();
    }, function () {
        $(".myjd-drop").hide();
    });

    $("#service").hover(function () {
        $(".service-drop").show();
    }, function () {
        $(".service-drop").hide();
    });

    $("#netnav").hover(function () {
        $(".netnav-drop").show();
    }, function () {
        $(".netnav-drop").hide();
    });

    $(".cate").hover(function () {
        $(".cate-menu").show();
    }, function () {
        $(".cate-menu").hide();
    });
    $(".cate-menu-li").hover(function () {
        $(".cate-drop").show();
    }, function () {
        $(".cate-drop").hide();
    });
    $(".cate-menu-li").hover(function () {
        $(".cate-drop").show();
    }, function () {
        $(".cate-drop").hide();
    });

    //搜索框
    $('.text').focus(function () {
        $('.search-drop').show();
    });
    $('.text').blur(function () {
        $('.search-drop').hide();
    });
    $('.search-drop li').click(function () {
        window.open('search.html');
        alert("111");
    });

    $('.button').click(function () {
        window.open("search.html")
    });

    var provinces = ['北京', '天津', '山东', '河南', '河北', '山西'];
    var city = ['市1', '市2', '市3'];
    var county = ['县1', '县2', '县3', '县4'];
    //hover显示出来
    $('.sel-text').hover(function () {
        var $this = $(this);
        $('#addressInfo').show();
    });
    //取到当前的城市级别
    var $provinces_li = $('.region>ul');
    //provinces数组中的每个元素都加入
    $.each(provinces, function (e) {
        $provinces_li.append('<li><a href="#" class="provinces">' + this + '</a></li>');
    });
    //进行选择
    var i = 0;
    $('.area')
        .tabs()
        //选择省份
        .on('click', '.provinces', function () {
            //获取当前对象
            var $this = $(this),
                $tabs = $this.parents('.selectAddress'),		//追加DIV
                $div = $('<div id="tabs-2"></div>'),
                $ul = $('<ul></ul>');		//追加ul

            $tabs.children(':eq(0)').children(':gt(0)').remove();
            $tabs.children('div:gt(0)').remove();

            //each遍历，赋值
            //最好是这样，code、name$ul.append('<li><a href="javascript:void(0);" class="city">'+this.name+'</a><input type="hidden" value="'+this.code+'"/></li>');

            $.each(city, function () {
                $ul.append('<li><a href="#" class="city">' + this + '</a></li>');
            });

            $tabs.children('ul').append('<li class="float"><a href="#tabs-2">市区</a></li>');
            $tabs.append($div.addClass('region').append($ul));
            $tabs
                .tabs("refresh")
                .tabs('option', 'active', 1)
                .data('address', $this.text());
        })
        .on('click', '.city', function () {
            var $this = $(this),
                $tabs = $this.parents('.selectAddress'),
                $div = $('<div id="tabs-3"></div>'),
                $ul = $('<ul></ul>');

            $tabs.children('ul').children(':eq(2)').remove();
            $tabs.children('div:eq(2)').remove();
            $tabs.children('div:gt(2)').remove();

            i++;
            if (i == 1) {			//判断是否有下级
                $.each(county, function () {
                    $ul.append('<li><a href="#" class="county">' + this + '</a></li>');
                });

                $tabs.children('ul').append('<li class="float"><a href="#tabs-3">县区</a></li>');
                $tabs.append($div.addClass('region').append($ul));
                $tabs
                    .tabs("refresh")
                    .tabs('option', 'active', 2)
                    .data('address', $tabs.data('address') + '/' + $this.text());
            } else {
                //获取值并赋值至文本框中
                $('.sel-text span').val($tabs.data('address') + '/' + $this.text());
                $tabs.parent().hide();
            }
        })
        .on('click', '.county', function () {
            var $this = $(this),
                $tabs = $this.parents('.selectAddress');

            $('.sel-text span').val($tabs.data('address') + '/' + $this.text());
            $tabs.parent().hide();
        });
    $(document).bind('click', function (e) {
        var $target = $(e.target),
            addressInfo = $('#addressInfo');
        if (!$target.hasClass('selectAddress')
            && $target.parents('.selectAddress').size() == 0
            && !$target.is($('.address'))
            && addressInfo.is(':visible')) {
            $('#addressInfo').hide();
        }
    });

    $('.p-num a').on('click', function () {
        $(this).addClass('curr').siblings().removeClass('curr');
    });

    // $('.p-next a').on('click', function () {
    //     $('.p-num a').hasClass('curr').removeClass('curr');
    // });

    // if ($('.p-num').find("a").get(1).hasClass('curr')) {
    //    alert("222");
    // } else {
    //     $('.p-num').find("a").first().removeClass('disable');
    // }
    
});