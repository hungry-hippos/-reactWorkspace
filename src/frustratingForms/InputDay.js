//hold timer functions, and slow reveal function
import runTimer from './InputDayTimer'
import React from 'react'

const InputDay=()=>{
    return <React.Fragment>
    <div id="DOBInputDay">
        <div id='DOBElementsHolder'>
            <div id='DOBAlley'>
                <img className='DOBInputDayPostureImage leftMan' id='firstLeftMan' src="/pictures/posture/posture4.png" alt=""/>
                <img className='DOBInputDayPostureImage rightMan' id='firstRightMan' src="/pictures/posture/posture4.png" alt="" />
            </div>
            <div id="DOBInputDayNumber">0</div>
        </div>
        <button id="DOBDayStartBtn" onClick={runTimer.toggle}>START</button>
    </div>
    <div id="DOBAnswersDisplay">
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
            <button className='DOBYesBtn' >YES</button>
            <button className='DOBYesBtn' >AGREE</button>
            <button className='DOBYesBtn' >CONFIRM</button>
        </div>
    </div>
    </React.Fragment>
}

export default InputDay