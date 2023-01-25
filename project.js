const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");
const circle4 = document.getElementById("circle4");

let x = 900;

function drawcircle(circle, color, x) {
    circle.height = 150;
    circle.width = 1000;

    const ctx = circle.getContext("2d");
    ctx.lineWidth = 1;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(75, 75, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    const cta = circle.getContext("2d");
    cta.lineWidth = 1;
    cta.beginPath();
    cta.fillStyle = "black";
    cta.moveTo(x, 78);
    cta.lineTo(x + 30, 66);
    cta.lineTo(x + 30, 75);
    cta.lineTo(x + 80, 75);
    cta.lineTo(x + 80, 82);
    cta.lineTo(x + 30, 82);
    cta.lineTo(x + 30, 90);
    cta.lineTo(x, 78);
    cta.fill();
    cta.stroke();
}

drawcircle(circle1, "yellow", x);
drawcircle(circle2, "blue", x);
drawcircle(circle3, "red", x);
drawcircle(circle4, "green", x);

function onClickCircle1() {
    x -= 5;
    let uniqueId1 = setTimeout(onClickCircle1, 5);
    if (x >= 115) {
        drawcircle(circle1, "yellow", x);
        if (x === 115) {
            drawcircle(circle1, "grey", 115);
            clearTimeout(uniqueId1);
            x = 900;
        }
    }
}

function onClickCircle2() {
    x -= 5;
    let uniqueId2 = setTimeout(onClickCircle2, 5);
    if (x >= 115) {
        drawcircle(circle2, "blue", x);
        if (x === 115) {
            x = 900;
            drawcircle(circle2, "grey", 115);
            clearTimeout(uniqueId2);
            x = 900;
        }
    }
}

function onClickCircle3() {
    x -= 5;
    let uniqueId3 = setTimeout(onClickCircle3, 5);
    if (x >= 115) {
        drawcircle(circle3, "red", x);
        if (x === 115) {
            x = 900;
            drawcircle(circle3, "grey", 115);
            clearTimeout(uniqueId3);
            x = 900;
        }
    }
}

function onClickCircle4() {
    x -= 5;
    let uniqueId4 = setTimeout(onClickCircle4, 5);
    if (x >= 115) {
        drawcircle(circle4, "green", x);
        if (x === 115) {
            x = 900;
            drawcircle(circle4, "grey", 115);
            clearTimeout(uniqueId4);
            x = 900;
        }
    }
}

function onClickReset() {
    drawcircle(circle1, "yellow", 900);
    drawcircle(circle2, "blue", 900);
    drawcircle(circle3, "red", 900);
    drawcircle(circle4, "green", 900);
}