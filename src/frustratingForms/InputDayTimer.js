//day section
var runTimer={
    isRunning:false,
    iteration:0,
    isImageIn:false,
    intCode:"",
    dancingMenIntervalCode:0,
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
    hideDancingMen(){
        const men=document.getElementsByClassName('DOBInputDayPostureImage');
        for (var i=0;i<men.length;i++){
            men[i].style.opacity='0';
        }
    },
    spawnManOnLeftEdge(){
        const newMan=document.createElement('img');
        const magic8Ball=(Math.random()).toFixed(0);
        if (magic8Ball){
            newMan.setAttribute('src',"/pictures/posture/posture4.png");
        }else{
            newMan.setAttribute('src',"/pictures/posture/posture2.png");
        }

        newMan.classList.add('DOBInputDayPostureImage');
        newMan.classList.add('rightMan');
        document.getElementById('DOBAlley').append(newMan);
        newMan.style.left='-10px';
    },
    spawnManOnRightEdge(){
        const newMan=document.createElement('img');
        const magic8Ball=(Math.random()).toFixed(0);
        if (magic8Ball){
            newMan.setAttribute('src',"/pictures/posture/posture4.png");
        }else{
            newMan.setAttribute('src',"/pictures/posture/posture2.png");
        }

        newMan.classList.add('DOBInputDayPostureImage');
        newMan.classList.add('leftMan');
        document.getElementById('DOBAlley').append(newMan);
        newMan.style.left='330px';
    },
    showDancingMen(){
        const thrustIn="/pictures/posture/posture4.png";
        const thrustOut="/pictures/posture/posture2.png";
        if (runTimer.iteration===3){

            const rightMan=document.getElementById('firstRightMan');
            rightMan.style.opacity='1';
            runTimer.dancingMenIntervalCode = setInterval(()=>{
            rightMan.setAttribute('src', (rightMan.getAttribute('src')===thrustIn)?thrustOut:thrustIn );
            },300);
        };
        if (runTimer.iteration===2){

            //setting both men to thrustIn pos
            const men=document.getElementsByClassName("DOBInputDayPostureImage");
            for (var i=0;i<men.length;i++){
                men[i].setAttribute('src',thrustIn);
            }

            runTimer.dancingMenIntervalCode = setInterval(()=>{

                for (var i=0;i<men.length;i++){
                    men[i].style.opacity='1';
                    men[i].setAttribute('src', (men[i].getAttribute('src')===thrustIn)?thrustOut:thrustIn )
                }

                },300)
        }
        if (runTimer.iteration===1){
            const allMen=document.getElementsByClassName('DOBInputDayPostureImage');
            
            setInterval(()=>{
                runTimer.spawnManOnLeftEdge();
                runTimer.spawnManOnRightEdge();
            },1000)

            runTimer.dancingMenIntervalCode = setInterval(()=>{
                

                for (var i=0;i<allMen.length;i++){
                    var xLoc=allMen[i].offsetLeft;
                    allMen[i].style.opacity='1';
                    if (allMen[i].classList.contains('rightMan')){
                        if (parseInt(xLoc,10)===330){
                            allMen[i].classList.remove('rightMan');
                            allMen[i].classList.add('leftMan');
                            continue;
                        }
                        xLoc+=10;
                        allMen[i].style.left=xLoc+'px';
                    }else if (allMen[i].classList.contains('leftMan')){
                        if (parseInt(xLoc,10)===-10){
                            allMen[i].classList.remove('leftMan');
                            allMen[i].classList.add('rightMan');
                            continue;
                        }
                        xLoc-=10;
                        allMen[i].style.left=xLoc+'px';
                    }

                    //change his hip placement
                    allMen[i].setAttribute('src', (allMen[i].getAttribute('src')===thrustIn)?thrustOut:thrustIn )
                }
                },100)
        }
    },
    start(){
        runTimer.iteration++;
        runTimer.isRunning=true;
        runTimer.intCode=setInterval(()=>{
            var time=parseInt(document.getElementById('DOBInputDayNumber').textContent,10);
            time=(time===31)?1:time+1;
            document.getElementById('DOBInputDayNumber').textContent=time;
        },400/runTimer.iteration);
        document.getElementById('DOBDayStartBtn').textContent="Stop";

        runTimer.showDancingMen();
    },
    stop(){
        runTimer.isRunning=false;
        clearInterval(runTimer.intCode);
        clearInterval(runTimer.dancingMenIntervalCode);
        runTimer.hideDancingMen();
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
                if (slots[i].textContent===""){
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