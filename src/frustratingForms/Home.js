import React,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {Carousel} from 'react-bootstrap'
import {IoIosCloudUpload} from 'react-icons/io'
import disruptionDen from "../assets/pictures/home/disruptDen.PNG"
import './Home.css'

const NavBar=(props)=>{
    const {setShowAbout,setShowVision,setShowMission,setShowInspiration,setShowTestimonials}=props.setters;
    const {setShowHome,setShowMinigame}=props.appSetters;

    const changeComp=(comp)=>{
        setShowAbout(false);
        setShowVision(false);
        setShowMission(false);
        setShowInspiration(false);
        setShowTestimonials(false);
        switch (comp){
            case 'about':
                setShowAbout(true);
                break;
            case 'vision':
                setShowVision(true);
                break;
            case 'mission':
                setShowMission(true);
                break;
            case 'inspiration':
                setShowInspiration(true);
                break;
            case 'testimonials':
                setShowTestimonials(true);
                break;
            case 'start':
                setShowHome(false);
                setShowMinigame(true);
                break;
            default:
                break;
        }
    }

    return <div id='homeNavbar'>
        <Button variant='outline-dark' className='navbarBtn' onClick={()=>{changeComp('testimonials')}}>Home</Button>
        <Button variant='outline-dark' className='navbarBtn' onClick={()=>{changeComp("about")}}>Who We Are</Button>
        <Button variant='outline-dark' className='navbarBtn' onClick={()=>{changeComp('vision')}}>Our Vision</Button>
        <Button variant='outline-dark' className='navbarBtn' onClick={()=>{changeComp('mission')}}>Our Mission</Button>
        <Button variant='outline-dark' className='navbarBtn' onClick={()=>{changeComp('inspiration')}}>Our Inspiration</Button>
        <Button variant='outline-primary' className='navbarBtn' onClick={()=>{changeComp('start')}}>Get Started</Button>
    </div>
};
const WelcomeIntro=()=>{
    return <div className='rightText'>
        <p>We offer alternative solutions for contact form UIs. Whether you are seeking to provide a more unique and spicy template for your applications and contact forms, or looking for a better way to screen out unmotivated clients, we got you covered.</p>
        <p>Our number one priority is steamlining business communication by delivering you only the most serious and highly-motivated people. Whether you are a business entrepreneur hunting for talent to join your team or a freelancer looking for the next gig, we filter out all the subpar applications and deliver you a literal silver platter, loaded with hand-picked premium leads that will guarantee YOU and YOUR BUSINESS go places. </p>
        <p>Stop wasting your time on pointless leads and second-tier talent. Upgrade your forms. Upgrade your opportunities.</p>
        <Button>Start</Button>
    </div>
};

