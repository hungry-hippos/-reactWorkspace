import React,{useEffect, useState} from 'react'
import './DOB.css'

//month section
const Header=(props)=>{
    var [month,date,year]=props.data;
    return <div id='DOBheader'>
        <h2 id='DOBmessage'>Date of Birth:</h2>
        <div id='DOBData'>{month} / {date} / {year}</div>
    </div>
}

const arrayAlphabetLetters=()=>{
    var alphabet=[];
    for (var i=0;i<26;i++){
        var letter=String.fromCharCode(65+i);
        alphabet.push(letter);
    }
    return alphabet;
}

const DropDownAlphabet=()=>{
    const alphabet=arrayAlphabetLetters();
    var i=0;
    return <select className='DOBAlphabet'>
        {alphabet.map((letter)=>{
            i++;
            return <option key={i} value={letter}>{letter}</option>
        })}
    </select>
}

const InputMonth=(props)=>{
    const [letterMenus,setLetterMenus]=useState([]);
    const [wrongMonth,setWrongMonth]=useState();
    const {setMonth}=props;

    //add feature: letter is added in a random position
    //add feature: remove letter... removes a random letter
    const addLetter=()=>{
        if (letterMenus.length < 9){
            const update=letterMenus.concat([1]);
            setLetterMenus(update);
        }
    }

    const enterMonth=()=>{
        var month="";
        const selectTags=document.getElementsByClassName('DOBAlphabet');
        for (var i=0;i<selectTags.length;i++){
            const selLet=selectTags[i].value;
            month+=selLet;
        }
        var isMonth=false;
        switch(month){
            case "JANUARY": case "FEBRUARY": case "MARCH": case "APRIL": case "MAY": case "JUNE": case "JULY": case "AUGUST": case "SEPTEMBER": case "OCTOBER": case "NOVEMEMBER": case "DECEMBER":
                isMonth=true;
                break;
            default:
                break;
        }

        if (isMonth){
            setMonth(month);
            setWrongMonth();
        }else{
            setLetterMenus([]);
            setWrongMonth(month);
        }
    }

    var i=0;
    return <div id='DOBInputMonth'>
        {letterMenus.map(()=>{
            i++;
            return <DropDownAlphabet key={i}/>
        })}
        <button onClick={addLetter} id='DOBAddLetterBtn'>Add a letter</button>
        {letterMenus.length >2 && <button onClick={enterMonth} id='DOBEnterBtn'>Enter</button>}
        {wrongMonth && <div id='DOBInvalidMonthError'>
                <p className="DOBWrongMonth" style={{fontWeight:'bold'}}>ERROR!</p>
                <p className="DOBWrongMonth">{wrongMonth} is not a real month.</p>
                <p className="DOBWrongMonth">Please enter a valid month using standard American English.</p>
                <p className="DOBWrongMonth">Examples include May, October, and July.</p>
            </div>}
    </div>
}


const slowRevealOfOperators=()=>{
    var plus=document.getElementsByClassName('DOBPlus');
    var line=document.getElementById('DOBDivisorLine');
    var btm=document.getElementById('eqBtm');
    var equal=document.getElementsByClassName('DOBEqualSign');
    var divisorFive=document.getElementById('DOBLastSq');
    var answers=document.getElementsByClassName('DOBDaySubmission');
    var avgDisplay=document.getElementById('eqRightSide');
    var yourAverage=document.getElementsByClassName('avgDayDisplay');
    var pleaseConfirm=document.getElementsByClassName('DOBConfirmDay');

    for (var i=0;i<plus.length;i++){
        plus[i].style.opacity='1';
    }

    setTimeout(()=>{
        line.style.opacity='1';
        btm.style.opacity='1';
        divisorFive.style.opacity='1';

    },800);
    setTimeout(()=>{
        equal[0].style.opacity='1';
    },1500)
    setTimeout(()=>{
        //extract and calculate avg for first 5 entries
        var sum=0;
        for (var i=0;i<5;i++){
            sum+=parseInt(answers[i].textContent,10);
        }
        var avg=(sum/5).toFixed(0);
        avgDisplay.textContent=avg;
        avgDisplay.style.opacity='1';
    }, 2500)
    setTimeout(()=>{
        document.getElementById('DOBAnswersDisplay').style.height='240px';
        yourAverage[0].classList.remove('hidden');
        pleaseConfirm[0].classList.remove('hidden');
    },3500)
    setTimeout(()=>{
        yourAverage[0].style.opacity='1';
    },4000)
    setTimeout(()=>{
        pleaseConfirm[0].style.opacity='1';
    },5000)

}


