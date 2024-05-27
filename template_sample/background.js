// シーン、カメラ、レンダラーの設定
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// カメラの位置を調整
camera.position.z = 5;
// 背景色を白色に設定
renderer.setClearColor(0xffffff);

// 異なる円形のオブジェクトを作成する関数
function createCircle(radius, color) {
    const geometry = new THREE.CircleGeometry(radius, 32);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const circle = new THREE.Mesh(geometry, material);
    scene.add(circle);
    return circle;
}

// オブジェクトの設定
const objects = [];
const settings = [
    { radius: 0.9, color: 0x0051d8, speed: 0.01 },
    { radius: 0.3, color: 0x8bdfff, speed: 0.02 }
];

// 複数の円形オブジェクトを作成
for (let i = 0; i < 10; i++) {
    const setting = settings[i % 2];
    const circle = createCircle(setting.radius, setting.color);
    circle.userData = {
        speedX: (Math.random() - 0.5) * setting.speed,
        speedY: (Math.random() - 0.5) * setting.speed
    };
    circle.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, 0);
    objects.push(circle);
}

// アニメーション関数
function animate() {
    requestAnimationFrame(animate);

    // オブジェクトを更新
    objects.forEach(obj => {
        obj.position.x += obj.userData.speedX;
        obj.position.y += obj.userData.speedY;

        // 画面外に出ないようにする
        if (obj.position.x > 5 || obj.position.x < -5) obj.userData.speedX *= -1;
        if (obj.position.y > 5 || obj.position.y < -5) obj.userData.speedY *= -1;
    });

    renderer.render(scene, camera);
}

animate();

// ウィンドウリサイズ対応
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});