import { useState } from 'react';
import { reOrderUsers } from './components/utils/reOrderUsers'

import { Header } from './components/Header'
import { TitleAndSwitch } from './components/TitleAndSwitch'
import { Footer } from './components/Footer'

import GlobalStyle from './global/global'

export function App() {

  const users = [
    { id:1, name: "Tyler Jones"},
    { id:2, name: "Jones Mar"},
    { id:3, name: "Jimmy Handrix"},
    { id:4, name: "Relampago Marquinhos"},
    { id:5, name: "Tatiane Moraes"},
    { id:6, name: "Kelvin Musselli"}
   ]

  const [usersList, setUsersList] = useState(reOrderUsers(users));

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <TitleAndSwitch 
        users={ usersList } 
        setUsersList={ setUsersList } 
        storage={ users } />
      <Footer/>
    </>    
  );
}

