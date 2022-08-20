// app_28

const circle = document.querySelector('body #container .circle');
const circleMoveBlur = document.querySelector('body #container .circleMoveBlur');
document.addEventListener('mousemove',function(e){
    circle.style.cssText = `top:${e.clientY}px;left:${e.clientX}px;`;
    const leftMove = `${e.clientX}px`;
    const topMove = `${e.clientY}px`;
    document.documentElement.style.setProperty('--leftMove',leftMove);
    document.documentElement.style.setProperty('--topMove',topMove);
});