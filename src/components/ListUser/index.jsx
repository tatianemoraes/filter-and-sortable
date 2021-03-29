import { useEffect, useState } from 'react';

import { Container } from './style'

export function ListUser({users, setUsersList}) {

  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    setListUser(users)
  }, [users, setUsersList])

  return (
    <Container>
      <ul>
        {listUser.map((user, index) => <li key={index}>{user.name}</li> )}
      </ul>
    </Container>
  )
}