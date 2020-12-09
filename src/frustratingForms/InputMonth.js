import React,{useState} from 'react'


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

export default InputMonth