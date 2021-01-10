import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'

const InputYear=(props)=>{
    const {setYear}=props;
    const [yearShown,setYearShown]=useState(0);
    const [hasEnterSpawn,setHasEnterSpawn]=useState(false);
    const [intCodes,setIntCodes]=useState([0,0,0,0,0,0,0,0,0,0]);
    var btnKeyCounter=-1;
    var variants=['success','success','danger','danger','warning','warning','outline-danger','warning','primary','primary'];

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

    const uploadDOBData=()=>{
        const month=document.getElementById('headerMonth').textContent;
        const day=document.getElementById('headerDay').textContent;
        const year=document.getElementById('headerYear').textContent;

        const DOBString=month+"/"+day+"/"+year;
        console.log(DOBString);
        document.getElementById('DOBField').textContent=DOBString;
    }
    const win=()=>{
        document.getElementById('yearRangeSubmitBtn').style.backgroundColor='green';
        document.getElementById('yearRangeSubmitBtn').style.fontWeight='bold';
        document.getElementById('yearRangeSubmitBtn').removeEventListener('mouseenter',flee);
        const year=document.getElementById('yearRange').value;
        setYear(year);
        uploadDOBData();

        document.getElementById('mapSideBar').click();
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

        var key=-1;
        if (e.target.tagName==="BUTTON"){
            const parentDiv=e.target.parentElement;
            parentDiv.classList.add('hitEnter');
            parentDiv.style.opacity='0';
            parentDiv.style.zIndex='20';
            key=parentDiv.getAttribute('id');
        }else{
            e.target.classList.add('hitEnter');
            e.target.style.opacity='0';
            e.target.style.zIndex='20';
            key=e.target.getAttribute('id');
        }
        clearInterval(intCodes[key]);

        if (document.getElementsByClassName('hitEnter').length===10){
            document.getElementById('yearRangeSubmitBtn').style.opacity='0';
            document.getElementById('yearRangeSubmitBtn').classList.remove('hidden');
            document.getElementById('yearRangeSubmitBtn').style.opacity='1';
            document.getElementById('yearRangeSubmitBtn').addEventListener('mouseenter',flee);
            document.getElementById('yearRangeSubmitBtn').addEventListener('click',win);
            
            for (let i=0;i<intCodes.length;i++){
                clearInterval(intCodes[i]);
            }

            const btns=document.getElementsByClassName('yearEnterBtn');
            for (let i=0;i<btns.length;i++){
                btns[i].classList.add('hidden');
            }

        }
    }

    const intervalMotion=()=>{

        if (hasEnterSpawn){
            return;
        }


        //hides og button, fixes input bar
        document.getElementById('yearRangeSubmitBtn').classList.add('hidden');
        document.getElementById('yearRange').disabled=true;
        const btns=document.getElementsByClassName('yearEnterBtn');
        for (var i=0;i<btns.length;i++){
            btns[i].classList.remove('hidden');
        }

        //assigns intervals for each button
        var codesArr=[0,0,0,0,0,0,0,0,0,0];
        codesArr[0]=setInterval(()=>{randMotion(0)},Math.random()*300+50);
        codesArr[1]=setInterval(()=>{randMotion(1)},Math.random()*300+50);
        codesArr[2]=setInterval(()=>{randMotion(2)},Math.random()*300+50);
        codesArr[3]=setInterval(()=>{randMotion(3)},Math.random()*300+50);
        codesArr[4]=setInterval(()=>{randMotion(4)},Math.random()*300+50);
        codesArr[5]=setInterval(()=>{randMotion(5)},Math.random()*300+50);
        codesArr[6]=setInterval(()=>{randMotion(6)},Math.random()*300+50);
        codesArr[7]=setInterval(()=>{randMotion(7)},Math.random()*300+50);
        codesArr[8]=setInterval(()=>{randMotion(8)},Math.random()*300+50);
        codesArr[9]=setInterval(()=>{randMotion(9)},Math.random()*300+50);
        setIntCodes(codesArr);

        setHasEnterSpawn(true);
    }
    const changeOnRange=()=>{
        setYearShown(document.getElementById('yearRange').value);
        document.getElementById('yearRangeSubmitBtn').classList.remove('hidden');
        document.getElementById('yearRangeSubmitBtn').style.opacity='1';
    }

    return <div id="yearMainCard">
        <input type="range" id="yearRange" name="yearRange" min="0" max="2020" 
        onChange={changeOnRange} />
        <div id='rangeValDisplay'>{yearShown}</div>

        { variants.map((variant)=>{
            btnKeyCounter++;
            return <div id={btnKeyCounter} className='yearEnterBtn hidden' key={btnKeyCounter} onClick={(e)=>{clickedJitteryEnter(e)}}>
                    < Button variant={variant}>SUBMIT</Button>
                </div>
        })}
        <Button variant='primary' id='yearRangeSubmitBtn' className='hidden' onMouseOver={intervalMotion} onClick={win}>SUBMIT</Button>
    </div>
}


export default InputYear