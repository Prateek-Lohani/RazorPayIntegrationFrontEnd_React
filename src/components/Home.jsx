import React from 'react'
import { items } from '../../data'
import axios from 'axios'
import { Link, redirect, redirectDocument } from 'react-router-dom'


const Home = () => {


    const handleCheckout=async(amount)=>{

        const {data:{key}}=await axios.get('https://razorpayintegrationbackend-react.onrender.com/api/apikey');

        const {data:{order}}=await axios.post('https://razorpayintegrationbackend-react.onrender.com/api/checkout',{
            amount
        })


        const options = {
            key: {key}, 
            amount: order.amount, 
            currency: "INR",
            name: order.name,
            description: "Test Transaction",
            image: "https://prateeklohani.netlify.app/favicon.png",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "https://razorpayintegrationbackend-react.onrender.com/api/paymentVerification",
            prefill: {
                "name": "Demo User",
                "email": "demo.user@example.com",
                "contact": "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };

        var razor = new window.Razorpay(options);
        razor.open();
        

       // console.log(window);
    }

  return (
    <div className='w-full py-10 min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 '>
        {items.map(item=>{
            return <div key={item.img} className='w-[50vw] flex flex-col  items-center justify-center'>
                <img src={item.img} alt={item.img}/>
                <p className='font-semibold'>{item.name}</p>
                <p className='text-center mb-1'>₹{item.price}</p>
                <button onClick={()=>handleCheckout(item.price)} className='px-3 text-center rounded py-1 bg-gray-800 text-white hover:bg-gray-500'>Buy</button>
            </div>
        })}
    </div>
  )
}

export default Home