//day section
var runTimer={
    isRunning:false,
    iteration:0,
    isImageIn:false,
    intCode:"",
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

        //on last itr, freeze start/stop btn
        if (runTimer.iteration===5){
            document.getElementById('DOBDayStartBtn').textContent="Done";
            document.getElementById('DOBDayStartBtn').disabled=true;
            slowRevealOfOperators();
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



const InputDay=()=>{

    return <React.Fragment>
    <div id="DOBInputDay">
        <div id='DOBElementsHolder'>
            <div id='leftAlley' className='DOBAlley'>
                <img className='DOBInputDayPostureImage leftMan' src="/pictures/posture/posture4.png" alt=""/>
            </div>
            <div id="DOBInputDayNumber">0</div>
            <div id='rightAlley' className='DOBAlley'>
                <img className='DOBInputDayPostureImage rightMan' src="/pictures/posture/posture4.png" alt="" />
            </div>
        </div>
        <button id="DOBDayStartBtn" onClick={runTimer.toggle}>START</button>
    </div>
    <div id="DOBAnswersDisplay">
        <p className='DOBSubmissions'>Your submissions:</p>
        <div id='eqLeftSide'>
            <div id='eqTop'>
                <div className='DOBDaySubmission'></div>
                <div className='DOBPlus' style={{left:'60px'}}>+</div>
                <div className='DOBDaySubmission'></div>
                <div className='DOBPlus'style={{left:'120px'}}>+</div>
                <div className='DOBDaySubmission'></div>
                <div className='DOBPlus' style={{left:'178px'}}>+</div>
                <div className='DOBDaySubmission'></div>
                <div className='DOBPlus' style={{left:'237px'}}>+</div>
                <div className='DOBDaySubmission'></div>
                <div className='DOBEqualSign'>=</div>
            </div>
            <hr id='DOBDivisorLine'></hr>
            <div id='eqBtm'>
                <div className='DOBDaySubmission' id='DOBLastSq' style={{backgroundColor:'transparent'}}>5</div>
            </div>
        </div>
        <div id='eqRightSide'></div>
        <p className='DOBSubmissions avgDayDisplay hidden'>Your average day-of-birth submission is: <span style={{fontWeight:'bold',margin:'0'}}>23.23</span></p>
        <div className='DOBSubmissions DOBConfirmDay hidden'>
            Please confirm.
            <button className='DOBYesBtn'>YES</button>
            <button className='DOBYesBtn'>AGREE</button>
            <button className='DOBYesBtn'>CONFIRM</button>
        </div>
    </div>
    </React.Fragment>
}

const InputYear=()=>{
    return <></>
}


const DOB=()=>{

    var [month,setMonth]=useState('MONTH');
    var [day,setDay]=useState('DD');
    var [year,setYear]=useState('YYYY');

    var data=[month,day,year];

    //use an useEffect to change which section is displayed


    return <div id='DOBMainSection'>
            < Header data={data}/>
            {/* {month==="MONTH" && < InputMonth setMonth={setMonth} />} */}
            {/* {month!=='MONTH' && */ <InputDay setDay={setDay} />}
            {day!=='DD' && <InputYear setYear={setYear} />}
        </div>
}


export default DOB