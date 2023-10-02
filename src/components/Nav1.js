import React from 'react'
const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-between bg-white backdrop-blur-sm'>
            <div>
                <ul className='md:mt-3 mt-2 ml-3 font-extrabold text-lg'>
                    <li className=' text-sm sm:text-xl text-red-500   pb-1'><a href='/'>SnapTrackr</a></li>
                    
                </ul>
            </div>
            <div className='opacity-90   md:flex'>
                <ul className='flex flex-row p-3  '>
                <li className='md:mr-5 mr-2 font-mono md:text-xl text-xs text-gray-800'><a href ='/'>HOME </a></li> 
                <li className='md:mr-5 mr-2 font-mono md:text-xl text-xs text-gray-800'><a href ='/images'>IMAGES</a> </li> 
               
                <li className='md:mr-5 mr-2 font-mono md:text-xl text-xs text-gray-800'><a href ='/About'>ABOUT </a> </li> 
                <li className='md:mr-5 mr-2 font-mono md:text-xl text-xs text-gray-800'><a href ='/Login'>LOGIN </a></li>     

                <li className='md:mr-5 mr-2 font-bold md:text-lg text-xs  bg-red-500  text-white px-3 rounded-sm'><a href ='/Signup'>SIGN UP</a> </li> 
             </ul>

            </div> 


        </div>
        <hr></hr>
    </div>
  )
}

export default Navbar