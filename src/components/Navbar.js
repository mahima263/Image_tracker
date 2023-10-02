import React from 'react'
const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-between bg-slate-600 backdrop-blur-sm'>
            <div>
                <ul className='md:mt-3 mt-2 ml-3 font-extrabold text-lg'>
                    <li className=' text-sm sm:text-xl text-white absolute  mb-11 pb-1'><a href='/'>SnapTrackr</a></li>
                    
                </ul>
            </div>
            <div className='opacity-80   md:flex'>
                <ul className='flex flex-row p-3  '>
                <li className='md:mr-5 mr-2 font-mono md:text-xl text-xs text-white'><a href ='/'>HOME </a></li> 
                <li className='md:mr-5 mr-2 font-mono md:text-xl text-xs text-white'><a href ='/images'>IMAGES</a> </li> 
               
                <li className='md:mr-5 mr-2 font-mono md:text-xl text-xs text-white'><a href ='/About'>ABOUT </a> </li> 
                <li className='md:mr-5 mr-2 font-mono md:text-xl text-xs text-white'><a href ='/Login'>LOGIN </a></li>     

                <li className='md:mr-5 mr-2 font-bold md:text-lg text-xs  bg-white  text-slate-600 px-3 rounded-sm'><a href ='/Signup'>SIGN UP</a> </li> 
             </ul>
            </div> 


        </div>
    </div>
  )
}

export default Navbar