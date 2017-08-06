/**
 * Created by Administrator on 2017/2/25 0025.
 */

window.onload = function () {
    var topnav2li = document.querySelectorAll("#topnav2>li");
    for (var i = 0; i < topnav2li.length; i++) {
        topnav2li[i].onmouseover = function () {
            this.children[1].style.display = "block";
        }
        topnav2li[i].onmouseout = function () {
            this.children[1].style.display = "none";
        }
    }
    var firstli = document.querySelectorAll("#topcleft>ul>li");
    for (var i = 0; i < firstli.length; i++) {
        firstli[i].onmouseover = function () {
            this.children[1].style.display = "block";
        }
        firstli[i].onmouseout = function () {
            this.children[1].style.display = "none";
        }
    }

    //轮播
    var iNow = 0;
    var ul = document.getElementById("ul");
    var tpcc2 = document.getElementById("tpcc2");
    var banners = document.getElementsByClassName("banner");
    ul.style.width = parseFloat(banners.length * 720) + 'px';
    console.log(ul);
    //自动播放
    function move() {
        if (iNow < banners.length-1) {
            iNow++;}
        else {iNow = 0;}
        ul.style.left = parseFloat(-720 * iNow) + 'px';
    }
    function auto() {
        in1 = setInterval(move, 3000);
    }
    auto();

    $('#tpcc2al').click(function () {
        clearInterval(in1);
       iNow++;
        if(iNow == banners.length){iNow=0};
        ul.style.left = parseFloat(-720 * iNow) + 'px';
        console.log(iNow);
        auto();
    });
    $('#tpcc2ar').click(function () {
        clearInterval(in1);
        iNow--;
        if(iNow <0){iNow = banners.length-1}
        ul.style.left = parseFloat(-720 * iNow) + 'px';
        console.log(iNow);
        auto();
    });


}
