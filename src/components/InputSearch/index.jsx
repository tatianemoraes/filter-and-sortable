import { useState, useMemo } from 'react';

import { Container } from './style'

export function InputSearch({ users, setUsersList, storage }) {

  const storageUser = useMemo(() => {
    if(users.length<=6 ){
      return users
    }
  }, [users]);
  console.log(storageUser);

  const [user, setUser] = useState(''); 

  function searchUser(user) {
    setUser(user)
    const newArray = users.map(item => { 
      if(item.name.indexOf(user.charAt(0).toUpperCase() + user.slice(1)) > -1) {
       return item
       } 
    })
    const removeUndefined = newArray.filter(function( element ) {
      return element !== undefined;
   });
   if(user === "") { 
     setUsersList(storage)
  } else {
    setUsersList(removeUndefined)
  }
  }

  return (
    <Container>
      <input 
        type="text"
        onChange={(event) => searchUser(event.target.value) }
        value={ user }
      />
    </Container>
  )
}