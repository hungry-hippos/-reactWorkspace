import React,{useEffect} from 'react'

import './MinigamesForm.css'


const MinigamesForm=()=>{

    //appends a script tag, drawing it from public folder
    const appendScript=()=>{
        const s=document.createElement('script');
        s.src='/snakeLogic.js';
        document.body.appendChild(s);
    }
    const loadBtnHoverListener=()=>{
        console.log("CHANGE");
        document.getElementById('submitGameBtn').addEventListener('mouseenter',(event)=>{
            document.getElementById('gameConfirmDiv').style.opacity='1';
            event.target.style.opacity='0';
        })
    }

    useEffect(()=>{
        appendScript();
    },[])


    return <>
        <div id='minigameMain'>
                <div className='minigameFormSection'>
                    <label htmlFor='firstName' className='nameLabel'>First Name: </label>
                    <input type='text' id='firstName' className='nameInput'></input>
                </div>
                <div className='minigameFormSection'>
                    <label htmlFor='lastName' className='nameLabel'>Last Name:</label>
                    <input type='text' id='lastName' className='nameInput' onChange={loadBtnHoverListener}></input>
                </div>
                <button type='button' id='submitGameBtn'>SUBMIT</button> 
        </div>
        <div id='gameConfirmDiv'>
            <div id='gameConfirmText'>Eat <div id='appleCounter' style={{fontWeight:'bold', display:'inline'}}>10</div> apples to submit.</div>
            <div id="mainGrid"></div>
            <button id='gameConfirmBtn' disabled>SUBMIT</button>
        </div>
        </>
}

export default MinigamesForm