//day section
var runTimer={
    isRunning:false,
    iteration:0,
    isImageIn:false,
    intCode:"",
    slowRevealOfOperators(){
        var plus=document.getElementsByClassName('DOBPlus');
        var line=document.getElementById('DOBDivisorLine');
        var btm=document.getElementById('eqBtm');
        var equal=document.getElementsByClassName('DOBEqualSign');
        var divisorFive=document.getElementById('DOBLastSq');
        var answers=document.getElementsByClassName('DOBDaySubmission');
        var avgDisplay=document.getElementById('eqRightSide');
        var yourAverage=document.getElementsByClassName('avgDayDisplay');
        var pleaseConfirm=document.getElementsByClassName('DOBConfirmDay');
        var confirmBtns=document.getElementsByClassName('DOBYesBtn');

        setTimeout(()=>{
            for (var i=0;i<plus.length;i++){
                plus[i].style.opacity='1';
            }
        },1000)
    
        setTimeout(()=>{
            line.style.opacity='1';
            btm.style.opacity='1';
        },2000);
        setTimeout(()=>{
            divisorFive.style.opacity='1';
        },3000)
        setTimeout(()=>{
            equal[0].style.opacity='1';
        },4000)
        setTimeout(()=>{
            //extract and calculate avg for first 5 entries
            var sum=0;
            for (var i=0;i<5;i++){
                sum+=parseInt(answers[i].textContent,10);
            }
            var avg=(sum/5).toFixed(0);
            avgDisplay.textContent=avg;
            avgDisplay.style.opacity='1';
        }, 6000)
        setTimeout(()=>{
            document.getElementById('DOBAnswersDisplay').style.height='180px';
            yourAverage[0].classList.remove('hidden');
        },8000)
        setTimeout(()=>{
            yourAverage[0].style.opacity='1';
        },9000)
        setTimeout(()=>{
    
            var sum=0;
            for (var i=0;i<5;i++){
                sum+=parseInt(answers[i].textContent,10);
            }
            var avg=(sum/5).toFixed(2);
            document.getElementById('DOBDecimalAvg').textContent=avg;
            document.getElementById('DOBDecimalAvg').style.opacity='1';
        },11000)
        setTimeout(()=>{
            document.getElementById('DOBAnswersDisplay').style.height='240px';
        },12000)
        setTimeout(()=>{
            pleaseConfirm[0].classList.remove('hidden');
            pleaseConfirm[0].style.opacity='1';
        },14000)
        setTimeout(()=>{
            confirmBtns[2].style.opacity='1';
        },15000)
        setTimeout(()=>{
            confirmBtns[1].style.opacity='1';
        },17000)
        setTimeout(()=>{
            confirmBtns[0].style.opacity='1';
        },19000)
    },
    start(){
        runTimer.iteration++;
        runTimer.isRunning=true;
        runTimer.intCode=setInterval(()=>{
            var time=parseInt(document.getElementById('DOBInputDayNumber').textContent,10);
            time=(time===31)?1:time+1;
            document.getElementById('DOBInputDayNumber').textContent=time;

            //move this somewhere else. Make it be its own function
            var images=document.getElementsByClassName('DOBInputDayPostureImage');
            if(!runTimer.isImageIn){
                images[0].setAttribute('src','/pictures/posture/posture2.png');
                images[1].setAttribute('src','/pictures/posture/posture2.png');
                runTimer.isImageIn=true;
            }else{
                images[0].setAttribute('src','/pictures/posture/posture3.png');
                images[1].setAttribute('src','/pictures/posture/posture3.png');
                runTimer.isImageIn=false;
            }
        },400/runTimer.iteration);
        document.getElementById('DOBDayStartBtn').textContent="Stop";
    },
    stop(){
        runTimer.isRunning=false;
        clearInterval(runTimer.intCode);
        document.getElementById('DOBDayStartBtn').textContent="Start";

        //if first stop, reveals submissions sections, delays, then reveals first submission
        //if !first stop, reveals each submission
        var slots=document.getElementsByClassName('DOBDaySubmission');
        if (runTimer.iteration===1){
            document.getElementById('DOBAnswersDisplay').style.opacity='1';
            setTimeout(()=>{
                slots[0].textContent=document.getElementById('DOBInputDayNumber').textContent;
                slots[0].style.opacity='1';
            },700)
        }else{
            for (var i=0;i<slots.length;i++){
                if (slots[i].textContent==""){
                    slots[i].textContent=document.getElementById('DOBInputDayNumber').textContent;
                    slots[i].style.opacity='1';
                    break;
                }
            }
        }

        //on last itr, freeze start/stop btn and start reveal show
        if (runTimer.iteration===5){
            document.getElementById('DOBDayStartBtn').textContent="Done";
            document.getElementById('DOBDayStartBtn').disabled=true;
            runTimer.slowRevealOfOperators();
        }

        document.getElementById('DOBInputDayNumber').textContent='1';
    },
    toggle(){
        if (runTimer.isRunning){
            runTimer.stop();
        }else{
            runTimer.start();
        }
    }
}

export default runTimer;