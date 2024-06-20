import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
      <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'> 
<p className='text-[#5e03fc] font-bold p-2'>IMPROVING WITH ROWING RESOURCES</p>
<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Train with confidence.</h1>
<div className='flex justify-center items-center'> 
    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Reliable information for</p>
    <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['Coaches', 'Rowers', 'Parents']} typeSpeed={120} backSpeed={140} loop/>
</div>
<p className='md:text-2x; text-xl font-bold text-gray-500'>All the most essential rowing resources you will ned in one webpage.</p>
<button className='bg-[#5e03fc] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
      </div>
    );
  };
  
  export default Hero;
