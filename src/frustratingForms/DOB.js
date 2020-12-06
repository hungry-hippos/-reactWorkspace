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
    isImageIn:false,
    intCode:"",
    start(){
        runTimer.isRunning=true;
        runTimer.intCode=setInterval(()=>{
            var time=parseInt(document.getElementById('DOBInputDayNumber').textContent,10);
            time=(time===31)?1:time+1;
            document.getElementById('DOBInputDayNumber').textContent=time;
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

        },300);
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
                <div className='DOBPlus'>+</div>
                <div className='DOBDaySubmission'></div>
                <div className='DOBPlus'>+</div>
                <div className='DOBDaySubmission'></div>
                <div className='DOBPlus'>+</div>
                <div className='DOBDaySubmission'></div>
                <div className='DOBPlus'>+</div>
                <div className='DOBDaySubmission'></div>
            </div>
            <hr id='DOBDivisorLine'></hr>
            <div id='eqBtm'>
                <div className='DOBDaySubmission'></div>
            </div>
        </div>
        <div id='eqRightSide'></div>
        <p className='DOBSubmissions avgDayDisplay'>Your average day-of-birth submission is: <span style={{fontWeight:'bold',margin:'0'}}>23.23</span></p>
        <div className='DOBSubmissions DOBConfirmDay'>
            Please confirm.
            <button className='DOBYesBtn'>YES</button>
            <button className='DOBYesBtn'>YES</button>
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