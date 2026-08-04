import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Top = () => {
    const navigate = useNavigate()
    
    function GetBack(){
        if(window.history.length > 1){
            navigate(-1)
        }
        else{
            console.log("cannot get back")
        }
    }
  return (
    <div>
        <p className='text-gray-700 pt-3 pb-5'><Link to={'/viewFleetPage'}>Home</Link> {">"} <button onClick={GetBack}>Back</button></p>
    </div>
  )
}

export default Top
