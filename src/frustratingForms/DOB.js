import React,{useEffect, useState} from 'react'

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