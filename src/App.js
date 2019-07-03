import React, { useState } from 'react'
import FirebaseProvider from './firebase/FirebaseProvider'
import AuthorizedApp from './AuthorizedApp'
import PublicWebsite from './website/PublicWebsite'
import './App.css'

export const AppContext = React.createContext()

function App () {
  const [context, setContext] = useState({})
  return (
    <AppContext.Provider value={{ ...context, setContext }}>
      <FirebaseProvider>
        {context.user ? <AuthorizedApp /> : <PublicWebsite />}
      </FirebaseProvider>
    </AppContext.Provider>
  )
}

export default App
