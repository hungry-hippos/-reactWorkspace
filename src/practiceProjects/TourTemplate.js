import React,{useState,useEffect} from 'react'
import data from './data' 
import '../practiceProjects/TourTemplate.css'


const Tour=(props)=>{

    const {id,name,price,image,text}=props.data;
    const{eraseTour}=props;

    const reducedText=()=>{
        var reducedS="";
        for(var i=0;i<200;i++){
            reducedS+=text[i];
        }
        return reducedS;
    }
    const [showAll,setShowAll]=useState(false);

    return <div id={id} className='tour'>
            <img src={image} alt=''></img>
            <h1>{name}<h3>{price}</h3></h1>
            {showAll && <p>{text}<span onClick={()=>{setShowAll(false)}}>... READ LESS</span></p>}
            {showAll || <p>{reducedText()}<span onClick={()=>{setShowAll(true)}}>... READ MORE</span></p>}
            <button onClick={()=>{eraseTour(id)}}>NOT INTERESTED</button>
        </div>
}

const ToursList=(props)=>{
    const {eraseTour,resetTours,data}=props;

    if (data.length==0)
        return <div id='centralList'>
            <h1>NO TOURS LEFT!</h1>
            <button onClick={()=>{resetTours()}}>REFRESH</button>
        </div>


    return <React.Fragment>
        <div id='centralList'>
            <h1>TOURS FOR SALE!</h1>
            {data.map((tour)=>{
                return <Tour data={tour} key={tour.id} eraseTour={eraseTour}/>
            })}
        </div>
    </React.Fragment>
}

const LoadingScreen=()=>{
    return <h1>LOADING...</h1>
}

const MainScreen=()=>{
    var [isLoading,setIsLoading]=useState(true);
    var [toursData,setToursData]=useState(data);
    const eraseTour=(tourId)=>{
        var copyTours=[];
        for (var i=0;i<toursData.length;i++){
            if (toursData[i]['id']==tourId)
                continue;
            copyTours.push(toursData[i]);
        }
        setToursData(copyTours);
    }
    const resetTours=()=>{
        setToursData(data);
    }

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
            console.log('times up');
        },2000)
    },[isLoading]);

    return (
        <>
        {isLoading && <LoadingScreen/>}
        {isLoading || <ToursList data={toursData} eraseTour={eraseTour} resetTours={resetTours}/>}
        </>
    )
}

export default MainScreen;