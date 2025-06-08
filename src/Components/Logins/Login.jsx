import React, {useEffect, useState} from 'react'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import './Login.css'

function Login({pageCount,setPageCount,
               hasAccount, setHasAccount,
               formData, setFormData,
               isLoggedIn, setIsLoggedIn,
}) {
  
  useEffect(()=>{
    ShowInps(pageCount)
  },[pageCount])
  const ShowInps = (pC)=>{
    document.querySelectorAll(".card input").forEach((item,index)=>{
      if(pC===index){
        item.classList.remove("hidden")
        return 
      }
      item.classList.add("hidden")
    })
  }
  const formChange = (val=0)=>{
    //Shows the previous form Input
    if(val === -1){
      setPageCount(pC=>pC+val)
      return 
    }
    const cardInp = document.querySelector(`.card #inp-${pageCount}`)
    const errorText = document.querySelector(".error-text")
    if(!cardInp.value){
      errorText.innerText = formStructure[pageCount].errorMsg
      setTimeout(()=>errorText.innerText="",2000)
      return
    }
    setFormData(fD=>{ 
      fD[formStructure[pageCount].type] = cardInp.value
      return {...fD}
      
    })
    //logs in
    if(!val){
      setPageCount(()=>0)
      setIsLoggedIn(iL=>!iL)
      return
    }
    //shows the next form input
    setPageCount(pC=>pC+val)
    
  }
    const formStructure = [
        {   
            type:"username",
            errorMsg:`Please input a Username`
        },
        {
            type:"email",
            errorMsg:`Please input a Email`
        },
        {
            type:"password",
            errorMsg:`Please input a Password`
        },
    ]
  
  return (
    <>
        <div className="grid place-content-center h-[100vh]">
          <div className='card relative rounded-2xl flex flex-col justify-center '>
              
              <div className="heading capitalize rounder text-2xl font-bold text-center pb-8" >{!hasAccount?'login':"signUp"}</div>
              {
                pageCount?
                  <button 
                    className={ `cursor-pointer absolute top-0 left-0 px-5 py-4 focus:outline-none`}
                    onClick={()=>formChange(-1)}
                  >
                    <FaArrowLeft/>
                  </button>
                :
                  ""
              }
              <div className="form flex flex-col justify-center items-start">
                  <label className="capitalize pb-5 text-2xl">{formStructure[pageCount].type}</label>
                  <input  className='rounded-full px-3 placeholder:capitalize w-[75%] mb-5' 
                          id={`inp-0`}
                          type='text' 
                          placeholder="Username"
                  />
                  <input  className='hidden rounded-full px-3 placeholder:capitalize w-[75%] mb-5' 
                          id={`inp-1`}
                          type='Email' 
                          placeholder="Email"
                  />
                  <input  className='hidden rounded-full px-3 placeholder:capitalize w-[75%] mb-5' 
                          id={`inp-2`}
                          type='Password' 
                          placeholder="Password"
                  />
                  <p className="text-red-500 text-lg italic error-text"></p>
              </div>
              <div className="nextBtn-section flex justify-end">
              {
                pageCount===formStructure.length-1?
                  <button 
                    className="LoginBtn btn"
                    onClick={()=>formChange()}
                  >
                    Login
                  </button>
                :
                  <button 
                      className="nextBtn btn"
                      onClick={()=>formChange(1)}
                  >
                    Next <FaArrowRight/>
                  </button>
              }
                    
                </div>
              {/* {hasAccount?
              :
                <div className='signUpBtn-section flex justify-end '>
                  <button className="signUpBtn btn">Sign Up</button>
                </div>
              } */}
          </div>
        </div>
    </>
  )
}
export default Login