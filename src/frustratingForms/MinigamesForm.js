import React,{useEffect} from 'react'
import Button from 'react-bootstrap/Button'

import './MinigamesForm.css'


const MinigamesForm=()=>{


    const submitData=()=>{
        const firstN=document.getElementById('firstName').value;
        const lastN=document.getElementById('lastName').value;
        document.getElementById('firstNameField').textContent=firstN;
        document.getElementById('lastNameField').textContent=lastN;

        document.getElementById('DOBSideBar').click();
    }

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
            setTimeout(()=>{
                document.getElementById('submitGameBtn').style.display="none";
            },500)
        })
    }

    useEffect(()=>{
        appendScript();
        window.addEventListener("keydown", function(e) {
            switch(e.key){
                case "ArrowLeft":case "ArrowUp": case "ArrowRight": case "ArrowDown":
                    e.preventDefault();
                    break;
                default:
                    break; 
            }
        });
        
    },[])


    return <>
        <div id='minigameMain'>
                <h1 id='minigameTitle'>Name Info</h1>
                <hr id='minigameHr'></hr>
                <div className='minigameFormSection'>
                    <label htmlFor='firstName' className='nameLabel'>First Name: </label>
                    <input type='text' id='firstName' className='nameInput'></input>
                </div>
                <div className='minigameFormSection'>
                    <label htmlFor='lastName' className='nameLabel'>Last Name:</label>
                    <input type='text' id='lastName' className='nameInput' onChange={loadBtnHoverListener}></input>
                </div>
                <Button variant="outline-primary" id='submitGameBtn'>Submit</Button>
        </div>
        <div id='gameConfirmDiv'>
            <div id='gameConfirmText' style={{fontSize:"17px"}}>Eat <div id='appleCounter' style={{fontWeight:'bold', display:'inline'}}>10</div> apples to submit.</div>
            <div id="mainGrid"></div>
            <div id='initialInstructions'>Press any arrow key.</div>
            <Button variant="outline-primary" id='gameConfirmBtn' onClick={submitData} >Submit</Button>
        </div>
        </>
}

export default MinigamesForm