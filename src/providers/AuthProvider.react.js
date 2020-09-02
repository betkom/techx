import React, { useState, useEffect, createContext } from 'react'
import firebase, { auth } from '../firebase'

export const authContext = createContext({currentUser: null})

const AuthProvider = ({value, children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      const userRef = firebase.database().ref('users').child(userAuth.uid)
        userRef.on('value', (snapshot) => {
          const user = snapshot.val()
          setCurrentUser({id: userAuth.uid, ...user})
        })
    });
  },[])
  return <authContext.Provider value={currentUser}>{children}</authContext.Provider>
}

export default AuthProvider