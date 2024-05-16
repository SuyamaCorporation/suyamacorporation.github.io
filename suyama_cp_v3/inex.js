// 変数定義部分
document.addEventListener('DOMContentLoaded', function () {
    const mainTag = document.querySelector('main');
    const header = document.querySelector('header');
    const selectElement = document.getElementById('plan-select');
    const headings = document.querySelectorAll('.tab h2');
    const planWrappers = document.querySelectorAll('.plan-wrapper');
    const planElements = document.querySelectorAll('.plan');

    // イベントハンドラ定義部分
    window.addEventListener('scroll', handleScroll);

    headings.forEach(heading => {
        heading.addEventListener('click', handleHeadingClick);
    });

    // 初期選択状態に対して処理を実行するためにchangeイベントを発火

    if (mainTag.classList.contains('plan')) {
        const event = new Event('change');
        selectElement.dispatchEvent(event);
        selectElement.addEventListener('change', handleSelectChange);

    }

    handleScroll();

    // 関数定義部分
    function handleScroll() {
        var scrollPosition = window.scrollY;

        // mainタグのクラスリストが空かどうかを確認
        if (mainTag.classList.length === 0) {
            // 画面スクロールが80vh分行ったらonクラスを追加
            if (scrollPosition > window.innerHeight * 0.8) {
                header.classList.add('on');
            } else {
                header.classList.remove('on');
            }
        } else {
            header.classList.add('on');
        }
    }

    function handleSelectChange() {
        const selectedValue = selectElement.value; // 0. 変更されたセレクトボックスのvalueを取得する

        planElements.forEach(function (element) {
            element.classList.remove('on'); // 2. onクラスが付与されている要素の、onクラスを除去する
        });

        // 3. 1で取得した要素の中から、0で取得したvalueに一致するクラスを持つ要素にonクラスを付与する
        const activeElement = document.querySelector(`.plan.${selectedValue}`);
        if (activeElement) {
            activeElement.classList.add('on');
        }
    }

    function handleHeadingClick() {
        const clickedClass = this.classList[0]; // 1. クリックしたh2タグのclassを取得する

        // 2. クリックしたh2タグにoffクラスが付与されていたらoffクラスを除去し、
        // offクラスがついていないh2タグにoffクラスを付与する
        headings.forEach(h => {
            if (h.classList.contains('off')) {
                h.classList.remove('off');
            } else if (h !== this) {
                h.classList.add('off');
            }
        });

        // 3. div.plan-wrapperを取得する（既にplanWrappersで取得済み）
        // 4. 1で取得したclass名と同じものが付与されているdiv.plan-wrapperのoffクラスを除去する
        // 5. 1で取得したclass名が付与されていないdiv.plan-wrapperに対してoffクラスを付与する
        planWrappers.forEach(wrapper => {
            if (wrapper.classList.contains(clickedClass)) {
                wrapper.classList.remove('off');
            } else {
                wrapper.classList.add('off');
            }
        });
    }
});