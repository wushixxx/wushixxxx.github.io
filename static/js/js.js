// 跑馬燈參數設定
$('.marquee-1-content').marquee({
    speed: 70, //速度
    gap: 100, //間距
    delayBeforeStart: 0, //延遲
    direction: 'left', //方向
    duplicated: true, //複製內容
    pauseOnHover: true, //滑過停止
});

$(document).ready(function () {
    //按鈕點擊觸發
    $("a.pop_btn").click(function () {
        $("#lightbox_lightboxbg, #lightbox-1").fadeIn(300);
        $("#lightbox-1").center();
      });
    $(".newsBox").click(function () {
        $("#lightbox_lightboxbg, #lightbox-2").fadeIn(300);
        $("#lightbox-2").center();
    });
       //關閉鈕觸發
    $("a.lightbox_close").click(function () {
        $("#lightbox_lightboxbg, .lightbox").fadeOut(300);
      });

    $("a.tab01").click(function () {
        $("a.tab01").addClass("active");
        $("a.tab02").removeClass("active");
        $("a.tab03").removeClass("active");
        $("a.tab04").removeClass("active");
        $("a.tab05").removeClass("active");
        $("a.tab06").removeClass("active");
        $("a.tab07").removeClass("active");
        $("a.tab08").removeClass("active");
        $(".tab_content01").addClass("active");
        $(".tab_content02").removeClass("active");
        $(".tab_content03").removeClass("active");
        $(".tab_content04").removeClass("active");
        $(".tab_content05").removeClass("active");
        $(".tab_content06").removeClass("active");
        $(".tab_content07").removeClass("active");
        $(".tab_content08").removeClass("active");
    });
    $("a.tab02").click(function () {
        $("a.tab02").addClass("active");
        $("a.tab01").removeClass("active");
        $("a.tab03").removeClass("active");
        $("a.tab04").removeClass("active");
        $("a.tab05").removeClass("active");
        $("a.tab06").removeClass("active");
        $("a.tab07").removeClass("active");
        $("a.tab08").removeClass("active");
        $(".tab_content02").addClass("active");
        $(".tab_content01").removeClass("active");
        $(".tab_content03").removeClass("active");
        $(".tab_content04").removeClass("active");
        $(".tab_content05").removeClass("active");
        $(".tab_content06").removeClass("active");
        $(".tab_content07").removeClass("active");
        $(".tab_content08").removeClass("active");
    });
    $("a.tab03").click(function () {
        $("a.tab03").addClass("active");
        $("a.tab01").removeClass("active");
        $("a.tab02").removeClass("active");
        $("a.tab04").removeClass("active");
        $("a.tab05").removeClass("active");
        $("a.tab06").removeClass("active");
        $("a.tab07").removeClass("active");
        $("a.tab08").removeClass("active");
        $(".tab_content03").addClass("active");
        $(".tab_content01").removeClass("active");
        $(".tab_content02").removeClass("active");
        $(".tab_content04").removeClass("active");
        $(".tab_content05").removeClass("active");
        $(".tab_content06").removeClass("active");
        $(".tab_content07").removeClass("active");
        $(".tab_content08").removeClass("active");
    });
    $("a.tab04").click(function () {
        $("a.tab04").addClass("active");
        $("a.tab01").removeClass("active");
        $("a.tab02").removeClass("active");
        $("a.tab03").removeClass("active");
        $("a.tab05").removeClass("active");
        $("a.tab06").removeClass("active");
        $("a.tab07").removeClass("active");
        $("a.tab08").removeClass("active");
        $(".tab_content04").addClass("active");
        $(".tab_content01").removeClass("active");
        $(".tab_content02").removeClass("active");
        $(".tab_content03").removeClass("active");
        $(".tab_content05").removeClass("active");
        $(".tab_content06").removeClass("active");
        $(".tab_content07").removeClass("active");
        $(".tab_content08").removeClass("active");
    });
    $("a.tab05").click(function () {
        $("a.tab05").addClass("active");
        $("a.tab01").removeClass("active");
        $("a.tab02").removeClass("active");
        $("a.tab03").removeClass("active");
        $("a.tab04").removeClass("active");
        $("a.tab06").removeClass("active");
        $("a.tab07").removeClass("active");
        $("a.tab08").removeClass("active");
        $(".tab_content05").addClass("active");
        $(".tab_content01").removeClass("active");
        $(".tab_content02").removeClass("active");
        $(".tab_content03").removeClass("active");
        $(".tab_content04").removeClass("active");
        $(".tab_content06").removeClass("active");
        $(".tab_content07").removeClass("active");
        $(".tab_content08").removeClass("active");
    });
    $("a.tab06").click(function () {
        $("a.tab06").addClass("active");
        $("a.tab01").removeClass("active");
        $("a.tab02").removeClass("active");
        $("a.tab03").removeClass("active");
        $("a.tab04").removeClass("active");
        $("a.tab05").removeClass("active");
        $("a.tab07").removeClass("active");
        $("a.tab08").removeClass("active");
        $(".tab_content06").addClass("active");
        $(".tab_content01").removeClass("active");
        $(".tab_content02").removeClass("active");
        $(".tab_content03").removeClass("active");
        $(".tab_content04").removeClass("active");
        $(".tab_content05").removeClass("active");
        $(".tab_content07").removeClass("active");
        $(".tab_content08").removeClass("active");
    });
    $("a.tab07").click(function () {
        $("a.tab07").addClass("active");
        $("a.tab01").removeClass("active");
        $("a.tab02").removeClass("active");
        $("a.tab03").removeClass("active");
        $("a.tab04").removeClass("active");
        $("a.tab05").removeClass("active");
        $("a.tab06").removeClass("active");
        $("a.tab08").removeClass("active");
        $(".tab_content07").addClass("active");
        $(".tab_content01").removeClass("active");
        $(".tab_content02").removeClass("active");
        $(".tab_content03").removeClass("active");
        $(".tab_content04").removeClass("active");
        $(".tab_content05").removeClass("active");
        $(".tab_content06").removeClass("active");
        $(".tab_content08").removeClass("active");
    });
    $("a.tab08").click(function () {
        $("a.tab08").addClass("active");
        $("a.tab01").removeClass("active");
        $("a.tab02").removeClass("active");
        $("a.tab03").removeClass("active");
        $("a.tab04").removeClass("active");
        $("a.tab05").removeClass("active");
        $("a.tab06").removeClass("active");
        $("a.tab07").removeClass("active");
        $(".tab_content08").addClass("active");
        $(".tab_content01").removeClass("active");
        $(".tab_content02").removeClass("active");
        $(".tab_content03").removeClass("active");
        $(".tab_content04").removeClass("active");
        $(".tab_content05").removeClass("active");
        $(".tab_content06").removeClass("active");
        $(".tab_content07").removeClass("active");
    });
    $("#tab07").click(function () {
        $("a.tab07").addClass("active");
        $("a.tab01").removeClass("active");
        $("a.tab02").removeClass("active");
        $("a.tab03").removeClass("active");
        $("a.tab04").removeClass("active");
        $("a.tab05").removeClass("active");
        $("a.tab06").removeClass("active");
        $("a.tab08").removeClass("active");
        $(".tab_content07").addClass("active");
        $(".tab_content01").removeClass("active");
        $(".tab_content02").removeClass("active");
        $(".tab_content03").removeClass("active");
        $(".tab_content04").removeClass("active");
        $(".tab_content05").removeClass("active");
        $(".tab_content06").removeClass("active");
        $(".tab_content08").removeClass("active");
    });
    $("#tab08").click(function () {
        $("a.tab08").addClass("active");
        $("a.tab01").removeClass("active");
        $("a.tab02").removeClass("active");
        $("a.tab03").removeClass("active");
        $("a.tab04").removeClass("active");
        $("a.tab05").removeClass("active");
        $("a.tab06").removeClass("active");
        $("a.tab07").removeClass("active");
        $(".tab_content08").addClass("active");
        $(".tab_content01").removeClass("active");
        $(".tab_content02").removeClass("active");
        $(".tab_content03").removeClass("active");
        $(".tab_content04").removeClass("active");
        $(".tab_content05").removeClass("active");
        $(".tab_content06").removeClass("active");
        $(".tab_content07").removeClass("active");
    });
});