const Vision=()=>{
    return <div className='rightText'> 
        A world where talent-acquisition teams no longer have to sort through thousands of resumes and conduct dozens of interviews to find the right talent. A world where business can be conducted quick and efficiently, without wasting any time pursuing fruitless leads. A world where finding the brightest talent and the most motivated clients no longer resembles looking for a needle in a haystack, but rather looking for a needle in a needle warehouse. </div>
};
const Mission=()=>{
    return <div className='rightText'>
        Establish the first monopoloy in the online-form industry. Through disruptive innovation and strategic marketing, we will compete with the Big Form giants, plunder their market share, plummet their stock value, auction their assets and terminate their boards. Utilizing core business-leadership principles and cutting-edge talent-acquitision practices, we identify, hire and develop only the brightest talent, fostering a competitive and cooperative fast-paced business environment that breeds personal and profession growth, where feedback is requested and provided throughout all leadership levels and no two days are ever the same.</div>
};
const Inspiration=()=>{
    return <div className='rightText'>
        <p>It's four o'clock on a Friday afternoon. You have spent the entire week reviewing resumes, calling references, planning shift scheduling, and acting as a mediator in all sorts of employee conflict. The placard over your desk says "HR Specialist", but in reality, you feel like your job is to be dragged into everyone's playground drama. But it's okay because you are a people person.</p>
        <p>After having poured over 300 resumes over the last few days and conducted dozens of phone and in-person interviews, you have finally found a perfect fit for the job opening the company posted a month ago. You spent dozens of hours looking for the best candidate, and you have found finally found one: young, from a prestigious school, with plenty of professional and leadership experience, without being overqualified or asking for fair compensation. You feel a sense of satisfaction and fulfillment; the refreshening breeze of having one less responsibility on your plate.</p>
        <p>As you put on your thick framed glasses and pack your laptop into your hipster-brand leather briefcase, Mr. Lumbergh, the office manager, pops his head into your office.</p>
        <p>"Great job this week getting that new hire. Unfortunately, Sally from accounting just quit. Something about finding her calling in life in some Greek island. So if you could post a job opening for accounting before leaving today, that would be great. Great job on those TPS reports by the way".</p>
        <p>You open up the company's Indeed profile, copy and paste a generic post for an accounting job opening. You sprint accross the open floor space to avoid getting bogged down by employees asking last minute HR-related questions about PTO and other nonesense. You spend the next two days hanging with your Schnauzer and drinking mojitos with your S.O.</p>
        <p>But Monday morning arrives. You come back to the office, ready to tackle another week of professional opportunities and challenges. You boot your computer and check the Indeed job opening you posted not even three days ago for that accounting opening Mr.Lumbergh told you about. Your jaw locks and your hands start shaking. Palms sweaty. Knees weak. Arms get heavy.</p>
        <p>"1529 resumes... in three days?... How?", you whisper.</p>
        <p>"Hey, if you could submit those TPS reports ASAP, that would be great.", Mr.Lumbergh says as he strolls past your office. Now you gotta go through all those resumes, make all those phone calls, conduct all those interviews. Just like you did the week before. And the week prior. And the week prior.</p>
        <p>"If only there was some type of software that could help me pre-screen applicants, weeding out the less motivated ones, and only feed me resumes of the most motivated and serious ones?" is all you can wonder.</p>
    </div>
};

