import React,{useState} from 'react'

const InputYear=(props)=>{
    const {setYear}=props;
    const [yearShown,setYearShown]=useState(1990);
    const [hasEnterSpawn,setHasEnterSpawn]=useState(false);
    var intCodes=[0,1,2,3,4,5,6,7,8,9];

    const flee=()=>{
                
        var deltaY=(Math.random()*60)+30;
        var deltaX=(Math.random()*60)+30;
        deltaY=(Math.random()<.5)?deltaY:-deltaY;
        deltaX=(Math.random()<.5)?deltaX:-deltaX;

        const btn=document.getElementById('yearRangeSubmitBtn');
        const RHedge=500;
        const LHedge=-100;
        const topEdge=-80;
        const bottomEdge=330;
        if (btn.offsetLeft+deltaX > RHedge){
            btn.style.left=RHedge+'px';
        }else if (btn.offsetLeft+deltaX < LHedge){
            btn.style.left=LHedge+'px';
        }else{
            btn.style.left=btn.offsetLeft+deltaX+'px';
        }
        
        if (btn.offsetTop+deltaY > bottomEdge){
            btn.style.top=bottomEdge+'px';
        }else if (btn.offsetTop+deltaY < topEdge){
            btn.style.top=topEdge+'px';
        }else{
            btn.style.top=btn.offsetTop+deltaY+'px';
        }     
    }

    const win=()=>{
        document.getElementById('yearRangeSubmitBtn').style.backgroundColor='green';
        document.getElementById('yearRangeSubmitBtn').style.fontWeight='bold';
        document.getElementById('yearRangeSubmitBtn').removeEventListener('mouseenter',flee);
        const year=document.getElementById('yearRange').value;
        setYear(year);
    }
    
    const randMotion=(key)=>{
        
        var enterBtns=document.getElementsByClassName('yearEnterBtn');

        const RHedge=500;
        const LHedge=-100;
        const topEdge=-80;
        const bottomEdge=330;

        
        var deltaY=(Math.random()*60)+30;
        var deltaX=(Math.random()*60)+30;
        deltaY=(Math.random()<.5)?deltaY:-deltaY;
        deltaX=(Math.random()<.5)?deltaX:-deltaX;

        var btn=enterBtns[key];
        
        if (btn.offsetLeft+deltaX > RHedge){
            btn.style.left=RHedge+'px';
        }else if (btn.offsetLeft+deltaX < LHedge){
            btn.style.left=LHedge+'px';
        }else{
            btn.style.left=btn.offsetLeft+deltaX+'px';
        }
        
        if (btn.offsetTop+deltaY > bottomEdge){
            btn.style.top=bottomEdge+'px';
        }else if (btn.offsetTop+deltaY < topEdge){
            btn.style.top=topEdge+'px';
        }else{
            btn.style.top=btn.offsetTop+deltaY+'px';
        }
        
    }

    const clickedJitteryEnter=(e)=>{
        e.target.classList.add('hitEnter');
        e.target.style.opacity='0';

        const k=e.target.getAttribute('key');
        clearInterval(intCodes[k]);

        if (document.getElementsByClassName('hitEnter').length===10){
            document.getElementById('yearRangeSubmitBtn').style.opacity='0';
            document.getElementById('yearRangeSubmitBtn').classList.remove('hidden');
            document.getElementById('yearRangeSubmitBtn').style.opacity='1';
            document.getElementById('yearRangeSubmitBtn').addEventListener('mouseenter',flee);
            document.getElementById('yearRangeSubmitBtn').addEventListener('click',win);
        }
    }

    const intervalMotion=()=>{

        if (hasEnterSpawn){
            return;
        }

        //hides og button, fixes input bar
        document.getElementById('yearRangeSubmitBtn').classList.add('hidden');
        document.getElementById('yearRange').disabled=true;

        const colors=["#4500ff","#ffc107","#1ff327","#009688","#9c27b0"];
        //creates button elements
        for (var i=0;i<10;i++){
            const btn=document.createElement('button');
            btn.classList.add('yearEnterBtn');
            btn.textContent="ENTER";
            btn.style.backgroundColor=colors[Math.floor(i/2)];
            btn.setAttribute('key',i);
            btn.addEventListener('click',(e)=>{clickedJitteryEnter(e)});
            document.getElementById('yearMainCard').append(btn);
        }

        //assigns intervals for each button
        intCodes[0]=setInterval(()=>{randMotion(0)},Math.random()*300+50)
        intCodes[1]=setInterval(()=>{randMotion(1)},Math.random()*300+50)
        intCodes[2]=setInterval(()=>{randMotion(2)},Math.random()*300+50)
        intCodes[3]=setInterval(()=>{randMotion(3)},Math.random()*300+50)
        intCodes[4]=setInterval(()=>{randMotion(4)},Math.random()*300+50)
        intCodes[5]=setInterval(()=>{randMotion(5)},Math.random()*300+50)
        intCodes[6]=setInterval(()=>{randMotion(6)},Math.random()*300+50)
        intCodes[7]=setInterval(()=>{randMotion(7)},Math.random()*300+50)
        intCodes[8]=setInterval(()=>{randMotion(8)},Math.random()*300+50)
        intCodes[9]=setInterval(()=>{randMotion(9)},Math.random()*300+50)
        

        setHasEnterSpawn(true);
    }

    return <div id="yearMainCard">
        <input type="range" id="yearRange" name="yearRange" min="1900" max="2020" 
        onChange={()=>{setYearShown(document.getElementById('yearRange').value); document.getElementById('yearRangeSubmitBtn').style.opacity='1';}} />
        <div id='rangeValDisplay'>{yearShown}</div>
        <button id='yearRangeSubmitBtn' onMouseOver={intervalMotion} onClick={win}>Enter</button>
    </div>
}


export default InputYear