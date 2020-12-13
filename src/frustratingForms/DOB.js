import React,{useState} from 'react'

import InputDay from './InputDay'
import InputMonth from './InputMonth'
import './DOB.css'

//month section
const Header=(props)=>{
    var [month,date,year]=props.data;
    return <div id='DOBheader'>
        <h2 id='DOBmessage'>Date of Birth:</h2>
        <div id='DOBData'>{month} / {date} / {year}</div>
    </div>
}

const ComponentToggle=(props)=>{
    const {setShowMonth,setShowDay,setShowYear}=props.setters;

    const show=(component)=>{
        setShowMonth(false);
        setShowDay(false);
        setShowMonth(false);

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

const InputYear=()=>{
    return <></>
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

    return <React.Fragment>
        < ComponentToggle setters={setters} />
        < BackgroundAlleys />
        <div id='DOBMainSection'>
            < Header data={data}/>
            { showMonth && < InputMonth setMonth={setMonth} />} 
            { showDay && <InputDay setDay={setDay} />}
            { showYear && <InputYear setYear={setYear} />}
        </div>
    </React.Fragment>
}


export default DOB