import React,{useState,useEffect} from 'react'

import InputDay from './InputDay'
import InputMonth from './InputMonth'
import InputYear from './InputYear'
import './DOB.css'

//month section
const Header=(props)=>{
    var [month,day,year]=props.data;
    var [showMonth,showDay,showYear]=props.isComponentActive;

    useEffect(()=>{
        document.getElementById('headerMonth').style.fontWeight='normal';
        document.getElementById('headerDay').style.fontWeight='normal';
        document.getElementById('headerYear').style.fontWeight='normal';

        if (showMonth){
            document.getElementById('headerMonth').style.fontWeight='bold';
        }
        if (showDay){
            document.getElementById('headerDay').style.fontWeight='bold';
        }
        if (showYear){
            document.getElementById('headerYear').style.fontWeight='bold';
        }
    },[showMonth,showDay,showYear])

    return <div id='DOBheader'>
        <h2 id='DOBmessage'>Date of Birth</h2>
        <div id='DOBData'> <span id="headerMonth">{month}</span> / <span id="headerDay">{day}</span>/ <span id="headerYear">{year}</span></div>
        <hr id='DOBTitleHr' style={{margin:"0 auto"}}/>
    </div>
}

const ComponentToggle=(props)=>{
    const {setShowMonth,setShowDay,setShowYear}=props.setters;

    const show=(component)=>{
        setShowMonth(false);
        setShowDay(false);
        setShowYear(false);

        switch(component){
            case "month":
                setShowMonth(true);
                break;
            case "day":
                setShowDay(true);
                break;
            case "year":
                setShowYear(true);
                break;
            default:
                break;
        }
    }

    return <div id='DOBComponentsBar'>
        <button onClick={()=>{show("month")}}>Month</button>
        <button onClick={()=>{show("day")}}>Day</button>
        <button onClick={()=>{show("year")}}>Year</button>
    </div>
}

const BackgroundAlleys=()=>{
    return <React.Fragment>
        <div className='largeAlley' id='topLargeAlley'></div>
        <div className='largeAlley' id='bottomLargeAlley'></div>
        <div className='midAlley'></div>
        <div className='midAlley' style={{top:'16%'}}></div>
        <div className='midAlley' style={{top:'32%'}}></div>
        <div className='midAlley' style={{top:'48%'}}></div>
        <div className='midAlley' style={{top:'64%'}}></div>
        <div className='midAlley' style={{top:'80%'}}></div>
        
    </React.Fragment>
}


const DOB=()=>{

    var [month,setMonth]=useState('MONTH');
    var [day,setDay]=useState('DD');
    var [year,setYear]=useState('YYYY');

    const [showMonth,setShowMonth]=useState(false);
    const [showDay,setShowDay]=useState(true);
    const [showYear,setShowYear]=useState(false);
    const setters={setShowMonth,setShowDay,setShowYear};

    var data=[month,day,year];
    var isComponentActive=[showMonth,showDay,showYear];

    

    return <React.Fragment>
        < ComponentToggle setters={setters} />
        {showDay && < BackgroundAlleys /> }
        <div id='DOBMainSection'>
            < Header data={data} isComponentActive={isComponentActive}/>
            { showMonth && < InputMonth setMonth={setMonth} />} 
            { showDay && <InputDay setDay={setDay} />}
            { showYear && <InputYear setYear={setYear} />}
        </div>
    </React.Fragment>
}


export default DOB