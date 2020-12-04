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


//day section
var runTimer={
    isRunning:false,
    intCode:"",
    start(){
        runTimer.isRunning=true;
        runTimer.intCode=setInterval(()=>{
            var time=parseInt(document.getElementById('DOBInputDayNumber').textContent,10);
            time=(time===31)?1:time+1;
            document.getElementById('DOBInputDayNumber').textContent=time;
        },100);
        document.getElementById('DOBDayStartBtn').textContent="Stop";
    },
    stop(){
        runTimer.isRunning=false;
        clearInterval(runTimer.intCode);
        document.getElementById('DOBDayStartBtn').textContent="Start";
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

    


    
    return <div id="DOBInputDay">
        <div id='DOBElementsHolder'>
            <img className='DOBInputDayPostureImage' src="/pictures/posture/posture4.png" alt="" />
            <div id="DOBInputDayNumber">0</div>
            <img className='DOBInputDayPostureImage' src="/pictures/posture/posture4.png" alt="" />
        </div>
        <button id="DOBDayStartBtn" onClick={runTimer.toggle}>START</button>
    </div>
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
            {month==="MONTH" && < InputMonth setMonth={setMonth} />}
            {month!=='MONTH' && <InputDay setDay={setDay} />}
            {day!=='DD' && <InputYear setYear={setYear} />}
        </div>
}


export default DOB