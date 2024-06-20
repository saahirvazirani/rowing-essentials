import React from 'react'
import RowingCalculator from '../assets/RowingCalculator.png'
import TestStrategy from '../assets/TestStrategy.png'
import TPandRR from '../assets/TPandRR.png'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'> 
<div className='max-w-[1240px] mx-auto grid  md:grid-cols-3 gap-8'> 

<div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> 
<img className='w-20 mx-auto mt-[-3rem] bg-white' src={RowingCalculator} alt="RowingCalculator" />
<h2 className='text-2xl font-bold text-center py-8'>Rowing Calculators</h2>
<p className='text-center text-4xl font-bold'>Free</p>
<div className='text-center font-medium'> 
<p className='py-2 border-b mx-8 mt-8'>3 Links</p>
<p className='py-2 border-b mx-8'>Calculate Power/Split </p>
<p className='py-2 border-b mx-8'>Set Goals For Yourself</p>
</div>
<button className='bg-[#5e03fc] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>View Resource</button>
</div> 

<div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'> 
<img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={TestStrategy} alt="2k Test Strategy" />
<h2 className='text-2xl font-bold text-center py-8'>2k Test Strategies</h2>
<p className='text-center text-4xl font-bold'>Free</p>
<div className='text-center font-medium'> 
<p className='py-2 border-b mx-8 mt-8'>3 Links</p>
<p className='py-2 border-b mx-8'>Optimize Your Mental</p>
<p className='py-2 border-b mx-8'>Optimize Your 2k</p>
</div>
<button className='bg-black text-[#5e03fc] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>View Resource</button>
</div>

<div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'> 
<img className='w-20 mx-auto mt-[-3rem] bg-white' src={TPandRR} alt="Training Plans and Race Results" />
<h2 className='text-2xl font-bold text-center py-8'>Training Plans and Race Results</h2>
<p className='text-center text-4xl font-bold'>Free</p>
<div className='text-center font-medium'> 
<p className='py-2 border-b mx-8 mt-8'>4 Links</p>
<p className='py-2 border-b mx-8'>Better Training</p>
<p className='py-2 border-b mx-8'>Better Results</p>
</div>
<button className='bg-[#5e03fc] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>View Resource</button>
</div>

    </div>
        </div>
    )
}

export default Cards

//56:21 