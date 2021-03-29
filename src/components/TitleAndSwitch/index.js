import { useState } from 'react'
import { ListUser } from '../ListUser'
import { InputSearch } from '../InputSearch'

import { Container, Switcher } from './style'

export function TitleAndSwitch({ users, setUsersList, storage }) {

  const [checked, setChecked] = useState(false);

  function reOrder(checked) {
    setChecked(checked)
    if(checked) {
      const newArray = users.sort((a,b) => {
        if(a.name > b.name) { 
          return -1; 
        }
        if(a.name < b.name) { 
          return 1; 
        }
        return 0;
      }) 
      setUsersList(newArray)

    } else {
      const newArray = users.sort((a,b) => {
        if(a.name < b.name) { 
          return -1; 
        }
        if(a.name > b.name) { 
          return 1; 
        }
        return 0;
      })
      setUsersList(newArray)
    }
  }

  return (
    <Container>
      <div className="title">
        <h2>Usuários</h2>
        <Switcher  
          onChange={ reOrder } 
          checked={ checked }
        />
      </div>
      <InputSearch 
        users={ users } 
        setUsersList={ setUsersList } 
        storage={ storage }
      />
      <div>
        <ListUser 
          users={ users } 
          setUsersList={ setUsersList } 
      /> 
      </div>
    </Container>
  )
}