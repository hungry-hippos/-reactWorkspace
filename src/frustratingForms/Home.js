import React,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {Carousel} from 'react-bootstrap'
import {IoIosCloudUpload} from 'react-icons/io'
import disruptionDen from "../assets/pictures/home/disruptionDenClear.png"
import techTussle from "../assets/pictures/home/techTussleClear.png"
import weirdWebWrangle from "../assets/pictures/home/weirdWebWrangleClear.png"
import christina from "../assets/pictures/home/christina.jpg"
import ceo from "../assets/pictures/home/ceo.jpg"
import hipster from "../assets/pictures/home/hipster.jpg"
import homeText from "./HomeTextArray"
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
        <Button variant='outline-dark' className='homeNavbarBtn' onClick={()=>{changeComp('testimonials')}}>Home</Button>
        <Button variant='outline-dark' className='homeNavbarBtn' onClick={()=>{changeComp("about")}}>Who We Are</Button>
        <Button variant='outline-dark' className='homeNavbarBtn' onClick={()=>{changeComp('vision')}}>Our Vision</Button>
        <Button variant='outline-dark' className='homeNavbarBtn' onClick={()=>{changeComp('mission')}}>Our Mission</Button>
        <Button variant='outline-dark' className='homeNavbarBtn' onClick={()=>{changeComp('inspiration')}}>Our Inspiration</Button>
        <Button variant='outline-primary' className='homeNavbarBtn' onClick={()=>{changeComp('start')}}>Get Started</Button>
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

                event.target.lastElementChild.style.top='480px';
            })
        }
    },[])
    return <div id="podiumMain">
        <div id='secondCard' className='awardCard'>
            <div id='denDiv'><img src={disruptionDen} alt='' style={{height:'150px',width:'120px',display:'block',margin:'10% auto'}}/></div>
            <div className='awardText' id='leftTextCard' style={{width:'95%',left:'2.5%'}}>Winner of the highly coveted <br/><span style={{fontStyle:'italic'}}>Disruption Den Cup</span><br/> of the 2019 West Coast Tech Olympics.</div>
        </div>
        <div id='firstCard' className='awardCard'>
            <div id='tussleDiv'><img src={techTussle} alt='' style={{height:'150px',width:'150px',display:'block',margin:'10% auto'}}/></div>
            <div className='awardText' id='centralTextCard'>Last-man standing in <br/>Gold Mansack's<br/> <span style={{fontStyle:'italic'}}>2019 International Tech Tussle.</span></div>
        </div>
        <div id='thirdCard' className='awardCard'>
            <div id='wrangleDiv'><img src={weirdWebWrangle} alt='' style={{height:'150px',width:'120px',display:'block',margin:'10% auto'}}/></div>
            <div className='awardText' id='rightTextCard'>Champ of the world-famous <span style={{fontStyle:'italic'}}>Weird Web Wrangle Elite Champshionship</span> <br/>in 2020.</div>
        </div>
    </div>
}
function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

const Testimonials=()=>{

    const getStarted=()=>{
        document.getElementById('minigameSideBar').click();
    }
    return <div id='homeBody'>
        <Carousel id='testimonialsCarousel'>
                        <Carousel.Item>
                        <div className='wrapper'><img src={christina} alt='' style={{width:'870px',height:'650px',position:'relative',top:'-30px'}}/></div>
                            <Carousel.Caption>
                            <p style={{fontSize:'23px',fontFamily:'Merriweather',width:'380px',color:'black',position:'relative',top:'-70px',left:'-30px',lineHeight:'1.8'}}>"I absolutely adore Filter Forms. The quality of my business leads has never been higher. I have not missed a single deal in months" </p>
                            <p style={{fontSize:'18px',fontFamily:'Merriweather',color:'black',position:'relative',top:'-70px',left:'-30px',fontStyle:'italic'}}>-Sally, global mango merchant</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='wrapper'><img src={ceo} alt='' style={{width:'1100px',height:'800px',position:'relative',top:'-30px', left:'-300px', transform:'scaleX(-1)'}}/></div>
                            <Carousel.Caption>
                            <p style={{fontSize:'22px',fontFamily:'Merriweather',color:'black',position:'relative',top:'-100px',left:'-50px',width:'600px',boxSizing:'border-box'}}>"As a start-up CEO, I can't waste any time going over resumes. Thanks to Filter Forms, I spend less time doing HR stuff, and more time doing CEO stuff."</p>
                            <p style={{fontSize:'18px',fontFamily:'Merriweather',color:'black',position:'relative',top:'-90px',left:'170px',fontStyle:'italic'}}>-Brad, CEO of CEONation</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='wrapper'><img src={hipster} alt='' style={{width:'1100px',height:'750px',position:'relative',top:'-30px',left:'-150px'}}/></div>
                            <Carousel.Caption>
                            <p style={{fontSize:'23px',fontFamily:'Merriweather',color:'black',position:'relative',top:'-100px',right:'-220px',width:'350px',boxSizing:'border-box'}}>"Filter Forms has disrupted this industry. The game will never be the same"</p>
                            <p style={{fontSize:'18px',fontFamily:'Merriweather',color:'black',position:'relative',top:'-100px',right:'-280px',width:'350px',boxSizing:'border-box',fontStyle:'italic'}}>-Betsy, from accounting</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
        <div id='carouselWrapper'></div>
        <div id='awardsDiv'>
            <FadeInSection>
                <p style={{fontSize:"25px",fontFamily:"Montserrat",color:'#dae0e5',textAlign:'center',margin:'90px 0 50px 0'}}>The <span style={{fontWeight:'bold', color:'#d39e00'}}>award-winning</span> movement that has <span style={{fontWeight:'bold',color:'#d39e00'}}>disrupted</span> the online-form industry.</p>
                <Podium />
            </FadeInSection>

            <FadeInSection>
                <p style={{fontSize:"25px",fontFamily:"Montserrat",color:'black',textAlign:'center',margin:'90px 0 70px 0'}}>See what the big fuss is all about.<br/>Try it out for free now.</p>
                <Button variant='outline-primary' style={{fontSize:'25px',display:'block',margin:'0 auto',border:'2px solid #007bff'}} onClick={getStarted}>GET STARTED</Button>
            </FadeInSection>
        </div>
    </div>
};

const HomeTextComp=(props)=>{
    const [title,body]=props.data;

    useEffect(()=>{
        document.getElementById('bodyContentDiv').innerHTML=body;
        document.getElementById('homeTextMainDiv').classList.add('blueBackground');
    },[])

    return <div id="homeTextMainDiv">
        <h1>{title}</h1>
        <hr style={{margin:"20px 0", borderTop:"1px solid black"}}></hr>
        <div id="bodyContentDiv"></div>
    </div>
}

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
        {showAbout && < HomeTextComp data={homeText[0]}/> }
        {showVision && <HomeTextComp data={homeText[1]}/>}
        {showMission && <HomeTextComp data={homeText[2]}/>}
        {showInspiration && <HomeTextComp data={homeText[3]}/>}
        {showTestimonials && <Testimonials />}
    </div>

};

export default Home