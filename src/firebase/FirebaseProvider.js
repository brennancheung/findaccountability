import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import { assoc } from 'ramda'

const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

const firebaseConfig = {
  apiKey: 'AIzaSyAyyvTM7b5BKIyRcXHpOyLfHm-cyyo4bRM',
  authDomain: 'findaccountability.firebaseapp.com',
  databaseURL: 'https://findaccountability.firebaseio.com',
  projectId: 'findaccountability',
  storageBucket: '',
  messagingSenderId: '970352823649',
  appId: '1:970352823649:web:d14e39b2557552bf'
}

const FirebaseProvider = ({ children, notLoggedIn = null }) => {
  const { setContext } = useContext(AppContext)
  const [initializing, setInitializing] = useState(true)

  const handleSignIn = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  }, [])

  const handleSignOut = useCallback(() => {
    firebase.auth().signOut()
    setContext(assoc('user', null))
  }, [setContext])

  useEffect(() => {
    const onAuthStateChanged = user => {
      setContext(assoc('user', user))
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
    firebase.auth().onAuthStateChanged(onAuthStateChanged)
    const db = firebase.firestore()
    setContext({
      db,
      firebase,
      handleSignIn: handleSignIn,
      handleSignOut: handleSignOut,
    })
    setInitializing(false)
  }, [handleSignIn, handleSignOut, setContext])

  return initializing ? <div>Loading...</div> : children
}

export default FirebaseProvider
