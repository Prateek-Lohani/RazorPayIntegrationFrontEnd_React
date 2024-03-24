import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'



const Paymentsuccess = () => {
    const params = useSearchParams()[0];
  return (
    <div className='w-screen h-screen bg-white flex flex-col justify-center items-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ227FVnIa8alBxRZauhz9cw-gHSj2yYzzzUguyZfkAQg&s" alt="success" className='w-[20vw] rounded-full mb-2' />
        <p>Your Payment has been <b>Successfully Processed</b></p>
        <p>Payment RefenceId: {params}</p>
        <Link to='/'><button className='mt-[2vh] bg-blue-500 text-white px-2 py-1'>Go Back</button></Link>
    </div>
  )
}

export default Paymentsuccess