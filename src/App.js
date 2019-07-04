import React, { useState } from 'react'
import FirebaseProvider from './firebase/FirebaseProvider'
import AuthorizedApp from './components/AuthorizedApp'
import Login from './website/Login'
import ThemeManager from './common/ThemeManager'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

export const AppContext = React.createContext()

function App () {
  const [context, setContext] = useState({})
  return (
    <AppContext.Provider value={{ ...context, setContext }}>
      <FirebaseProvider>
        <ThemeManager>
          <Router>
            {context.user ? <AuthorizedApp /> : <Login />}
          </Router>
        </ThemeManager>
      </FirebaseProvider>
    </AppContext.Provider>
  )
}

export default App
