/**
 * Created by lenovo on 2017/2/18.
 */
$(function () {
    window.onload = function () {
        var mb = document.getElementById("menu-btn");
        var menu = document.getElementById("menu");
        //var ad = document.getElementById("ad");
        var $width = document.body.offsetWidth;
        var menu1 = document.getElementById("menu1");
        menu1.unfold = "false";
        var top = mb.children[0];
        var down = mb.children[1];
        top.style.animationName = "up";
        top.style.animationPlayState = "paused";
        top.style.animationDuration = ".8s";
        down.style.animationName = "down";
        down.style.animationPlayState = "paused";
        down.style.animationDuration = ".8s";
        var left = document.getElementById('close-lf');
        var right = document.getElementById('close-gt');
        left.style.animationName = "left";
        left.style.animationPlayState = "paused";
        left.style.animationDuration = ".8s";
        right.style.animationName = "right";
        right.style.animationPlayState = "paused";
        right.style.animationDuration = ".8s";
        mb.onclick = function () {
            top = this.children[0];
            down = this.children[1];
            $('#shopping-bag').css({display: 'none'});
            $('#search-text').css({display: 'none'});
            if (menu1.unfold == "false") {
                top.style.animationPlayState = "running";
                top.style.animationFillMode = "forwards";
                down.style.animationPlayState = "running";
                down.style.animationFillMode = "forwards";
                //ad.style.display = 'none';
                document.getElementById("header").style.overflow = 'hidden';
                $('#menu1').css({height: '100%'});
                $(function () {
                    $(".shopping-car").css({position: 'relative'}).animate({left: '+60px'}, "slow");
                    $('#menu1').slideDown('slow');
                });
                menu1.unfold = "true";
            }
            else {
                document.getElementById("header").style.overflow = 'auto';
                $('#logo2').css({position: 'relative'}).animate({top: '0px'}, "fast");
                top.style.animationPlayState = "paused";
                top.style.animationPlayState = "running";
                top.style.animationFillMode = "backwards";
                down.style.animationPlayState = "running";
                down.style.animationFillMode = "backwards";
                //ad.style.display = 'block';
                $(function () {
                    $('#menu1').slideUp('slow');
                    $(".shopping-car").css({position: 'relative'}).animate({left: '0px'}, "slow");
                    $('#close').css({display: "none"});
                });
                menu1.unfold = "false";
            }
            $('#close').click(function () {
                $('#search-text').css({display: "none"});
                $('#menu1').fadeIn('slow');
                $('#logo2').css({position: 'relative'}).animate({top: '0px'}, "slow");
                $('#close').css({display: 'none'});
            });
            $('#search').click(function () {
                left.style.animationPlayState = "running";
                left.style.animationFillMode = "forwards";
                right.style.animationPlayState = "running";
                right.style.animationFillMode = "forwards";
                $('#menu1').slideUp();
                $('#search-text').css({display: 'block', height: '100%'});
                menu1.unfold = "true";
                $('#logo2').css({position: 'relative'}).animate({top: '-44px'}, "slow");
                $('#close').css({display: 'block'});
            });
        };
        $('.shopping-car').click(function () {
            if (document.getElementById('shopping-bag').style.display == 'block') {
                $('#shopping-bag').css({display: 'none'});
            }
            else {
                $('#shopping-bag').css({display: 'block'});
            }
        });
        var ishidden = "false";
        var list = document.getElementsByClassName('list');
        $('#search1').click(
            function () {
                if (ishidden == "false") {
                    for (var i = 0; i < list.length; i++) {
                        list[i].style.display = 'none';
                        //list[i].style.visibility = 'hidden';
                    }
                    this.style.display = 'none';
                    document.getElementById('search2').style.display = 'block';
                    document.getElementById('car1').style.display = "none";
                    //document.getElementById('car1').style.visibility = "hidden";
                    ishidden = "true";
                }
            });
       
        var son = document.getElementsByClassName('son');
        var i = 0;
        function trunToleft() {
            $('.img4').attr('class', 'img2').prependTo($('#inner'));//.css({transform:'scale(0.9)',transition:'all 1s'});
            $('.img3').attr('class', 'img4').css({position: 'absolute'}).animate({left: '0px'},1000).appendTo($('#diva'));
            $('.img2:last').attr('class', 'img3').css({position: 'absolute'}).css({left: '50%'}).appendTo($('#inner'));
        }
        function trunToright() {
            $('.img4').attr('class', 'img3').css({position: 'absolute'}).animate({left: '50%'}).appendTo($('#inner'));
            $('.img2').attr('class', 'img4').css({position: 'absolute'}).appendTo($('#diva'));
            $('.img3:first').attr('class', 'img2').css({position: 'absolute', left: '0'});
        }

        function bianSe(){
            if(i<3){
                // alert(i);
                son[i].style.animationName = 'color';
                son[i].style.animationDuration='3s';
                son[i].style.animationTimingFunction='linear' ;
                son[i].style.animationFillMode='forwards';
                 son[i].style.animationPlayState = 'running';
                 //son[i].style.animationIterationCount = 'infinite';
                i++;
            }
            else{
                i=0;
            }
        }
        //var inter1 = setInterval(function(){
        //    bianSe();
        //},5000);
        //bianSe();
        //var inter = setInterval(function(){
        //    trunToleft();
        //    bianSe();
        //},3000);
        $('#btn-gt').click(
            function () {
                trunToleft();
                bianSe();
                clearInterval(inter);
            });
        $('#btn-lf').click(
            function () {
                trunToright();
                bianSe();
                clearInterval(inter);
            });
        //$(function () {
        //    $(window).resize(function () {
        //        $('#ad').css({display:'block'});
        //        //$('#menu1').css({display: 'none'});
        //    });
        //});
        var itemlis = document.getElementsByClassName("item-li");
        var isblock = "false";
        for (var i = 0; i < itemlis.length; i++) {
            itemlis[i].onclick = function () {
                if (isblock == 'false') {
                    $(this).next().attr('class', 'item-3');
                    this.previousElementSibling.style.transform = "rotate(45deg)";
                    this.previousElementSibling.style.transition = "all";
                    this.previousElementSibling.style.transitionDuration = '1s';
                    isblock = "true";
                }
                else {
                    $(this).next().attr('class', 'item-1');
                    this.previousElementSibling.style.transform = "rotate(0deg) ";
                    this.previousElementSibling.style.transition = "all";
                    this.previousElementSibling.style.transitionDuration = '1s';
                    isblock = "false";
                }


            }
        }
    };
});

