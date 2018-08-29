// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//background
var terrainPattern;

var img = new Image();
img.onload = function () {
    img.src = 'img/terrain.png';
};

terrainPattern = ctx.createPattern(img, 'repeat');
/*
function init() {

    lastTime = Date.now();
    main();
}
*/
// The main game loop
var lastTime;
function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;
    terrainPattern = ctx.createPattern(img, 'repeat');
    render();
    img.onload = function () {
        img.src = 'img/terrain.png';
    };

    lastTime = now;
    requestAnimFrame(main);
};

//update callback main
var requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();
/*
function render() {
    ctx.fillStyle = terrainPattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}*/

