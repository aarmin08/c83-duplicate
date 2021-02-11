var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "red";
width_of_line = 2;

width = screen.width;
height = screen.height;

new_height = screen.height - 300;
new_width = width - 70;

if (width < 992) {
    canvas.height = new_height;
    canvas.width = new_width;

    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    console.log("Touch Started!");
    color = document.getElementById("colorfield").value;
    width_of_line = document.getElementById("linewidthfield").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

    console.log(`last_x: ${last_position_of_x}`);
    console.log(`last_Y: ${last_position_of_y}`);
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){

    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;

    console.log(`last_x: ${current_x}`);
    console.log(`last_Y: ${current_y}`);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_x, current_y);

    ctx.stroke();

    last_position_of_x = current_x;
    last_position_of_y = current_y;
}

