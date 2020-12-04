import React,{useState,useEffect} from 'react'
import reviewsData from './data'
import './Reviews.css'

const LoadingScreen=()=>{
    return <div id='centralNote'>
                <div id='loading'>LOADING...</div>
            </div>
}

const ReviewsPad=(props)=>{
    const {changeReview}=props;
    const {image,name,review}=props.reviewData;

    var [showAll,setShowAll]=useState(false);
    
    const reducedText=()=>{
        var shortenedText="";
        for (var i=0;i<100;i++){
            shortenedText+=review[i];
        }
        return shortenedText;
    }

    return <div id='centralNote'>
                <img src={image} alt=''></img>
                <div className='reviewName'>{name}</div>
                {showAll || <div className='reviewText'>{reducedText()}<span onClick={()=>{setShowAll(!showAll)}}>...SHOW MORE</span></div>}
                {showAll && <div className='reviewText'>{review}<span onClick={()=>{setShowAll(!showAll)}}>...SHOW LESS</span></div>}
                <div className='btnsDiv'>
                    <button className='prevBtn' onClick={()=>{changeReview("previous");setShowAll(false)}}>&#8592;</button>
                    <button className='nextBtn' onClick={()=>{changeReview("next");setShowAll(false)}}>&#8594;</button>
                    
                </div>
        </div>
}

const ReviewsApp=()=>{
    var [isLoading,setIsLoading]=useState(true);
    var [currentReview,setCurrentReview]=useState(reviewsData[0]);

    const changeReview=(key)=>{
        var currentReviewId=currentReview.id;
        currentReviewId=parseInt(currentReviewId)-1;
        if (key==='previous'){
            currentReviewId--;
            if (currentReviewId<0)
                currentReviewId=reviewsData.length-1;
        }else if (key==='next'){
            currentReviewId++;
            if (parseInt(currentReviewId)===reviewsData.length)
                currentReviewId=0;
        }
        setCurrentReview(reviewsData[currentReviewId]);
    }

    useEffect(()=>{
        setTimeout(()=>{setIsLoading(false)},1500);
    },[isLoading])

    return <React.Fragment>
        {isLoading && <LoadingScreen/>}
        {isLoading || <ReviewsPad changeReview={changeReview} reviewData={currentReview}/>}
    </React.Fragment>


}

export default ReviewsApp;
