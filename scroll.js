window.addEventListener('scroll', function () {
    ScrollAnimation();
});

function ScrollAnimation() {
    // classが"animate"である要素を取得
    var elements = document.querySelectorAll('.animate');

    // ウィンドウの高さを取得
    var windowHeight = window.innerHeight;

    // オフセットの固定値を設定
    var offset = 100; // 例: 100px
    // モバイル版の場合はoffsetを無効に

    // 要素ごとに処理
    elements.forEach(function (element) {
        // offset値の設定
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // モバイル・スマートフォンの場合の処理
            offset = SettingOffset(element);
        }
        // 要素の位置とサイズを取得
        var elementRect = element.getBoundingClientRect();

        // 要素の中央が画面の中央にオフセット分ずれているかどうかをチェック
        var isElementInCenter = (elementRect.top + elementRect.height / 2 >= offset) &&
            (elementRect.bottom - elementRect.height / 2 <= windowHeight - offset);

        // 要素が画面の中央に来た場合
        if (isElementInCenter) {
            // data-animate属性からクラス名を取得
            var animateClass = element.getAttribute('data-animate');
            // クラスを要素に追加
            element.classList.add(animateClass);

            // delay設定を取得
            var delayValue = element.getAttribute('data-delay');
            if (delayValue) {
                // animation-delayプロパティに値をセット
                element.style.animationDelay = delayValue;
            }


            // 一度だけ実行するためにクラス"animate"を削除
            element.classList.remove('animate');
        }
    });
}

function SettingOffset(element) {
    // 要素の高さを取得
    var elementHeight = element.clientHeight;

    // 画面の高さを取得
    var windowHeight = window.innerHeight;

    // 要素の高さが画面の高さよりも大きいかどうかを確認
    if (elementHeight > windowHeight) {
        // 要素の高さの半分の数値を取得
        var halfElementHeight = elementHeight / 3;
        return (halfElementHeight) * -1;
    } else {
        return 0;
    }
}