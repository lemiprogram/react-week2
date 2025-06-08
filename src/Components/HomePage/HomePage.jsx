import React from 'react'

function HomePage({formData}) {
  return (
    <>
        <div className="header text-2xl">Welcome {formData.username}</div>
        <ul className='ml-5'>
            <li>Username: {formData.username}</li>
            <li>Email: {formData.email}</li>
            <li>Password: {formData.password}</li>
        </ul>
    </>
)
}

export default HomePage