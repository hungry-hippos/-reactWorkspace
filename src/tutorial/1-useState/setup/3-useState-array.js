import React from 'react';


import people from '../../../moreData.js'
import '../../../css/bdayList.css'

const Person=(props)=>{
  const {id,name,date,image}=props.data;





  return   <section className='person'>
            <img src={image} alt=''/>
            <div className='info'>
              <h4>{name}</h4>
              <h5>{date}</h5>
            </div>
          </section>

}



const BirthdayList=()=>{
  var [friends,setFriends]=React.useState(people);
  const deletePerson=(key)=>{
    console.log(key);
    var copyArr=[];
    for (var i=0;i<friends.length;i++){
      if (friends[i]['id']===key)
        continue;
      copyArr.push(friends[i]);
    }
    setFriends(copyArr);
}

  return (
      <div className='container'>
        <section id='title'>BDAY LIST</section>
          {friends.map((personEntry)=>{
            return (<>
              <Person data={personEntry} />
              <button className='btn nameBtn' onClick={()=>{deletePerson(personEntry.id)}}>KILL</button>
              </>)
          })}
        <button className='btn' onClick={()=>{setFriends([])}}>ERASE ALL NAMES</button>
        
      </div>
  )
}

export default BirthdayList;
