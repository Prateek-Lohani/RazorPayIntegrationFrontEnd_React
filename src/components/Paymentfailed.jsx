import React from 'react'
import { Link } from 'react-router-dom'


const Paymentfailed = () => {
  return (
    <div className='w-screen h-screen bg-white flex flex-col justify-center items-center'>
        <img src="data:image/png;base64,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" alt="success" className='w-[40vw] rounded-full' />
        <p>OOPS!! Your Payment has been <b>Failed</b></p>
        <Link to='/'><button className='mt-[2vh] bg-blue-500 text-white px-2 py-1'>Go Back</button></Link>
    </div>
  )
}

export default Paymentfailed