import React,{useEffect,useState} from 'react'
import oranges from './orangesData'
import boxes from './boxesData'
import {FiRefreshCcw} from 'react-icons/fi'
import {ImEnter} from 'react-icons/im'
import {Button, Spinner} from 'react-bootstrap'
import './Robot.css'

const shuffleImgArr=(arr)=>{
    for (var i=0;i<arr.length;i++){
        const swapWith=Math.floor(Math.random()*arr.length)
        const temp=arr[i];
        arr[i]=arr[swapWith];
        arr[swapWith]=temp;
    }
    return arr;
}
var shuffledOranges=shuffleImgArr(oranges);
var shuffledBoxes=shuffleImgArr(boxes);

const OrangesGrid=()=>{
    return  <div id='grid'>
                    {shuffledOranges.map((orange)=>{
                        return <img id={orange.id} src={orange.src} alt='' className='orangeImg' onClick={(e)=>{e.target.classList.toggle('clickedOrangeImg');}}/>
                    })}
            </div>
}

const ForestGrid=()=>{
    
    useEffect(()=>{
        for (var i=0;i<256;i++){ 
            var square=document.createElement('div');
            square.classList.add('square');
            square.addEventListener('click',(e)=>{e.target.classList.toggle('clickedSquare')})
            document.getElementById('forestGrid').appendChild(square);
        }
    },[])

    return <div id='forestGrid'></div>
}

const EmptyBoxesGrid=()=>{
    var fourBoxesArr=[];
    for (var i=0;i<4;i++){
        fourBoxesArr.push(shuffledBoxes[i]);
    }

    return  <div id='grid'>
                    {fourBoxesArr.map((box)=>{
                        return <img id={box.id} src={box.src} alt='' className='emptyBoxImg' onClick={(e)=>{e.target.classList.toggle('clickedEmptyBoxImg');}}/>
                    })}
            </div>
}

const FullBoxesGrid=()=>{    

    return  <div id='grid'>
                    {shuffledBoxes.map((box)=>{
                        return <img id={box.id} src={box.src} alt='' className='fullBoxImg' onClick={(e)=>{e.target.classList.toggle('clickedFullBoxImg');}}/>
                    })}
            </div>
}

//stores each grid component with its corresponding message. Used in Generic Template to pass data.
const captchas=[
    [
        0,
        "Select all the squares with EMPTY boxes.",
        <EmptyBoxesGrid />
    ],
    [
        1,
        "Select all the squares with FULL boxes.",
        <FullBoxesGrid/>
    ],
    [
        2,
        "Select the MOST orange orange among these oranges.",
        <OrangesGrid/>
    ],
    [
        3,
        "Select ALL the squares over the hidden sniper.",
        <ForestGrid />
    ]
]


const GenericTemplate=()=>{
    var [displayedCaptcha,setDisplayedCaptcha]=useState(captchas[0]);
    const [id,message,grid]=displayedCaptcha;

    const changeCaptcha=()=>{
        var captchaId=displayedCaptcha[0];
        captchaId=(captchaId<captchas.length-1)? captchaId+1 : 0;
        setDisplayedCaptcha(captchas[captchaId]);
    }

    return <div id='centralCard'>
            <div id='captchaTitle'>Please Prove Your're Not a Robot</div>
            <hr style={{borderColor:'#a0a0a0'}}></hr>
                <div id='leftHalf'>
                    <div id='description' captchaNum={id}>{message}</div>
                </div>
                {grid}
                <Button variant='outline-dark' id='newCaptchaBtn' onClick={changeCaptcha}><FiRefreshCcw id='refreshIcon'/> Try another captcha</Button>
                <Button variant='outline-primary' id='submitBtn'><ImEnter id='submitIcon'/> Submit</Button>
            </div>
}

const CaptchaSetup=()=>{
    const [showRobot,setShowRobot]=useState(false);
    useState(()=>{
        //create backgroundDimmer and append it to window
        var dimmer=document.createElement('div');
        dimmer.classList.add('backgroundDimmer');
        document.body.appendChild(dimmer);

        setTimeout(()=>{setShowRobot(true)},3000)
    },[])

    return <React.Fragment>
        <div id='loadingSpinner'>Loading  <Spinner animation="grow" /> <Spinner animation="grow" /> <Spinner animation="grow" /></div>
        {showRobot && <GenericTemplate />}
    </React.Fragment>
}

export default CaptchaSetup;