// 輪播
var mySwiper = new Swiper('.swiper', {
    autoplay: true,//可选选项，自动滑动
    autoplay: {
        disableOnInteraction: false,
        delay: 5000
    },
    loop: true,
    speed: 800,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

// $("#icon011").mouseover(function(){
//    alert('ddd');
// });

// // footer hover
// $(".icon011").mouseover(function () {
//     alert('1');
//
//     //$(".icon01").attr("src", "/static/img/footer_icon01_h.png");
// });
// $(".icon011").mouseout(function () {
//     alert('2');
//    // $(".icon01").attr("src", "/static/img/footer_icon01.png");
// });
$(".icon02").mouseover(function () {
    $(".icon02").attr("src", "/static/img/footer_icon02_h.png");
});
$(".icon02").mouseout(function () {
    $(".icon02").attr("src", "/static/img/footer_icon02.png");
});
$(".icon03").mouseover(function () {
    $(".icon03").attr("src", "/static/img/footer_icon03_h.png");
});
$(".icon03").mouseout(function () {
    $(".icon03").attr("src", "img/footer_icon03.png");
});
$(".icon04").mouseover(function () {
    $(".icon04").attr("src", "img/footer_icon04_h.png");
});
$(".icon04").mouseout(function () {
    $(".icon04").attr("src", "img/footer_icon04.png");
});
$(".icon05").mouseover(function () {
    $(".icon05").attr("src", "img/footer_icon05_h.png");
});
$(".icon05").mouseout(function () {
    $(".icon05").attr("src", "img/footer_icon05.png");
});
$(".icon06").mouseover(function () {
    $(".icon06").attr("src", "img/footer_icon06_h.png");
});
$(".icon06").mouseout(function () {
    $(".icon06").attr("src", "img/footer_icon06.png");
});
$(".icon07").mouseover(function () {
    $(".icon07").attr("src", "img/footer_icon07_h.png");
});
$(".icon07").mouseout(function () {
    $(".icon07").attr("src", "img/footer_icon07.png");
});
$(".icon08").mouseover(function () {
    $(".icon08").attr("src", "img/footer_icon08_h.png");
});
$(".icon08").mouseout(function () {
    $(".icon08").attr("src", "img/footer_icon08.png");
});

//彈窗置中程式
(function ($) {
    $.fn.extend({
        center: function (options) {
            var options = $.extend(
                {
                    // Default values
                    inside: window, // element, center into window
                    transition: 0, // millisecond, transition time
                    minX: 0, // pixel, minimum left element value
                    minY: 0, // pixel, minimum top element value
                    withScrolling: false, // booleen, take care of the scrollbar (scrollTop)
                    vertical: true, // booleen, center vertical
                    horizontal: true, // booleen, center horizontal
                },
                options
            );
            return this.each(function () {
                var props = {
                    position: "fixed",
                };
                if (options.vertical) {
                    var top =
                        ($(options.inside).height() - $(this).outerHeight()) / 2;
                    if (options.withScrolling)
                        top += $(options.inside).scrollTop() || 0;
                    top = top > options.minY ? top : options.minY;
                    $.extend(props, {
                        top: top + "px",
                    });
                }
                if (options.horizontal) {
                    var left =
                        ($(options.inside).width() - $(this).outerWidth()) / 2;
                    if (options.withScrolling)
                        left += $(options.inside).scrollLeft() || 0;
                    left = left > options.minX ? left : options.minX;
                    $.extend(props, {
                        left: left + "px",
                    });
                }
                if (options.transition > 0)
                    $(this).animate(props, options.transition);
                else $(this).css(props);
                return $(this);
            });
        },
    });
})(jQuery);
