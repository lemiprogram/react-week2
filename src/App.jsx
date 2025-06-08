import React,{ useState } from 'react'
import Login from './Components/Logins/Login'
import HomePage from './Components/HomePage/HomePage'

function App() {
  const [pageCount, setPageCount] = useState(0)
  const [hasAccount, setHasAccount] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formData,setFormData] = useState({
          username:'',
          email:'',
          password:'',
  
      })
  return (
    <>
      {
        !isLoggedIn?
          <Login 
            pageCount={pageCount} setPageCount={setPageCount}
            hasAccount={hasAccount} setHasAccount={setHasAccount}
            formData={formData} setFormData={setFormData}
            isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
          />
        :
          <HomePage
            formData={formData}
          />
      }
    </>
  )
}

export default App
