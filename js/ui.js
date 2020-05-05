window.onload = function () {

};
$(document).ready(function () {
    $("header nav ul li").click(function () {
        $(this).toggleClass("active");
    });
    $("#menu_button").click(function () {
        $(this).toggleClass("active");
        $('header nav').toggleClass("active");
        $('header #language').toggleClass("active");
        $('body').toggleClass("active");
    });
    $("#goCompany,#goLaboratory,#goBrand,#goFooter").click(function () {
        $('#menu_button').toggleClass("active");
        $('header nav').toggleClass("active");
        $('header #language').toggleClass("active");
        $('body').toggleClass("active");
    });

    $("#information .list .item").click(function () {
        $(this).toggleClass("active");
    })

    $("#information .open").click(function () {
        $("#information .list").toggleClass("active");
        $("#information .open").toggleClass("active");
    })

    $("#media .list .item").click(function () {
        $(this).toggleClass("active");
    })

    $("#media .open").click(function () {
        $("#media .list").toggleClass("active");
        $("#media .open").toggleClass("active");
    })
    

    $('#company .slick').slick({
        arrows: false,
        autoplay: true,
        dots: true,
    });

    $('#laboratory .big .slick').slick({
        autoplay: true,
        autoplay: false,
        dots: false,
        nextArrow: '#laboratory .big .arrow .next',
        prevArrow: '#laboratory .big .arrow .prev'
    });

    var slideTo = 135
    var scroll = 90

    if (screen.width <= 1199) {
        slideTo = 56
        scroll = 56
    }
    if (screen.width <= 768) {
        slideTo = 63
        scroll = 63
    }
    else {
        slideTo = 135
        scroll = 90
    }

    $('#goTop').click(function () {
        $('html,body').animate({
            scrollTop: '0px'
        }, 800);
    });

    $('#scroll').click(function () {
        $('html,body').animate({
            scrollTop: $('#mission').offset().top - 90
        }, 800);
    });

    $('#goCompany').click(function () {
        $('html,body').animate({
            scrollTop: $('#company').offset().top - slideTo
        }, 800);
    });
    $('#goLaboratory').click(function () {
        $('html,body').animate({
            scrollTop: $('#laboratory').offset().top - slideTo
        }, 800);
    });
    $('#goBrand').click(function () {
        $('html,body').animate({
            scrollTop: $('#brand').offset().top - slideTo
        }, 800);
    });

    $('#goFooter').click(function () {
        $('html,body').animate({
            scrollTop: $('footer').offset().top - slideTo
        }, 800);
    });

    var wow = new WOW({
        boxClass: 'wow', // 要套用WOW.js縮需要的動畫class(預設是wow)
        animateClass: 'animated', // 要"動起來"的動畫(預設是animated, 因此如果你有其他動畫library要使用也可以在這裡調整)
        offset: 50, // 距離顯示多遠開始顯示動畫 (預設是0, 因此捲動到顯示時才出現動畫)
        mobile: true, // 手機上是否要套用動畫 (預設是true)
        live: true, // 非同步產生的內容是否也要套用 (預設是true, 非常適合搭配SPA)
        callback: function (box) {
            // 當每個要開始時, 呼叫這裡面的內容, 參數是要開始進行動畫特效的element DOM
        },
        scrollContainer: null // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
    });
    wow.init();

});