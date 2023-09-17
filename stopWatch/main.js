const mainTimer = document.querySelector('.stop-watch')
const submitBtn = document.querySelector('.submit-btn')
const resetBtn = document.querySelector('.reset-btn')
const lapBtn = document.querySelector('.lap-btn')
const lapItems = document.querySelector('.lap-items')

let interval;
let second = 0;
let minute = 0;
let hour = 0;
submitBtn.addEventListener('click',function(){
    if(submitBtn.textContent == 'Stop'){
        clearInterval(interval);
        submitBtn.textContent = 'Start';
    }
    else{
        second++;
        mainTimer.textContent = getTemplate(hour,minute,second);
        interval = setInterval(runStopWatch,1000);
        submitBtn.textContent = 'Stop';
    }
})

resetBtn.addEventListener('click',function(){
    clearInterval(interval)
    submitBtn.textContent = 'Start';
    second = 0;
    minute = 0;
    hour = 0;
    mainTimer.textContent = getTemplate(0,0,0);
    lapItems.innerHTML = ''
})

lapBtn.addEventListener('click',function(){
    if(submitBtn.textContent == 'Stop'){
        lapItems.innerHTML += `<div class="lap">${getTemplate(hour,minute,second)}</div>`
    }
})

function runStopWatch(){
    second++;
    if(second == 60){
        minute++;
        second = 0;
    }
    if(minute == 60){
        hour++;
        minute = 0;
    }
    mainTimer.textContent = getTemplate(hour,minute,second);
}

function getTemplate(h,m,s){
    return `${h < 10?'0':''}${h}:${m < 10?'0':''}${m}:${s < 10?'0':''}${s}`;
}