canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="";
var last_position_x,last_position_y;

color="black";
width_line=1;

canvas.addEventListener("mousedown",My_mousedown);

function My_mousedown(e){
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",My_mouseup)
function My_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",My_mouseleave)
function My_mouseleave(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",My_mousemove);
function My_mousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;

    if(mouseEvent="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;

        console.log("Last position of mouse X and Y");
        console.log("x = "+last_position_x+" y = "+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);

        console.log("current position of mouse X and Y");
        console.log("x = "+current_position_x+" y = "+current_position_y);
        ctx.
        7lineTo(current_position_x,current_position_y);
        ctx.stroke();
    }

    last_position_x=current_position_x;
    last_position_y=current_position_y;
}