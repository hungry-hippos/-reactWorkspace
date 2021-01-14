import React,{useState} from 'react'
import Button from "react-bootstrap/Button"
import {AiOutlineCloseCircle} from 'react-icons/ai'


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
            document.getElementById('dayUpbar').click();
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
        <Button variant="outline-dark" onClick={addLetter} className='DOBAddLetterBtn'>Add a letter</Button>
        {letterMenus.length >2 && <Button variant='outline-primary' onClick={enterMonth} id='DOBEnterBtn'>Submit</Button>}
        {wrongMonth && <div id='DOBInvalidMonthError'>
                <p className="DOBWrongMonth" style={{fontWeight:'bold',fontSize:"20px"}}>ERROR!</p>
                < AiOutlineCloseCircle id="DOBErrorX" onClick={()=>{setWrongMonth(false)}}/>
                <hr id="DOBErrorHr"></hr>
                <p className="DOBWrongMonth">{wrongMonth} is not a real month.</p>
                <p className="DOBWrongMonth">Please enter a valid month using standard American English.</p>
                <p className="DOBWrongMonth">Examples include <span style={{fontWeight:'bold'}}>May</span>,<span style={{fontWeight:'bold'}}>October</span>, and <span style={{fontWeight:'bold'}}>July</span>.</p>
            </div>}
    </div>
}

export default InputMonth