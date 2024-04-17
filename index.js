document.addEventListener("DOMContentLoaded", function () {
    var projectElements = document.querySelectorAll('.project');
    projectElements.forEach(function (element) {
        TweenMax.set(element, { rotationY: 0, rotationX: 0, rotationZ: 0, transformPerspective: 1000 });

        var mousemoveHandler = function (e) {
            var rect = element.getBoundingClientRect();
            var offsetX = e.clientX - rect.left; // マウスポインターの要素内の相対的なX座標
            var offsetY = e.clientY - rect.top; // マウスポインターの要素内の相対的なY座標
            var px = offsetX / element.offsetWidth;
            var py = offsetY / element.offsetHeight;
            var xx = -10 + (20 * px);
            var yy = 10 - (20 * py);
            TweenMax.to(element, 0.5, { rotationY: xx, rotationX: yy, rotationZ: 0, transformPerspective: 1000, ease: Quad.easeOut });
        };

        var mouseoutHandler = function () {
            TweenMax.to(element, 0.5, { rotationY: 0, rotationX: 0, rotationZ: 0, transformPerspective: 1000, ease: Quad.easeOut });
        };

        element.addEventListener('mouseover', function () {
            element.addEventListener('mousemove', mousemoveHandler);
        });

        element.addEventListener('mouseout', function () {
            element.removeEventListener('mousemove', mousemoveHandler);
            mouseoutHandler();
        });
    });
});
