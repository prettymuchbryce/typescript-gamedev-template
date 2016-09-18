PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

var renderer:PIXI.WebGLRenderer|PIXI.CanvasRenderer = PIXI.autoDetectRenderer(800, 600, {
    backgroundColor: 0x9394FE
});

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();
var texture = PIXI.Texture.fromImage('img/smiley.png');
var sprites:PIXI.Sprite[] = [];
stage.scale = new PIXI.Point(4, 4);

function addSmileys() {
    for (var i:number = 0; i < 100; i++) {
        var sprite = new PIXI.Sprite(texture);
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
        stage.addChild(sprite);
        sprites.push(sprite);
        sprite.rotation = Math.random() * 360;
    }
}

function placeSmileys() {
    for (var i:number = 0; i < sprites.length; i++) {
        sprites[i].x = Math.round(Math.random() * window.innerWidth/4);
        sprites[i].y = Math.round(Math.random() * window.innerHeight/4);
    }
}

function animate(step:number) {
    requestAnimationFrame(animate);
    for (var i:number = 0; i < sprites.length; i++) {
        sprites[i].rotation += 0.1;
    }
    renderer.render(stage);
}

function resize() {
    var resizeTimeout:number = setTimeout(function() {
        var doResize:Function = function() {
            var height:number = window.innerHeight;
            var width:number =  window.innerWidth;
            renderer.resize(width, height);
            resizeTimeout = undefined;
            placeSmileys();
        }
        doResize();
    }, 30);
}


addSmileys()
placeSmileys();
animate(0);

//Setup Resize
window.addEventListener('resize', resize);
window.onorientationchange = resize;

resize();