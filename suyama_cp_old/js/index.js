$(function () {
    Initialize();
    $('nav ul li a').on('cliick', ScrollView);
    $('.menu_btn').on('click', ToggleNav);
    $('nav ul li a').on('click', ToggleNav);
    function Initialize() {
        let ua = navigator.userAgent;
        if (
            ua.indexOf('iPhone') > 0 ||
            ua.indexOf('iPad') > 0 ||
            ua.indexOf('Android') > 0
        ) {
            $('.animate').each(function () {
                $(this).attr({
                    'data-durations': '1s',
                    'data-scrolla-offset': '100',
                    'data-delay': '0'
                });
            })
        } else {
        }
        $('.animate').scrolla({
            mobile: true,
            once: true
        });
    }
    function ScrollView() {
        $($(this).attr('data-scroll')).scrollIntoView({
            behaivor: "smooth",
            block: "start"
        });
    }
    function ToggleNav() {
        if ($('nav').hasClass('on')) {
            $('nav').removeClass('on');
            setTimeout(function () {
                $('nav').css('display', 'none');
            }, 1000);
            document.getElementById("menu_btn").innerHTML = "Menu";
        } else {
            $('nav').css('display', 'block');
            setTimeout(function () {
                $('nav').addClass('on');
            }, 2);
            document.getElementById("menu_btn").innerHTML = "Close";
        }
    }
    function CloseNav() {
        $('nav').removeClass('on');
        $('.menu_btn').removeClass('on');
    }

});