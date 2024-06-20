import React from 'react'
import progress from '../assets/progress.jpg'
const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'> 
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={progress} alt="progress" />
                <div className='flex flex-col justify-center'> 
                    <p className='text-[#5e03fc] font-bold'>2K PROGRESS</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Manage Progress</h1>
                    <p>This is where you can begin to log your 2k progression through the use of the resources on this page.</p>
                    <button className='bg-black text-[#5e03fc] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div> 

        </div>
    )

}

export default Analytics