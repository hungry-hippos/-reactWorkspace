//hold timer functions, and slow reveal function
import runTimer from './InputDayTimer'
import Button from 'react-bootstrap/Button'
import React from 'react'
import postureMan4 from '../assets/pictures/posture/posture4.png'

const InputDay=(props)=>{

    const {setDay}=props;

    const submitDay=()=>{
        var day=parseInt(document.getElementById('eqRightSide').textContent,10);
        if (day<10){
            day="0"+day;
        }
        setDay(day);
        document.getElementById('yearUpbar').click();
    }

    return <React.Fragment>
    <div id="DOBInputDay">
        <div style={{paddingLeft:'10px'}}>Please enter the day you were born in.</div>
        <div id='DOBElementsHolder'>
            <div id='DOBAlley'>
                <img className='tinyMan leftMan' id='firstLeftMan' src={postureMan4} alt=""/>
                <img className='tinyMan rightMan' id='firstRightMan' src={postureMan4} alt="" />
            </div>
            <div id="DOBInputDayNumber">0</div>
        </div>
        <Button variant="outline-dark" id="DOBDayStartBtn" className='DOBStart' onClick={runTimer.toggle}>START</Button>
    </div>
    <div id="DOBAnswersDisplay" className="fade-in-section">
        <p className='DOBSubmissions'>Your submissions:</p>
        <div id='eqLeftSide'>
            <div id='eqTop'>
                <div className='DOBDaySubmission'></div>
                <div className='DOBPlus' style={{left:'60px'}}>+</div>
                <div className='DOBDaySubmission'></div>
                <div className='DOBPlus'style={{left:'120px'}}>+</div>
                <div className='DOBDaySubmission'></div>
                <div className='DOBPlus' style={{left:'178px'}}>+</div>
                <div className='DOBDaySubmission'></div>
                <div className='DOBPlus' style={{left:'237px'}}>+</div>
                <div className='DOBDaySubmission'></div>
                <div className='DOBEqualSign'>=</div>
            </div>
            <hr id='DOBDivisorLine'></hr>
            <div id='eqBtm'>
                <div className='DOBDaySubmission' id='DOBLastSq' style={{backgroundColor:'transparent'}}>5</div>
            </div>
        </div>
        <div id='eqRightSide'></div>
        <p className='DOBSubmissions avgDayDisplay hidden'>Your average day-of-birth submission is: <span style={{fontWeight:'bold',margin:'0'}} id='DOBDecimalAvg'>23.23</span></p>
        <div className='DOBSubmissions DOBConfirmDay hidden'>
            Please confirm.
            <Button variant='primary' className='DOBYesBtn' onClick={submitDay}>YES</Button>
            <Button variant='primary' className='DOBYesBtn' onClick={submitDay}>AGREE</Button>
            <Button variant='primary' className='DOBYesBtn' onClick={submitDay} style={{marginTop:"7px"}}>CONFIRM</Button>
        </div>
    </div>
    </React.Fragment>
}

export default InputDay