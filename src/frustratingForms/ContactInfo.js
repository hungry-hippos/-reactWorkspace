import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import "./ContactInfo.css"


const ContactInfo=()=>{
    var [address,setAddress]=useState('');
    var [domain,setDomain]=useState('');
    var [phone,setPhone]=useState('');
    var [isUppercase,setIsUppercase]=useState(true);
    

    const changeAddress=(e)=>{
        const inputVal=e.target.value;
        var newVal="";
        //if user used backspace, update by erasing left-most char. Else, add newest char as left-most char
        if (inputVal.length<address.length){
            for (var i=1;i<address.length;i++){
                newVal+=address[i];
            }
        }else{
            const newestChar=inputVal[inputVal.length-1];
            newVal=newestChar+address;
        }
        setAddress(newVal);
    }

    const changeDomain=(e)=>{
        var inputVal=e.target.value;

        //case where user deletes input value
        if (inputVal.length<domain.length){
            setDomain(inputVal);
            return;
        }

        var newDomain="";
        if (isUppercase){
            //find the changed character on the string. Compare inputVal with domain.
            for (var i=0;i<inputVal.length;i++){
                if (inputVal[i]===domain[i]){
                    newDomain+=inputVal[i];
                }else{
                    var diffChar=inputVal[i];
                    newDomain=newDomain+diffChar.toUpperCase();

                    for (var t=i;t<domain.length;t++){
                        newDomain+=domain[t];
                    }
                    break;
                }
            }
            setIsUppercase(false);
        }else{
            newDomain=inputVal;
            setIsUppercase(true);
        }
        setDomain(newDomain);
    }

    const generatePhone=()=>{

        var number="";
        for (var i=0;i<10;i++){
            var digit=Math.floor((Math.random()*10));
            number+=digit;
        }
        const areaCode=number[0]+number[1]+number[2];
        const firstDigitSet=number[3]+number[4]+number[5];
        const secondDigitSet=number[6]+number[7]+number[8]+number[9];
        number="("+areaCode+") "+firstDigitSet+"-"+secondDigitSet;
        
        setPhone(number);

        document.getElementById('contactThisIsIt').style.opacity="1";
        document.getElementById('contactGenerate').textContent='RETRY';
    }

    const unveilBottom=()=>{
        document.getElementById('contactInfoMain').style.height="420px";
        setTimeout(()=>{document.getElementById('confirmationBottom').style.opacity="1";
        document.getElementById('contactThisIsIt').style.display='none';
            },1000)
        document.getElementById('contactThisIsIt').style.opacity='0';
    }

    const showErrorMsg=()=>{
        document.getElementById('wrongCodeMessage').classList.remove('invisible');
    }
    const hideErrorMsg=()=>{
        document.getElementById('wrongCodeMessage').classList.add('invisible');
    }

    const submitInfo=()=>{
        const address=document.getElementById('address').value;
        const dom=document.getElementById('domain').value;
        const email=address+'@'+dom;
        document.getElementById('emailField').textContent=email;
    }


    return <div id='contactInfoMain'>
        <div id="contactTitle">Contact Info</div>
        <hr id='contactHr'/>
                
        <div id='contactEmailForm'>
            <label htmlFor='address'>Email: </label>
            <input type='text' id='address' value={address} onChange={(e)=>changeAddress(e)}></input>
            <label htmlFor='domain'>@</label>
            <input type='text' id='domain' value={domain} onChange={(e)=>changeDomain(e)}></input>
        </div>
        <div id='contactPhoneForm'>
            <label htmlFor='phone'>Phone: </label>
            <input type='text' id='phone' value={phone} disabled></input>
            <Button variant='outline-dark' id='contactGenerate' onClick={generatePhone}>GENERATE</Button>
        </div>
        
        <Button variant='outline-primary' id='contactThisIsIt' onClick={unveilBottom}>This is my number</Button>

        <div id='confirmationBottom'>
            <div id='SMSverification'>
                <div id='SMStext'>Please verify your phone number. Enter the 4 digit SMS verification code you received.</div>
                <div id='disclaimer'>* Standard rates and fees may apply</div>
            </div>
            

            <div id='confirmationBtns'>
                <input type='text' id='SMScode'></input>
                <div id='wrongCodeMessage' className='invisible'>Wrong code <  AiOutlineCloseCircle onClick={hideErrorMsg}/></div>
                <Button id='confirmationSubmit' onClick={showErrorMsg}>SUBMIT</Button>
                <Button variant='outline-dark' id='confirmationSkip' onClick={submitInfo}>SKIP THIS STEP</Button>
            </div>
        </div>

    </div>
}

export default ContactInfo