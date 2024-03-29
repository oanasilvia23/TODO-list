

$(document).ready(function(){

	var ctx = document.querySelector("canvas").getContext("2d"), dashLen = 220, dashOffset = dashLen, speed = 9, txt = "Mouseover --->", x = 10, i = 0;

    ctx.font = "50px Scriptina, cursive, TSCu_Comic, sans-serif";
    ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 2 / 3;
    ctx.strokeStyle = ctx.fillStyle = "#8b0d0d";

    (function loop() {
        ctx.clearRect(x, 0, 60, 150);
        ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
        dashOffset -= speed;                                         // reduce dash length
        ctx.strokeText(txt[i], x, 90);                               // stroke letter

        if (dashOffset > 0) requestAnimationFrame(loop);             // animate
        else {
            ctx.fillText(txt[i], x, 90);                               // fill final letter
            dashOffset = dashLen;                                      // prep next char
            x += ctx.measureText(txt[i++]).width + ctx.lineWidth *1;
            ctx.setTransform(1, 0, 0, 1, 0, 3 * 1);        // random y-delta
            ctx.rotate(Math.random() * 0.005);                         // random rotation
            if (i < txt.length) requestAnimationFrame(loop);
        }
           
    })();

});