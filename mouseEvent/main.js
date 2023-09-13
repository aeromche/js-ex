const circle = document.getElementsByTagName('div')[0]

addEventListener('mousemove',function(event){
   const mouseX = event.clientX / 100;
   const mouseY = event.clientY / 100;
   console.log(mouseX,mouseY);
   circle.style.transform = `translate(${-mouseX}px,${-mouseY}px)`;
})

circle.addEventListener('mouseenter',function(){
    document.body.style.background = 'black'  
})

circle.addEventListener('mouseleave',function(){
    document.body.style.background = 'white';
})