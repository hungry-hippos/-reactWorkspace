import React,{useEffect,useState} from 'react'
import oranges from './orangesData'
import boxes from './boxesData'
import {ImEnter} from 'react-icons/im'
import {Button, Spinner} from 'react-bootstrap'
import {VscChromeClose} from 'react-icons/vsc'
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
                        return <img id={orange.id} key={orange.id} src={orange.src} alt='' className='orangeImg' onClick={(e)=>{e.target.classList.toggle('clickedOrangeImg');}}/>
                    })}
            </div>
}

const ForestGrid=()=>{
    
    useEffect(()=>{
        for (var i=0;i<256;i++){ 
            var square=document.createElement('div');
            square.classList.add('square');
            square.setAttribute('key',i);
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
                        return <img id={box.id} key={box.id} src={box.src} alt='' className='emptyBoxImg' onClick={(e)=>{e.target.classList.toggle('clickedEmptyBoxImg');}}/>
                    })}
            </div>
}

const FullBoxesGrid=()=>{    

    return  <div id='grid'>
                    {shuffledBoxes.map((box)=>{
                        return <img id={box.id} key={box.id} src={box.src} alt='' className='fullBoxImg' onClick={(e)=>{e.target.classList.toggle('clickedFullBoxImg');}}/>
                    })}
            </div>
}

const WrongSubmission=()=>{
    return <div id='errorX'>
        <VscChromeClose id='errorIcon'/>
    </div>
}

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

const wrongAnswer=[
    [0,
    "Preparing next captcha.",
    <WrongSubmission/>]
]

const GenericTemplate=(props)=>{
    const {setShowRedirect,setShowRobot}=props.setters;
    const [displayedCaptcha,setDisplayedCaptcha]=useState(captchas[0]);
    const [id,message,grid]=displayedCaptcha;
    var captchaMessToBeDeleted="";

    const changeCaptcha=()=>{
        for (var i=0;i<captchas.length;i++){
            if (captchas[i][1]===message){
                var newCaptchaInd=(i===captchas.length-1)?0:i+1;
                setDisplayedCaptcha(captchas[newCaptchaInd]);
                break;
            }
        }        
    }

    const deleteCaptcha=()=>{

        //deleting shown captcha from array
        captchaMessToBeDeleted=document.getElementById('description').textContent;
        setDisplayedCaptcha(wrongAnswer[0]);
        document.getElementById('captchaTitle').textContent="INCORRECT";

        for (var i=0;i<captchas.length;i++){
            if (captchas[i][1]===captchaMessToBeDeleted){
                setTimeout(()=>{
                    document.getElementById('captchaTitle').textContent="Please Prove You're NOT a Robot";
                    changeCaptcha();
                    for (var i=0;i<captchas.length;i++){
                        if (captchas[i][1]===captchaMessToBeDeleted){
                            captchas.splice(i,1);
                        }
                    }

                    if (captchas.length===0){
                        setShowRedirect(true);
                        setShowRobot(false);
                    }

                },2000)  
            }
        }
        
    }

    return <div id='centralCard'>
            <div id='captchaTitle'>Please Prove Your're Not a Robot</div>
            <hr style={{borderColor:'#a0a0a0'}}></hr>
                <div id='leftHalf'>
                    <div id='description' key={id}>{message}</div>
                </div>
                {grid}
                <Button variant='outline-primary' id='submitBtn' onClick={deleteCaptcha}><ImEnter id='submitIcon'/> Submit</Button>
            </div>
}

const Redirect=()=>{
    useEffect(()=>{
        setTimeout(()=>{
            var dimmer=document.getElementsByClassName('backgroundDimmer');
            while(dimmer.length>0){
                dimmer[0].remove();
            }
            document.getElementById('homeSideBar').click();
            
        },7000)
    },[])
    return <div id='redirectDiv'>
        <h2 className='beep'>BEEP BOOP</h2>
        <h3 className='byebye'>You missed all captchas</h3>
        <h2 className='beep'>BEEP BOOP</h2>
        <h3 className='byebye'>Somebody here is a robot...</h3>
        <h2 className='beep'>BEEP BOOP BEEP BOOP</h2>
        <h1 style={{marginTop:"20px"}}>Redirecting you to HomePage</h1>
        <div><Spinner animation="grow" /> <Spinner animation="grow" /> <Spinner animation="grow" /></div>
    </div>
}

const CaptchaSetup=()=>{
    const [showRobot,setShowRobot]=useState(false);
    const [showRedirect,setShowRedirect]=useState(false);
    const [isLoading,setIsLoading]=useState(true);
    useState(()=>{
        //create backgroundDimmer and append it to window
        var dimmer=document.createElement('div');
        dimmer.classList.add('backgroundDimmer');
        document.body.appendChild(dimmer);

        setTimeout(()=>{setShowRobot(true);setIsLoading(false)},1000);
    },[])

    return <React.Fragment>
        {isLoading && <div id='loadingSpinner'>Loading  <Spinner animation="grow" /> <Spinner animation="grow" /> <Spinner animation="grow" /></div> }
        {showRobot && <GenericTemplate setters={{setShowRedirect,setShowRobot}}/>}
        {showRedirect && <Redirect />}
    </React.Fragment>
}

export default CaptchaSetup;