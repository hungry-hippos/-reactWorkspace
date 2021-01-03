import React,{useState} from 'react'
import {Button} from 'react-bootstrap'
import {IoIosCloudUpload} from 'react-icons/io'
import './Home.css'

const NavBar=(props)=>{
    const {setShowHome,setShowVision,setShowMission,setShowInspiration,setShowTestimonials,setGetStarted}=props.setters;

    const changeComp=(comp)=>{
        setShowHome(false);
        setShowVision(false);
        setShowMission(false);
        setShowInspiration(false);
        setShowTestimonials(false);
        setGetStarted(false);
        switch (comp){
            case 'home':
                setShowHome(true);
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
                setGetStarted(true);
                break;
            default:
                break;
        }
    }

    return <div id='homeNavbar'>
        <Button className='navbarBtn' onClick={()=>{changeComp("home")}}>Home</Button>
        <Button className='navbarBtn' onClick={()=>{changeComp('vision')}}>Our Vision</Button>
        <Button className='navbarBtn' onClick={()=>{changeComp('mission')}}>Our Mission</Button>
        <Button className='navbarBtn' onClick={()=>{changeComp('inspiration')}}>Our Inspiration</Button>
        <Button className='navbarBtn' onClick={()=>{changeComp('testimonials')}}>Testimonials</Button>
        <Button className='navbarBtn' onClick={()=>{changeComp('start')}}>Get Started</Button>
    </div>
}
const WelcomeIntro=()=>{
    return <div id='welcomeIntro'>
        <p>We offer alternative solutions for contact form UIs. Whether you are seeking to provide a more unique and spicy template for your applications and contact forms, or looking for a better way to screen out unmotivated clients, we got you covered.</p>
        <p>Our number one priority is steamlining business communication by delivering you only the most serious and highly-motivated people. Whether you are a business entrepreneur hunting for talent to join your team or a freelancer looking for the next gig, we filter out all the garbage applications and deliver you a literal silver platter, loaded with hand-picked premium leads that will guarantee YOU and YOUR BUSINESS go places. </p>
        <p>Stop wasting your time on pointless leads and second-tier talent. Upgrade your forms. Upgrade your opportunities.</p>
        <Button>Start</Button>
    </div>
}

const Vision=()=>{
    return <div>VISION</div>
}
const Mission=()=>{
    return <div>MISSION</div>
}
const Inspiration=()=>{
    return <div>
        <p>It's four o'clock on a Friday afternoon. You have spent the entire week reviewing resumes, calling references, planning shift scheduling, and acting as a mediator in all sorts employee conflict. The placard over your desk says "HR Specialist", but in reality, you feel like your job is to be dragged into everyone's playground drama. But it's okay because you are a people person.</p>
        <p>After having poured over 300 resumes over the last few days and conducted dozens of phone and in-person interviews, you have finally found a perfect fit for the job opening the company posted a month ago. You spent dozens of hours looking for the best candidate, and you have found finally found one: young, from a prestigious school, with plenty of professional experience, without being overqualified. You feel a sense of satisfaction and fulfillment; the refreshening breeze of having one less responsibility on your plate.</p>
        <p>As you put on your thick framed glasses and pack your laptop into your hipster-brand leather briefcase, Mr. Lumbergh, the office manager, pops his head into your office.</p>
        <p>"Great job this week getting that new hire. Unfortunately, Sally from accounting just quit. Something about finding her calling in some Greek island. So if you could post a job opening for accounting before leaving today, that would be great. Great job on those TPS reports by the way".</p>
        <p>You open up the company's Indeed profile, copy and paste a generic post for an accounting job opening. You sprint accross the open floor space to avoid getting bogged down by employees asking last minute HR-related questions. You spend the next two days hanging with your dog and drinking mojitos with your S.O.</p>
        <p>But Monday morning arrives. You come back to the office, ready to tackle another week of professional opportunities and challenges. You start your computer and check the Indeed job opening you posted not even three days ago for that accounting opening Mr.Lumbergh told you about. Your jaw locks and your hands start shaking. Palms sweaty. Knees weak. Arms get heavy.</p>
        <p>"1529 resumes... in three days?... How?", you whisper.</p>
        <p>"Hey, if you could submit those TPS reports ASAP, that would be great.", Mr.Lumbergh says as he strolls past your office. Now you gotta go through all those resumes, make all those phone calls, conduct all those interviews. Just like you did the week before. And the week prior. And the week prior.</p>
        <p>"If only there was some type of software that could help me pre-screen applicants, weeding out the less motivated ones, and only feed me resumes of the most motivated and qualified ones?" is all you can wonder.</p>
    </div>
}
const Testimonials=()=>{
    return <div>TESTIMONIALS</div>
}
const GetStarted=()=>{
    return <div>GET STARTED</div>
}

const Home=()=>{
    const [showHome,setShowHome]=useState(true);
    const [showVision, setShowVision]=useState(false);
    const [showMission,setShowMission]=useState(false);
    const [showInspiration,setShowInspiration]=useState(false);
    const [showTestimonials,setShowTestimonials]=useState(false);
    const [getStarted,setGetStarted]=useState(false);

    const setters={setShowHome,setShowVision,setShowMission,setShowInspiration,setShowTestimonials,setGetStarted};
    return <div id='homeMainDiv'>
        <h1 id='logo'> <IoIosCloudUpload/>  Filter Forms</h1>
        < NavBar setters={setters}/>
        {showHome && < WelcomeIntro /> }
        {showVision && <Vision />}
        {showMission && <Mission />}
        {showInspiration && <Inspiration />}
        {showTestimonials && <Testimonials />}
        {getStarted && <GetStarted/>}
    </div>

}

export default Home