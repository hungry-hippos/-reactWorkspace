
import React,{useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import kruskals from './kruskalsGeneration'
import './MinigamesForm.css'


const MinigamesForm=()=>{

    const submitData=()=>{
        const firstN=document.getElementById('firstName').value;
        const lastN=document.getElementById('lastName').value;
        document.getElementById('firstNameField').textContent=firstN;
        document.getElementById('lastNameField').textContent=lastN;

        document.getElementById('DOBSideBar').click();
    } 
    const loadBtnHoverListener=()=>{
        document.getElementById('submitGameBtn').removeAttribute('disabled');
    }
    useEffect(()=>{
        document.getElementById('submitGameBtn').addEventListener('mouseenter',(event)=>{
            document.getElementById('gameConfirmDiv').style.opacity='1';
            event.target.style.opacity='0';
            kruskals.createMaze();

            setTimeout(()=>{
                document.getElementById('submitGameBtn').style.display="none";
            },500)
        })
    })  

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
                <Button variant="primary" id='submitGameBtn' disabled>Submit</Button>
        </div>
        <div id='gameConfirmDiv'>
            <div id='gameConfirmText' style={{fontSize:"17px",opacity:'0',transition:'1s'}}>Why did the chicken cross the maze?</div>
            <div id="mainGrid"></div>
            <div id='initialInstructions' className='hidden'>Press any arrow key.</div>
            <Button variant="primary" id='gameConfirmBtn' onClick={submitData} >Submit</Button>
        </div>
        </>
}

export default MinigamesForm