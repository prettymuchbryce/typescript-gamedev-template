PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

let renderer: PIXI.WebGLRenderer|PIXI.CanvasRenderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
    backgroundColor: 0x9394FE,
});

document.body.appendChild(renderer.view);

let stage = new PIXI.Container();
let texture = PIXI.Texture.fromImage("img/smiley.png");
let sprites: PIXI.Sprite[] = [];
stage.scale = new PIXI.Point(4, 4);

function addSmileys() {
    for (let i: number = 0; i < 100; i++) {
        const sprite = new PIXI.Sprite(texture);
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
        stage.addChild(sprite);
        sprites.push(sprite);
        sprite.rotation = Math.random() * 360;
    }
}

function placeSmileys() {
    for (let i = 0; i < sprites.length; i++) {
        sprites[i].x = Math.round(Math.random() * window.innerWidth / 4);
        sprites[i].y = Math.round(Math.random() * window.innerHeight / 4);
    }
}

function animate(step: number) {
    requestAnimationFrame(animate);
    for (let i: number = 0; i < sprites.length; i++) {
        sprites[i].rotation += 0.1;
    }
    renderer.render(stage);
}

function resize() {
    let resizeTimeout: number = setTimeout(() => {
        const doResize: Function = () => {
            const height: number = window.innerHeight;
            const width: number =  window.innerWidth;
            renderer.resize(width, height);
            resizeTimeout = undefined;
            placeSmileys();
        };
        doResize();
    }, 500);
}

addSmileys();
placeSmileys();
animate(0);

// Setup Resize
window.addEventListener("resize", resize);
window.onorientationchange = resize;

resize();
