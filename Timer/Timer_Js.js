let CountDownDate=new Date(2023,9,12,10,33,21)
setInterval(function(){
    let DateTimeNow=new Date().getTime()
    let Distance=CountDownDate-DateTimeNow
    
    if(Distance>0){
        let daytime=1000*60*60*24
        let hourtime=1000*60*60
        let minutetime=1000*60
        let days=Math.floor(Distance/daytime)
        let hours=Math.floor((Distance%daytime)/hourtime)
        let minutes=Math.floor((Distance%hourtime)/minutetime)
        let seconds=Math.floor((Distance%minutetime)/1000)
        document.getElementById("days").innerHTML=(days<10)?'0'+days:days
        document.getElementById("hours").innerHTML=(hours<10)?'0'+hours:hours
        document.getElementById("minutes").innerHTML=(minutes<10)?'0'+minutes:minutes
        document.getElementById("seconds").innerHTML=(seconds<10)?'0'+seconds:seconds
    }else{
        clearInterval(x);
        document.getElementById("main_box").innerHTML="مهلت تخفیف به پایان رسیده است"
    }
},1000)