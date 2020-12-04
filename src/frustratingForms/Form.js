import React,{useState} from 'react'
import './Form.css'


const Form=()=>{

    var [firstName,setFirstName]=useState('');
    var [lastName,setLastName]=useState('');
    

    const changeFirstName=(e)=>{
        const inputVal=e.target.value;
        var newVal="";
        //if user used backspace, update by erasing left-most char. Else, add newest char as left-most char
        if (inputVal.length<firstName.length){
            for (var i=1;i<firstName.length;i++){
                newVal+=firstName[i];
            }
        }else{
            const newestChar=inputVal[inputVal.length-1];
            newVal=newestChar+firstName;
        }
        setFirstName(newVal);
    }

    const changeLastName=(e)=>{
        const inputVal=e.target.value;

        //case where user deletes input value
        if (inputVal.length<lastName.length){
            setLastName(inputVal);
            return;
        }

        var newVal="";
        const magic8Ball=Math.random();
        if (magic8Ball>.5){
            newVal=lastName+inputVal[inputVal.length-1].toUpperCase();
        }else{
            newVal=inputVal;
        }
        setLastName(newVal);
    }

    const openConfirmation=()=>{
        document.getElementById('confirmation').classList.remove('hidden');
        document.getElementById('firstName').disabled=true;
        document.getElementById('lastName').disabled=true;
        setTimeout(()=>{
            document.getElementById('firstLoadingScreen').classList.add('hidden');
        },3000)
    }
    const closeConfirmation=()=>{
        document.getElementById('confirmation').classList.add('hidden');
        document.getElementById('firstName').disabled=false;
        document.getElementById('lastName').disabled=false;
        document.getElementById('firstLoadingScreen').classList.remove('hidden');
    }
    const openSecondConfirmation=()=>{
        document.getElementById('secondConfirmation').classList.remove('hidden');
        document.getElementById('firstScreen').classList.add('front');
        document.getElementById('firstYes').classList.add('clickedYes');
        setTimeout(()=>{
            document.getElementById('secondLoadingScreen').classList.add('hidden');
        },3000)
    }
    const closeSecondConfirmation=()=>{
        document.getElementById('secondConfirmation').classList.add('hidden');
        document.getElementById('firstScreen').classList.remove('front');
        document.getElementById('firstYes').classList.remove('clickedYes');
        document.getElementById('secondLoadingScreen').classList.remove('hidden');
    }
    const openThirdConfirmation=()=>{
        document.getElementById('thirdConfirmation').classList.remove('hidden');
        document.getElementById('secondScreen').classList.add('front');
        document.getElementById('secondYes').classList.add('clickedYes');
        setTimeout(()=>{
            document.getElementById('thirdLoadingScreen').classList.add('hidden');
        },3000)
    }
    const closeThirdConfirmation=()=>{
        document.getElementById('thirdConfirmation').classList.add('hidden');
        document.getElementById('secondScreen').classList.remove('front');
        document.getElementById('secondYes').classList.remove('clickedYes');
        document.getElementById('thirdLoadingScreen').classList.remove('hidden');

    }

    return <form id='mainCard'>
                <div id='centralFormDiv'>
                    <div className='formSection'>
                        <label htmlFor='firstName'>First Name: </label>
                        <input type='text' id='firstName' value={firstName} onChange={(e)=>changeFirstName(e)}></input>
                    </div>
                    <div className='formSection'>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input type='text' id='lastName' value={lastName} onChange={(e)=>changeLastName(e)}></input>
                    </div>
                    <button type='button' id='submitNameBtn' onClick={openConfirmation}>SUBMIT</button> 

                    <div id='confirmation' className='hidden'>
                        Are you sure your name is:
                        <div className='nameConfirmation'>{firstName}</div>
                        <div className='nameConfirmation'>{lastName}</div>
                        <div id='btnsBar'>
                            <span onClick={closeConfirmation} className='firstBtns'>No</span>
                            <span onClick={openSecondConfirmation} className='firstBtns' id='firstYes'>Yes</span>
                            <div id='firstScreen' className='screen'></div>
                        </div>
                        <div className='loadingScreen front' id='firstLoadingScreen'>
                            <div className='loadingMessage' id='firstMessage'>LOADING</div>
                            <div className="loader" id='firstLoader'></div>
                        </div>
                    </div> 

                    <div id='secondConfirmation' className='hidden'>
                        Are you sure you are sure?
                        <div className='inlineBtnsBar'>
                            <span onClick={closeSecondConfirmation} className='firstBtns'>No</span>
                            <span onClick={openThirdConfirmation} className='firstBtns' id='secondYes'>Yes</span>
                            <div id='secondScreen' className='screen'></div>
                        </div>
                        <div className='loadingScreen front' id='secondLoadingScreen'>
                            <div className='loadingMessage'>LOADING</div>
                            <div className="loader"></div>
                        </div>
                    </div>

                    <div id='thirdConfirmation' className='hidden'>
                        Please confirm.
                        <div className='lastBtnsBar'>
                            <span onClick={closeThirdConfirmation}>No</span>
                            <span>Yes</span>
                        </div>
                        <div className='loadingScreen front' id='thirdLoadingScreen'>
                            <div className='loadingMessage'>LOADING</div>
                            <div className="loader"></div>
                        </div>
                    </div>
                </div>
            </form>
}


export default Form