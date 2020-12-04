import React,{useState,useEffect} from 'react';

const UsersList=()=>{
  var [users,setUsers]=useState([]);
  const url='https://api.github.com/users';

  useEffect(()=>{
    fetch(url)
    .then((userData)=>{
      return userData.json();
    })
    .then((parsedData)=>{
      setUsers(parsedData);
    })
    .then(()=>{console.log(users)});
  },[])

  
  return <React.Fragment>
    <section className='namesList'>

      <button onClick={()=>{console.log(users)}}>VIEW USERS</button>

      {users.map((user)=>{
        const {login,avatar_url,id}=user;
        return <div key={id}>
          <div>{login}</div>
          <img src={avatar_url} alt=''/>
        </div>
      })}

    </section>
  </React.Fragment>
}





export default UsersList;