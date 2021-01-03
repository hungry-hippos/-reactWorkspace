import React, {useState,useEffect} from 'react'
import Robot from './Robot'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsCheckCircle} from 'react-icons/bs'
import {Button} from 'react-bootstrap'
import './Summary.css'

const Summary=(props)=>{
    const [dataArr,setDataArr]=useState([]);
    const {showRobot,setShowRobot}=props.robot;

    const editFields=()=>{
        const inputs=document.getElementsByTagName('input');
        for (let i=0;i<inputs.length;i++){
            inputs[i].removeAttribute('disabled');
            inputs[i].addEventListener('mouseenter',(e)=>{
                e.target.classList.toggle('hovered');
            })
            inputs[i].addEventListener('mouseleave',(e)=>{
                e.target.classList.toggle('hovered');
            })
        }

    }
    useEffect(()=>{
        const dataNodes=document.getElementsByClassName('dataInputField');
        var dataString=[];
        for (let i=0;i<dataNodes.length;i++){
            dataString.push(dataNodes[i].textContent);
        }
        setDataArr(dataString);
    },[])
    
    return <div id='summaryMain'>
        <h1 id='summaryTitle'>Review Your Info</h1>
        <hr id='summaryTitleHr'></hr>
    
    <table id='summaryTable'>
    <tbody>
      <tr>
        <td>First Name</td>
        <td> <input type='text' defaultValue={dataArr[0]} disabled/></td>
      </tr>
      <tr>
        <td>Last Name</td>
        <td> <input type='text' defaultValue={dataArr[1]} disabled/></td>
      </tr>
      <tr>
        <td>Date of Birth</td>
        <td><input type='text' defaultValue={dataArr[2]} disabled/></td>
      </tr>
      <tr>
        <td>Address Lng</td>
        <td><input type='text' defaultValue={dataArr[3]} disabled/></td>
      </tr>
      <tr>
        <td>Address Lat</td>
        <td><input type='text' defaultValue={dataArr[4]} disabled/></td>
      </tr>
      <tr>
        <td>Email</td>
        <td><input type='text' defaultValue={dataArr[5]} disabled/></td>
      </tr>
      <tr>
        <td>Phone</td>
        <td><input type='text' defaultValue={dataArr[6]} disabled/></td>
      </tr>
    </tbody>
    </table>
    
    <Button id='summaryEditBtn' onClick={editFields} variant='outline-dark' style={{fontWeight:'bold'}}><AiOutlineEdit/>  Edit</Button>
    <Button id='summarySubmitBtn' onClick={()=>{setShowRobot(true)}} variant='outline-primary' style={{fontWeight:'bold'}}><BsCheckCircle/>  Submit</Button>
    {showRobot && <Robot />}
    </div>
}

export default Summary