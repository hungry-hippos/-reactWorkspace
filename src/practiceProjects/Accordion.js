import React,{useState,useEffect} from 'react'
import loginInfo from './data.js'
import {MdExpandMore, MdExpandLess} from 'react-icons/md'
import './Accordion.css'




const LoadingScreen=()=>{
    return <h1 id='loading'>Loading...</h1>
}

const InfoDivision=(props)=>{
    var [isShowingAll,setIsShowingAll]=useState(false);

    const {id,title,body}=props.data;

    if (!isShowingAll){
        return <div className='topic' key={id}>
                    <h1>{title} <span onClick={()=>{setIsShowingAll(!isShowingAll)}}>< MdExpandMore /></span></h1>
                </div>
    }

    if (isShowingAll){
        return <div className='topic' key={id}>
                    <h1>{title} <span onClick={()=>{setIsShowingAll(!isShowingAll)}}>< MdExpandLess /></span></h1>
                    <p>{body}</p>
                </div>
    }
    
}

const Accordion=()=>{
    return <div id='accordion'>
        <div id='leftSide'>
            Questions and Answers About Login
        </div>
        <div id='rightSide'>
            {loginInfo.map((division)=>{
                return < InfoDivision data={division} />
            })}
        </div>
    </div>
}
const Screen=()=>{
    var [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{setIsLoading(false)},2000)
    },[isLoading])

    return <React.Fragment>
        {isLoading && <LoadingScreen/>}
        {isLoading || <Accordion/>}
    </React.Fragment>

}

export default Screen