import postureMan2 from '../assets/pictures/posture/posture2.png'
import postureMan4 from '../assets/pictures/posture/posture4.png'

//day section
var runTimer={
    isRunning:false,
    iteration:0,
    intCode:"",
    lastMidAlleySpawned:0,
    spawnIntervalCodes:[],
    dancingMenIntervalCodes:[],
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
        const men=document.getElementsByTagName('img');
        for (var i=0;i<men.length;i++){
            men[i].style.opacity='0';
        }
    },
    spawnLargeAlley(){

        //stops large men spawn after 16 spawned men
        var largeMen=document.getElementsByClassName('largeMan');
        if (largeMen.length>=16){
            clearInterval(runTimer.spawnIntervalCodes[3]);
            console.log("large spawn stopped");
            return;
        }

        const topMan=document.createElement('img');
        const bottomMan=document.createElement('img');
        const magic8Ball=(Math.random()).toFixed(0);
        if (magic8Ball){
            topMan.setAttribute('src',postureMan4);
            bottomMan.setAttribute('src',postureMan4);
        }else{
            topMan.setAttribute('src',postureMan2);
            bottomMan.setAttribute('src',postureMan2);
        }
        topMan.classList.add('largeMan');
        bottomMan.classList.add('largeMan');

        if(largeMen.length%4===0){
            topMan.classList.add('rightMan');
            topMan.style.left='-10px';
            bottomMan.classList.add('leftMan');
            bottomMan.style.left='1400px';
        }else{
            topMan.classList.add('leftMan');
            topMan.style.left='1400px';
            bottomMan.classList.add('rightMan');
            bottomMan.style.left='-10px';
        }
        
        document.getElementById('topLargeAlley').append(topMan);
        document.getElementById('bottomLargeAlley').append(bottomMan);

        

       
    },
    spawnMediumAlley(){

        const midMen=document.getElementsByClassName('midMan');
        if (midMen.length>100){
            clearInterval(runTimer.spawnIntervalCodes[2]);
            console.log("mid spawn stopped");
            return;
        }
        
        for (var i=0;i<6;i++ ){
            const num=(Math.random()).toFixed(1);
            setTimeout(()=>{
                const alleys=document.getElementsByClassName('midAlley');
                const man=document.createElement('img');
                const magic8Ball=(Math.random()).toFixed(0);
                if (magic8Ball){
                    man.setAttribute('src',postureMan4);
                }else{
                    man.setAttribute('src',postureMan2);
                }
                man.classList.add('midMan');
                
                if (Date.now()%2===0){
                    man.classList.add('leftMan');
                    man.style.left='1460px';
                }else{
                    man.classList.add('rightMan');
                    man.style.left='-10px';
                }

                alleys[runTimer.lastMidAlleySpawned].appendChild(man);
                runTimer.lastMidAlleySpawned++;
                if (runTimer.lastMidAlleySpawned===6){
                    runTimer.lastMidAlleySpawned=0;
                }
            },num*3000)
        }

    },
    spawnManOnLeftEdge(name){

        if (name==='littleMan'){
            const allLittleMen=document.getElementsByClassName('littleMan');
            if (allLittleMen.length>5){
                clearInterval(runTimer.spawnIntervalCodes[1]);
                console.log("little spawn stopped");
                return;
            }
        }
        if (name==='tinyMan'){
            const allLittleMen=document.getElementsByClassName('tinyMan');
            if (allLittleMen.length>15){
                clearInterval(runTimer.spawnIntervalCodes[0]);
                console.log("tiny spawn stopped");
                return;
            }
        }

        const newMan=document.createElement('img');
        const magic8Ball=(Math.random()).toFixed(0);
        if (magic8Ball){
            newMan.setAttribute('src',postureMan4);
        }else{
            newMan.setAttribute('src',postureMan2);
        }

        newMan.classList.add(name);
        newMan.classList.add('rightMan');
        document.getElementById('DOBAlley').append(newMan);
        newMan.style.left='-10px';
    },
    spawnManOnRightEdge(name){

        if (name==='littleMan'){
            const allLittleMen=document.getElementsByClassName('littleMan');
            if (allLittleMen.length>8){
                clearInterval(runTimer.spawnIntervalCodes[1]);
                console.log("little spawn stopped");
                return;
            }
        }
        if (name==='tinyMan'){
            const allLittleMen=document.getElementsByClassName('tinyMan');
            if (allLittleMen.length>20){
                clearInterval(runTimer.spawnIntervalCodes[0]);
                console.log("tiny spawn stopped");
                return;
            }
        }

        const newMan=document.createElement('img');
        const magic8Ball=(Math.random()).toFixed(0);
        if (magic8Ball){
            newMan.setAttribute('src',postureMan4);
        }else{
            newMan.setAttribute('src',postureMan2);
        }

        newMan.classList.add(name);
        newMan.classList.add('leftMan');
        document.getElementById('DOBAlley').append(newMan);
        newMan.style.left='330px';
    },
    showDancingMen(){
        const thrustIn=postureMan4;
        const thrustOut=postureMan2;
        if (runTimer.iteration===2){

            const rightMan=document.getElementById('firstRightMan');
            rightMan.style.opacity='1';
            const tinyMenDancingCode = setInterval(()=>{
                const rightMan=document.getElementById('firstRightMan');
                var xLoc=rightMan.offsetLeft;
                if (rightMan.classList.contains('rightMan')){
                    if (parseInt(xLoc,10)===330){
                        rightMan.classList.remove('rightMan');
                        rightMan.classList.add('leftMan');
                        return;
                    }
                    xLoc+=10;
                    rightMan.style.left=xLoc+'px';
                }else if (rightMan.classList.contains('leftMan')){
                    if (parseInt(xLoc,10)===-10){
                        rightMan.classList.remove('leftMan');
                        rightMan.classList.add('rightMan');
                        return;
                    }
                    xLoc-=10;
                    rightMan.style.left=xLoc+'px';
                }

                //change his hip placement
                rightMan.setAttribute('src', (rightMan.getAttribute('src')===thrustIn)?thrustOut:thrustIn )
            },100)
            
            runTimer.dancingMenIntervalCodes.push(tinyMenDancingCode);






        };
        if (runTimer.iteration===3){

            //setting both men to thrustIn pos
            const rightMan=document.getElementById('firstRightMan');
            rightMan.style.left='100px';
            const men=document.getElementsByClassName("tinyMan");
            for (var i=0;i<men.length;i++){
                men[i].setAttribute('src',thrustIn);
                men[i].style.opacity='1';
            }

            const tinyMenDancingCode = setInterval(()=>{
                var allMen=document.getElementsByClassName('tinyMan');
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
            
            runTimer.dancingMenIntervalCodes.push(tinyMenDancingCode);
            

        };
        if (runTimer.iteration===4){
            const rightMan=document.getElementById('firstRightMan');
            rightMan.style.left='100px';
            const leftMan=document.getElementById('firstLeftMan');
            leftMan.style.left='210px';
            
            const tinyMenSpawnCode= setInterval(()=>{
                var num=(Math.random()).toFixed(1);
                setTimeout(()=>{
                runTimer.spawnManOnRightEdge("tinyMan");
                },num*1000)

                num=(Math.random()).toFixed(1);
                setTimeout(()=>{
                runTimer.spawnManOnLeftEdge("tinyMan");
                },num*1000)
                
            },1000)

            const tinyMenDancingCode = setInterval(()=>{
                var allMen=document.getElementsByClassName('tinyMan');
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
            
            runTimer.spawnIntervalCodes.push(tinyMenSpawnCode);
            runTimer.dancingMenIntervalCodes.push(tinyMenDancingCode);
        
        }
        if (runTimer.iteration===5){

        //spawns tiny men 
        const tinyMenSpawnCode= setInterval(()=>{
            var num=(Math.random()).toFixed(1);
            setTimeout(()=>{
            runTimer.spawnManOnRightEdge("tinyMan");
            },num*1000)

            num=(Math.random()).toFixed(1);
            setTimeout(()=>{
            runTimer.spawnManOnLeftEdge("tinyMan");
            },num*1000)
            
        },1000)

        const tinyMenDancingCode = setInterval(()=>{
            var allMen=document.getElementsByClassName('tinyMan');
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
        
        runTimer.spawnIntervalCodes.push(tinyMenSpawnCode);
        runTimer.dancingMenIntervalCodes.push(tinyMenDancingCode);

        //spawns little men
        const littleMenSpawnCode= setInterval(()=>{
            var num=(Math.random()).toFixed(1);
            setTimeout(()=>{
            runTimer.spawnManOnRightEdge("littleMan");
            },num*3000)

            num=(Math.random()).toFixed(1);
            setTimeout(()=>{
            runTimer.spawnManOnLeftEdge("littleMan");
            },num*3000)
        },1000);

        const littleMenDancingCode = setInterval(()=>{
            var littleMen=document.getElementsByClassName('littleMan');
            for (var i=0;i<littleMen.length;i++){
                var xLoc=littleMen[i].offsetLeft;
                littleMen[i].style.opacity='1';
                if (littleMen[i].classList.contains('rightMan')){
                    if (parseInt(xLoc,10)===330){
                        littleMen[i].classList.remove('rightMan');
                        littleMen[i].classList.add('leftMan');
                        continue;
                    }
                    xLoc+=10;
                    littleMen[i].style.left=xLoc+'px';
                }else if (littleMen[i].classList.contains('leftMan')){
                    if (parseInt(xLoc,10)===-10){
                        littleMen[i].classList.remove('leftMan');
                        littleMen[i].classList.add('rightMan');
                        continue;
                    }
                    xLoc-=10;
                    littleMen[i].style.left=xLoc+'px';
                }

                //change his hip placement
                littleMen[i].setAttribute('src', (littleMen[i].getAttribute('src')===thrustIn)?thrustOut:thrustIn )
            }
            },100)

        runTimer.spawnIntervalCodes.push(littleMenSpawnCode);
        runTimer.dancingMenIntervalCodes.push(littleMenDancingCode);


        //spawns mid men
        runTimer.spawnMediumAlley();
        const midMenSpawnCode=setInterval(()=>{
            runTimer.spawnMediumAlley();
        },500);

        const midMenDancingCode= setInterval(()=>{
            var midMen=document.getElementsByClassName('midMan');

            for (var i=0;i<midMen.length;i++){
                var xLoc=midMen[i].offsetLeft;
                midMen[i].style.opacity='1';
                if (midMen[i].classList.contains('rightMan')){
                    if (parseInt(xLoc,10)===1450){
                        midMen[i].classList.remove('rightMan');
                        midMen[i].classList.add('leftMan');
                        continue;
                    }
                    xLoc+=10;
                    midMen[i].style.left=xLoc+'px';
                }else if (midMen[i].classList.contains('leftMan')){
                    if (parseInt(xLoc,10)===-10){
                        midMen[i].classList.remove('leftMan');
                        midMen[i].classList.add('rightMan');
                        continue;
                    }
                    xLoc-=10;
                    midMen[i].style.left=xLoc+'px';
                }

                //change his hip placement
                midMen[i].setAttribute('src', (midMen[i].getAttribute('src')===thrustIn)?thrustOut:thrustIn );
            }
        },100)

        runTimer.spawnIntervalCodes.push(midMenSpawnCode);
        runTimer.dancingMenIntervalCodes.push(midMenDancingCode);

        
        //spawns large men
        runTimer.spawnLargeAlley();
        const largeMenSpawnCode= setInterval(()=>{
            const num=(Math.random()).toFixed(1);
            setTimeout(()=>{
            runTimer.spawnLargeAlley();
            },num*1000)
        },1000)
        
        const largeMenDanceCode = setInterval(()=>{
        const largeMen=document.getElementsByClassName('largeMan');
            for (var i=0;i<largeMen.length;i++){
                var xLoc=largeMen[i].offsetLeft;
                largeMen[i].style.opacity='1';
                if (largeMen[i].classList.contains('rightMan')){
                    if (parseInt(xLoc,10)===1400){
                        largeMen[i].classList.remove('rightMan');
                        largeMen[i].classList.add('leftMan');
                        continue;
                    }
                    xLoc+=10;
                    largeMen[i].style.left=xLoc+'px';
                }else if (largeMen[i].classList.contains('leftMan')){
                    if (parseInt(xLoc,10)===-10){
                        largeMen[i].classList.remove('leftMan');
                        largeMen[i].classList.add('rightMan');
                        continue;
                    }
                    xLoc-=10;
                    largeMen[i].style.left=xLoc+'px';
                }

                //change his hip placement
                largeMen[i].setAttribute('src', (largeMen[i].getAttribute('src')===thrustIn)?thrustOut:thrustIn );
            }
        },100)
    
        runTimer.spawnIntervalCodes.push(largeMenSpawnCode);
        runTimer.dancingMenIntervalCodes.push(largeMenDanceCode);
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
        document.getElementById('DOBDayStartBtn').textContent="STOP";
        document.getElementById('DOBDayStartBtn').classList.add('DOBStop');
        document.getElementById('DOBDayStartBtn').classList.remove('DOBStart');

        runTimer.showDancingMen();
    },
    stop(){
        runTimer.isRunning=false;
        clearInterval(runTimer.intCode);
        for (var i=0;i<runTimer.dancingMenIntervalCodes.length;i++){
            clearInterval(runTimer.dancingMenIntervalCodes[i]);
            clearInterval(runTimer.spawnIntervalCodes[i]);
        }

        if (runTimer.iteration===4){
            var tinyMen=document.getElementsByClassName('tinyMan');
            while (tinyMen.length>0){
                tinyMen[0].remove();
            }
        }

        runTimer.dancingMenIntervalCodes=[];
        runTimer.spawnIntervalCodes=[];
        document.getElementById('DOBDayStartBtn').textContent="START";
        document.getElementById('DOBDayStartBtn').classList.remove('DOBStop');
        document.getElementById('DOBDayStartBtn').classList.add('DOBStart');

        //if first stop, reveals submissions sections, delays, then reveals first submission
        //if !first stop, reveals each submission
        var slots=document.getElementsByClassName('DOBDaySubmission');
        if (runTimer.iteration===1){
            
            setTimeout(()=>{
                document.getElementById("DOBMainSection").style.margin="10px auto";
            },500);
            setTimeout(()=>{
                document.getElementById('DOBAnswersDisplay').classList.add('is-visible');
            },1500);
            slots[0].textContent=document.getElementById('DOBInputDayNumber').textContent;
            setTimeout(()=>{
                slots[0].style.opacity='1';
            },4000);
        }else{
            for (var j=0;j<slots.length;j++){
                if (slots[j].textContent===""){
                    slots[j].textContent=document.getElementById('DOBInputDayNumber').textContent;
                    slots[j].style.opacity='1';
                    break;
                }
            }
        }

        //on last itr, freeze start/stop btn and start reveal show
        if (runTimer.iteration===5){
            document.getElementById('DOBDayStartBtn').textContent="DONE";
            document.getElementById('DOBDayStartBtn').classList.remove('DOBStart');
            document.getElementById('DOBDayStartBtn').classList.add('DOBDone');
            document.getElementById('DOBDayStartBtn').disabled=true;
            runTimer.slowRevealOfOperators();
        }

        if (runTimer.iteration!==5){
            runTimer.hideDancingMen();
            setTimeout(()=>{document.getElementById('DOBInputDayNumber').textContent='1';},1000)
            
        }

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