const Podium=()=>{

    
    useEffect(()=>{
        const images=document.getElementsByClassName('awardCard');
        for (var i=0;i<images.length;i++){
            images[i].addEventListener('mouseenter',(event)=>{
                const imageElement=event.target.firstElementChild.firstElementChild;
                console.log(imageElement.style.height);
                var height=parseInt(imageElement.style.height,10);
                var width=parseInt(imageElement.style.width,10);
                height+=25;
                width+=25;
                imageElement.style.height=height+"px";
                imageElement.style.width=width+"px";

                imageElement.style.margin="2% auto";
                event.target.firstElementChild.style.top='10px';

                event.target.lastElementChild.style.top='220px';
            })
            images[i].addEventListener('mouseleave',(event)=>{
                const imageElement=event.target.firstElementChild.firstElementChild;
                var height=parseInt(imageElement.style.height,10);
                var width=parseInt(imageElement.style.width,10);
                height-=25;
                width-=25;
                imageElement.style.height=height+"px";
                imageElement.style.width=width+"px";

                imageElement.style.margin="10% auto";
                event.target.firstElementChild.style.top='110px';

                event.target.lastElementChild.style.top='432px';
            })
        }
    },[])
    return <div id="podiumMain">
        <div id='secondCard' className='awardCard'>
            <div id='denDiv'><img src={disruptionDen} alt='' style={{height:'150px',width:'120px',display:'block',margin:'10% auto'}}/></div>
            <div className='awardText' style={{width:'95%',left:'2.5%'}}>Winner of the highly coveted <br/><span style={{fontStyle:'italic'}}>Disruption Den Cup</span><br/> of the 2019 West Coast Tech Olympics.</div>
        </div>
        <div id='firstCard' className='awardCard'>
            <div id='tussleDiv'><img src='/pictures/home/techTussle.png' alt='' style={{height:'150px',width:'150px',display:'block',margin:'10% auto'}}/></div>
            <div className='awardText'>Last-man standing in <br/>Gold Mansack's<br/> <span style={{fontStyle:'italic'}}>2019 International Tech Tussle.</span></div>
        </div>
        <div id='thirdCard' className='awardCard'>
            <div id='wrangleDiv'><img src='/pictures/home/weirdWebWrangle.png' alt='' style={{height:'150px',width:'120px',display:'block',margin:'10% auto'}}/></div>
            <div className='awardText' >Champ of the world-famous <span style={{fontStyle:'italic'}}>Weird Web Wrangle Elite Champshionship</span> <br/>in 2020.</div>
        </div>
    </div>
}
const Testimonials=()=>{
    return <div id='homeBody'>
        <Carousel id='testimonialsCarousel'>
                    <Carousel.Item>
                    <div className='wrapper'><img src='/pictures/home/christina.jpg' alt='' style={{width:'870px',height:'650px',position:'relative',top:'-30px'}}/></div>
                        <Carousel.Caption>
                        <p style={{fontSize:'23px',fontFamily:'Merriweather',width:'380px',color:'black',position:'relative',top:'-70px',left:'-30px',lineHeight:'1.8'}}>"I absolutely adore Filter Forms. The quality of my business leads has never been higher. I have not missed a single deal in months" </p>
                        <p style={{fontSize:'18px',fontFamily:'Merriweather',color:'black',position:'relative',top:'-70px',left:'-30px',fontStyle:'italic'}}>-Sally, global mango merchant</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='wrapper'><img src='/pictures/home/ceo.jpg' alt='' style={{width:'1100px',height:'800px',position:'relative',top:'-30px', left:'-300px', transform:'scaleX(-1)'}}/></div>
                        <Carousel.Caption>
                        <p style={{fontSize:'22px',fontFamily:'Merriweather',color:'black',position:'relative',top:'-100px',left:'-50px',width:'600px',boxSizing:'border-box'}}>"As a start-up CEO, I can't waste any time going over resumes. Thanks to Filter Forms, I spend less time doing HR stuff, and more time doing CEO stuff."</p>
                        <p style={{fontSize:'18px',fontFamily:'Merriweather',color:'black',position:'relative',top:'-90px',left:'170px',fontStyle:'italic'}}>-Brad, CEO of CEONation</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='wrapper'><img src='/pictures/home/hipster.jpg' alt='' style={{width:'1100px',height:'750px',position:'relative',top:'-30px',left:'-150px'}}/></div>
                        <Carousel.Caption>
                        <p style={{fontSize:'23px',fontFamily:'Merriweather',color:'black',position:'relative',top:'-100px',right:'-220px',width:'350px',boxSizing:'border-box'}}>"Filter Forms has disrupted this industry. The game will never be the same"</p>
                        <p style={{fontSize:'18px',fontFamily:'Merriweather',color:'black',position:'relative',top:'-100px',right:'-280px',width:'350px',boxSizing:'border-box',fontStyle:'italic'}}>-Betsy, from accounting</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        <div id='carouselWrapper'></div>

        <p style={{fontSize:"25px",fontFamily:"Montserrat",color:'black'}}>A glimpse into the <span style={{fontWeight:'bold'}}>movement</span> that has <span style={{fontWeight:'bold'}}>revolutionized</span> the online-form industry.</p>
        <Podium />
    </div>
};

const Home=(props)=>{
    const{setShowHome,setShowMinigame}=props.appSetters;
    const appSetters={setShowHome,setShowMinigame};

    const [showAbout,setShowAbout]=useState(false);
    const [showVision, setShowVision]=useState(false);
    const [showMission,setShowMission]=useState(false);
    const [showInspiration,setShowInspiration]=useState(false);
    const [showTestimonials,setShowTestimonials]=useState(true);

    const setters={setShowAbout,setShowVision,setShowMission,setShowInspiration,setShowTestimonials};
    
    return <div id='homeMainDiv'>
        <h1 id='logo'> <IoIosCloudUpload style={{filter: "drop-shadow(3px 3px 0px white"}}/>  Filter Forms</h1>
        < NavBar setters={setters} appSetters={appSetters}/>
        {showAbout && < WelcomeIntro /> }
        {showVision && <Vision />}
        {showMission && <Mission />}
        {showInspiration && <Inspiration />}
        {showTestimonials && <Testimonials />}
    </div>

};

export default Home