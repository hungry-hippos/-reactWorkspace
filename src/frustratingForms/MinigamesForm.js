import React from 'react'

import './MinigamesForm.css'


const MinigamesForm=()=>{

    const appendScript=()=>{
        const s=document.createElement('script');
        s.src='/snakeLogic.js';
        document.body.appendChild(s);
    }


    return <div id='minigameMain'>
                <div className='minigameFormSection'>
                    <label htmlFor='firstName'>First Name: </label>
                    <input type='text' id='firstName'></input>
                </div>
                <div className='minigameFormSection'>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type='text' id='lastName'></input>
                </div>
                <button type='button' id='submitNameBtn' onClick={appendScript}>SUBMIT</button> 

                <div id="mainGrid"></div>
            </div>
}

export default MinigamesForm