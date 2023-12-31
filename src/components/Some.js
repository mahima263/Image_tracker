import React,{ useState,useEffect} from 'react'
import axios from 'axios'
const App = () => {

const [data,setData]=useState([]);
const [val,setVal]=useState([]);
 
 useEffect(() => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=animation`).then((res)=>{setData(res.data.results)})


 
}, []);

const image =()=>{
  axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=${val}`).then((res)=>{setData(res.data.results)})
}

  return (
    <div>
        <p className='text-center text-slate-600 font-bold text-xs md:text-xl mt-4 mb-4'>Explore Various Categories</p>
                    <div className='opacity-80   '>
                <ul className='grid grid-cols-2 md:grid-cols-4 mb-2 mt-2 gap-2  '>
                <li className='md:mr-5 mr-2 font-medium md:text-lg text-xs  border border-md border-gray-300 rounded-sm px-3 py-1 text-gray-700 ml-5'><button onClick={()=>{axios.get("https://api.unsplash.com/search/photos?page=10&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=wallpaper").then((res)=>{setData(res.data.results)})}}>Wallpaper</button> </li> 
                <li className='md:mr-5 mr-2 font-medium md:text-lg text-xs  border border-md border-gray-300 rounded-sm px-3 py-1 text-gray-700 '><button onClick={()=>{axios.get("https://api.unsplash.com/search/photos?page=10&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=Aeroplane").then((res)=>{setData(res.data.results)})}}>Aeroplane</button>  </li> 
                <li className='md:mr-5 mr-2 font-medium md:text-lg text-xs  border border-md border-gray-300 rounded-sm px-3 py-1 text-gray-700 '><button onClick={()=>{axios.get("https://api.unsplash.com/search/photos?page=10&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=people").then((res)=>{setData(res.data.results)})}}>People</button>  </li> 
                <li className='md:mr-5  mr-2 font-medium md:text-lg text-xs  border border-md border-gray-300 rounded-sm px-3 py-1 text-gray-700 '><button onClick={()=>{axios.get("https://api.unsplash.com/search/photos?page=10&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=Programming").then((res)=>{setData(res.data.results)})}}>Programming</button>  </li> 
                <li className='md:mr-5 ml-5 mr-2 font-medium md:text-lg text-xs  border border-md border-gray-300 rounded-sm px-3 py-1 text-gray-700 '><button onClick={()=>{axios.get("https://api.unsplash.com/search/photos?page=10&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=Film").then((res)=>{setData(res.data.results)})}}>Film</button> </li>     
                <li className='md:mr-5 mr-2 font-medium md:text-lg text-xs  border border-md border-gray-300 rounded-sm px-3 py-1 text-gray-700 '><button onClick={()=>{axios.get("https://api.unsplash.com/search/photos?page=10&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=Photography").then((res)=>{setData(res.data.results)})}}>Photography</button>  </li> 
                <li className='md:mr-5 mr-2 font-medium md:text-lg text-xs  border border-md border-gray-300 rounded-sm px-3 py-1 text-gray-700 '><button onClick={()=>{axios.get("https://api.unsplash.com/search/photos?page=10&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=Animals").then((res)=>{setData(res.data.results)})}}>Animals</button>  </li> 
                <li className='md:mr-5 mr-2 font-medium md:text-lg text-xs  border border-md border-gray-300 rounded-sm px-3 py-1 text-gray-700 '><button onClick={()=>{axios.get("https://api.unsplash.com/search/photos?page=10&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=Food").then((res)=>{setData(res.data.results)})}}>Food</button> </li> 
                <li className='md:mr-5 ml-5 mr-2 font-medium md:text-lg text-xs  border border-md border-gray-300 rounded-sm px-3 py-1 text-gray-700 '><button onClick={()=>{axios.get("https://api.unsplash.com/search/photos?page=10&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=Business").then((res)=>{setData(res.data.results)})}}>Business</button> </li>     
                <li className='md:mr-5 mr-2 font-medium md:text-lg text-xs  border border-md border-gray-300 rounded-sm px-3 py-1 text-gray-700 '><button onClick={()=>{axios.get("https://api.unsplash.com/search/photos?page=10&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=Health").then((res)=>{setData(res.data.results)})}}>Health</button> </li>     
                <li className='md:mr-5 mr-2 font-medium md:text-lg text-xs  border border-md border-gray-300 rounded-sm px-3 py-1 text-gray-700 '><button onClick={()=>{axios.get("https://api.unsplash.com/search/photos?page=10&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=blog").then((res)=>{setData(res.data.results)})}}>Blog</button> </li>     
                <li className='md:mr-5 mr-2 font-medium md:text-lg text-xs  border border-md border-gray-300 rounded-sm px-3 py-1 text-gray-700 '><button onClick={()=>{axios.get("https://api.unsplash.com/search/photos?page=10&per_page=8&client_id=JJEqtqwDIAe49O0Gk-6uQXePh88gNJW8SuMisZWsvG0&query=Electronics").then((res)=>{setData(res.data.results)})}}>Electronics</button> </li>     

             </ul>
            </div> 

<div>
    <div className='grid grid-rows-1 place-items-center mt-5'><div className=''>
    <input type="text" className="border border-lg border-gray-400 pl-2 pr-11 py-2 rounded-sm" placeholder='Explore SnapTrackr... ' value={val} onChange={(e)=>setVal(e.target.value)}  />
      <button className='bg-[#fa3d3d] text-white font-bold  px-3  mt-2 rounded-sm ml-2 ' onClick={image}><p className='py-2'>Search</p></button></div></div>
    </div>
      <div className=''>
        {data.length>0?<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center p-6'> {data.map((dat)=><div>
          <img className='w-96 h-60 border border-2xl border-gray-300' src={dat.urls.small} alt="hii"/>
        </div>)}</div>:<div className='grid grid-cols-1 place-items-center'>
<div class="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20 p-11">Accessing all the images<p>Please wait!</p></h5>

    <p class="font-normal text-gray-900 dark:text-gray-400 opacity-20 px-11 py-2"> We collaborate with all the creators around the world</p>
    <p class="font-normal text-gray-900 dark:text-gray-400 opacity-20 px-11 py-2"> we have over #million curated Photographs</p>

    <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <svg aria-hidden="true" class="w-32 h-32 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span class="sr-only">Loading...</span>
    </div>
</div>
</div>}
      </div>
      <p className='text-right text-lg font-bold pr-11 '><a  href='/images'>More..</a></p>
    </div>
  )
}

export default App