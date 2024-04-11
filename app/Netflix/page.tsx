'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import img from '/public/C.png'
import img2 from '/public/D.png'
import img3 from '/public/F.png'
import icon from '/public/icon.gif'
import img4 from '/public/boxshot.png'
import img5 from '/public/H.png'
import img6 from '/public/I.png'
import { CiGlobe } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";

function Netflix() {

const [open,setOpen]=useState(false)
const [opene,setOpene]=useState(false)
const [openo,setOpeno]=useState(false)
const [openoo,setOpenoo]=useState(false)
const [openooo,setOpenooo]=useState(false)
const [openoooo,setOpenoooo]=useState(false)

  return (
    <>
   <section className='w-[100%] h-[100vh] bg-[url("/A.jpeg")] bg-center bg-cover '>
     <div className=' w-[100%] h-[100vh]  bg-gradient-radial from-transparent to-black  '>


      <header className='max-w-[1170px] mx-auto'>
      <div className='grid sm:grid-cols-2 grid-cols-[30%_auto]  p-[15px] items-center'>

           <figure className=''>
             <Image src={img} alt={''} width={200} height={200} className='w-[200px] '/>
           
           </figure>

            <div className='flex justify-end items-center gap-x-2'>
                 <div className='relative '>
                    <CiGlobe className='text-white absolute top-[8px] left-[3px] text-lg font-medium '/>
                    <select name="" id="" className='bg-black text-white   border-2 border-white sm:px-[18px] sm:py-[6px] rounded-xl font-medium md:px-[18px] flex-wrap py-[6px] pl-[18px] '>
                        <option value="">English</option>
                        <option value="">Urdu</option>
                    </select>
                 </div>
                 <button className='bg-[#ff0800] px-[14px] hover:bg-red-700 duration-300 py-[6px] rounded-xl font-medium text-white shadow-md'>
                    Sign in
                 </button>
            </div>
       </div>
      </header>

      
      <div className='max-w-[1100px] mx-auto py-[80px] sm:py-[130px] md:py-[150px] px-[30px] text-center'>
         <div><h1 className='text-white md:text-6xl sm:text-5xl text-4xl tracking-tighter font-bold'>Unlimited movies, TV shows, and more</h1>
         <p className='text-3xl font-medium text-white py-3 sm:py-6'>Watch anywhere. Cancel anytime.</p>
         <p className='text-2xl font-medium text-white py-3 sm:py-4 tracking-tight'>Ready to watch? Enter your email to create or restart your membership.</p></div>

         <div className=' mt-4 md:mt-5 flex flex-col md:flex-row items-center gap-x-4 justify-center'>
           <div className=''> <input type="text" placeholder='Email address' className='sm:p-4 p-3 text-xl bg-transparent  border-2 rounded-lg text-white border-gray-300 sm:w-96 w-64' /></div>
            <div className=' mt-4 md:mt-0'><button className='bg-[#ff0800]  rounded-lg font-semibold text-white shadow-md py-4 pl-6 pr-20 duration-300 hover:bg-red-700 md:font-bold md:text-2xl text-xl'>Get Started</button></div>
         </div>
      </div>
     </div>
       
   </section>

     

    <section className='w-[100%] pt-16 md:pt-28 md:pb-16 pb-10 bg-black border-t-[10px]  border-gray-800'>
        <div className='max-w-[1200px]   mx-auto md:grid grid-cols-[50%,50%] gap-x-8 items-center  '>
           
            <div>
             <h1 className='text-3xl font-extrabold text-white leading-loose md:text-5xl md:text-start text-center'>Enjoy on your TV</h1>
             <p className='text-white md:text-3xl  md:text-start  tracking-tighter px-3 md:px-0 text-xl py-4 md:py-6 text-center  '>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>


            <figure className=' '>
              <div className='relative '><Image src={img2} alt='' width={300} height={250} className=' mx-auto ' />
              <video src="/E.mp4" autoPlay muted controls loop  className='absolute bottom-[34%] left-[28%] w-[45%] h-[52%] mx-auto bg-cover bg-center   '></video></div>
            </figure>



        </div>
    </section>
             


    <section className='w-[100%] pt-16 md:pt-28 md:pb-28 pb-10 bg-black border-t-[10px]  border-gray-800'>
        <div className='max-w-[1200px]   mx-auto md:flex flex-row-reverse  gap-x-8 items-center  '>
           
            <div className='basis-1/2 '>
             <h1 className='text-3xl font-extrabold px-3 text-white md:leading-[60px] text-center md:text-5xl md:text-start'>Download your <br /> shows to watch <br /> offline</h1>
             <p className='text-white md:text-3xl leading- px-3 text-xl py-4 md:py-6 md:text-start text-center '>Save your favorites easily and always have something to watch.</p>
            </div>



             <div className='relative basis-1/2 md:-mt-8 mt-16'>
              
             
              <div className='animate-bounce  '><Image src={img3} alt='' width={350} height={300} className=' mx-auto ' />

                </div> 
             
              <div className='bg-black  absolute grid grid-cols-[80%_auto] items-center bottom-[15%] left-[15%] w-[70%] border-2 border-gray-500 p-2 rounded-xl'>
                   <div className='flex items-center '>
                    <Image src={img4} alt='' width={35} height={35}/>
                    <div><h2 className='text-white md:font-semibold font-medium sm:px-4 px-1 md:py-1   '>Stranger Things</h2>
                     <p className='text-[#0071C6] sm:px-4 px-1'>Downloading...</p>
                    </div>
                   </div>
                   <div className='pl-4'>
                    <Image src={icon} alt='' width={50} height={50} className=''/>
                   </div>
                  
              </div>
                
             </div>



        </div>
    </section>  



      
    <section className='w-[100%] pt-16 md:pt-28 md:pb-16 pb-10 bg-black border-t-[10px]  border-gray-800'>
        <div className='max-w-[1200px]   mx-auto md:grid grid-cols-[50%,50%] gap-x-8 items-center  '>
           
            <div>
             <h1 className='text-3xl font-extrabold text-white leading-loose md:text-5xl text-center md:text-start'>Watch everywhere</h1>
             <p className='text-white md:text-3xl tracking-tighter px-3 md:px-0 text-xl py-4 md:py-6 text-center md:text-start '>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>


            <div className='md:-mt-14 '>
              <div className='relative '><Image src={img5} alt='' width={400} height={400} className=' mx-auto  ' />
              <video src="/E.mp4" autoPlay muted controls loop  className='absolute bottom-[34%] left-[28%] w-[50%] h-[40%] mx-auto bg-cover bg-center   '></video></div>
            </div>



        </div>
    </section> 




    <section className='w-[100%] pt-16 md:pt-28 md:pb-16 pb-10 bg-black border-t-[10px]  border-gray-800'>
        <div className='max-w-[1200px]   mx-auto md:flex flex-row-reverse gap-x-8 items-center  '>
           
            <div className="basis-1/2">
             <h1 className='text-3xl font-extrabold text-white leading-loose md:text-5xl text-center md:text-start'>Create profiles for kids</h1>
             <p className='text-white md:text-3xl tracking-tighter px-3 text-xl py-4 md:py-6 text-center md:text-start md:leading-16 '>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>


            <figure className="basis-1/2">
              <div className='relative '><Image src={img6} alt='' width={600} height={600} className=' mx-auto  ' />
              </div>
            </figure>



        </div>
    </section>   

      

   
   <section className='w-[100%] bg-black border-t-[10px] border-gray-800'>
     <div className='max-w-[1170px] grid grid-cols-1 mx-auto'>
        <div className='p-8 md:p-12 text-center'>
          <h1 className='text-white text-3xl sm:text-5xl lg:text-7xl font-extrabold'>Frequently Asked Questions</h1>
        </div>

        <div className='py-6  px-10'>
           <div className='py-1 ' onClick={()=>setOpen(!open)}>
             <div className='border p-4 bg-gray-600 hover:bg-gray-700 cursor-pointer duration-300'>
                <div className='grid grid-cols-[80%_auto] items-center'>
                    <div><h1 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>What is Netflix?</h1></div>
                    <div className=' ml-5  flex flex-row-reverse '> 
                    <LuPlus className=' text-white  text-3xl sm:text-4xl md:text-4xl lg:text-5xl  '/>
                   
                    </div>
                  </div>
                 </div>  
            </div>

            <div className={`scale-y-0 h-0 duration-300  origin-top ${open && "scale-y-100 h-auto duration-300"}`}>
            <div className='text-white p-4 border-2 border-white bg-gray-600 mb-2 '>
                <p className='text-xl sm:text-2xl md:text-3xl'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
            </div>
            </div>


           <div className='py-1'  onClick={()=>setOpene(!opene)}>
             <div className='border p-4 bg-gray-600 hover:bg-gray-700 cursor-pointer duration-300'>
                <div className='grid grid-cols-[80%_auto] items-center'>
                    <div><h1 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>How much does Netflix cost?</h1></div>
                    <div className=' ml-5  flex flex-row-reverse '> 
                    <LuPlus className=' text-white  text-3xl sm:text-4xl md:text-4xl lg:text-5xl  '/>
                   
                    </div>
                  </div>
                 </div>  
            </div>

            <div className={`scale-y-0 h-0 duration-300  origin-top ${opene && "scale-y-100 h-auto duration-300"}`}>
            <div className='text-white p-4 border-2 border-white bg-gray-600 mb-2 '>
                <p className='text-xl sm:text-2xl md:text-3xl'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
            </div>
            </div>
            
           <div className='py-1 ' onClick={()=>setOpeno(!openo)}>
             <div className='border p-4 bg-gray-600 hover:bg-gray-700 cursor-pointer duration-300'>
                <div className='grid grid-cols-[80%_auto] items-center'>
                    <div><h1 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>Where can I watch?</h1></div>
                    <div className=' ml-5  flex flex-row-reverse '> 
                    <LuPlus className=' text-white  text-3xl sm:text-4xl md:text-4xl lg:text-5xl  '/>
                   
                    </div>
                  </div>
                 </div>  
            </div>

            <div className={`scale-y-0 h-0 duration-300  origin-top ${openo && "scale-y-100 h-auto duration-300"}`}>
            <div className='text-white p-4 border-2 border-white bg-gray-600 mb-2 '>
                <p className='text-xl sm:text-2xl md:text-3xl'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
            </div>
            </div>
            
           <div className='py-1 '  onClick={()=>setOpenoo(!openoo)}>
             <div className='border p-4 bg-gray-600 hover:bg-gray-700 cursor-pointer duration-300'>
                <div className='grid grid-cols-[80%_auto] items-center'>
                    <div><h1 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>How do I cancel?</h1></div>
                    <div className=' ml-5  flex flex-row-reverse '> 
                    <LuPlus className=' text-white  text-3xl sm:text-4xl md:text-4xl lg:text-5xl  '/>
                   
                    </div>
                  </div>
                 </div>  
            </div>

            <div className={`scale-y-0 h-0 duration-300  origin-top ${openoo && "scale-y-100 h-auto duration-300"}`}>
            <div className='text-white p-4 border-2 border-white bg-gray-600 mb-2 '>
                <p className='text-xl sm:text-2xl md:text-3xl'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
            </div>
            </div>
            
           <div className='py-1 '  onClick={()=>setOpenooo(!openooo)}>
             <div className='border p-4 bg-gray-600 hover:bg-gray-700 cursor-pointer duration-300'>
                <div className='grid grid-cols-[80%_auto] items-center'>
                    <div><h1 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>What can i watch on Netflix?</h1></div>
                    <div className=' ml-5  flex flex-row-reverse '> 
                    <LuPlus className=' text-white  text-3xl sm:text-4xl md:text-4xl lg:text-5xl  '/>
                   
                    </div>
                  </div>
                 </div>  
            </div>

            <div className={`scale-y-0 h-0 duration-300  origin-top ${openooo && "scale-y-100 h-auto duration-300"}`}>
            <div className='text-white p-4 border-2 border-white bg-gray-600 mb-2 '>
                <p className='text-xl sm:text-2xl md:text-3xl'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
            </div>
            </div>
            
           <div className='py-1'  onClick={()=>setOpenoooo(!openoooo)}>
             <div className='border p-4 bg-gray-600 hover:bg-gray-700 cursor-pointer duration-300'>
                <div className='grid grid-cols-[80%_auto] items-center'>
                    <div><h1 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>is Netflix good for kids?</h1></div>
                    <div className=' ml-5  flex flex-row-reverse '> 
                    <LuPlus className=' text-white  text-3xl sm:text-4xl md:text-4xl lg:text-5xl  '/>
                   
                    </div>
                  </div>
                 </div>  
            </div>

            <div className={`scale-y-0 h-0 duration-300  origin-top ${openoooo && "scale-y-100 h-auto duration-300"}`}>
            <div className='text-white p-4 border-2 border-white bg-gray-600 mb-2 '>
                <p className='text-xl sm:text-2xl md:text-3xl'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
            </div>
            </div>
            




        <div className='max-w-[1100px] mx-auto    text-center'>
          <p className='text-2xl font-medium text-white py-3 sm:py-4 tracking-tight'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>

        <div className=' mt-4 md:mt-5 flex flex-col md:flex-row items-center gap-x-4 justify-center'>
           <div className=''> <input type="text" placeholder='Email address' className='sm:p-4 p-3 text-xl bg-transparent  border-2 rounded-lg text-white border-gray-300 sm:w-96 w-64' /></div>
            <div className=' mt-4 md:mt-0'><button className='bg-[#ff0800]  rounded-lg font-semibold text-white shadow-md py-4 pl-6 pr-20 duration-300 hover:bg-red-700 md:font-bold md:text-2xl text-xl'>Get Started</button></div>
         </div>
            
            
            
        </div>
     </div>
   </section>



   <section className='w-[100%] bg-black border-t-[10px] border-gray-800'>
      <div className='text-white w-[80%] mx-auto'>
          <div className='pt-20 md:px-14 '>
            <h2 className='text-lg'>Questions? Contact us.</h2>
          </div>
          <div className=' grid md:grid-cols-4 py-6 sm:grid-cols-2 grid-cols-1'>
            <div className=' md:md:px-14'>
              <ul className=''>
                <li className='underline text-lg py-1  cursor-pointer'>FAQ</li>
                <li className='underline text-lg py-1  cursor-pointer'>Investor Relations</li>
                <li className='underline text-lg py-1  cursor-pointer'>Privacy</li>
                <li className='underline text-lg py-1  cursor-pointer'>Speed Test</li>
              </ul>
            </div>
            <div className=' md:px-14'>
              <ul className=''>
                <li className='underline text-lg py-1  cursor-pointer'>Help Center</li>
                <li className='underline text-lg py-1  cursor-pointer'>Jobs</li>
                <li className='underline text-lg py-1  cursor-pointer'>Cookie Preferences</li>
                <li className='underline text-lg py-1  cursor-pointer'>Legal Notices</li>
              </ul>
            </div>
            <div className=' md:px-14'>
              <ul className=''>
                <li className='underline text-lg py-1 cursor-pointer '>Account</li>
                <li className='underline text-lg py-1  cursor-pointer'>Ways to Watch</li>
                <li className='underline text-lg py-1  cursor-pointer'>Corporate Information</li>
                <li className='underline text-lg py-1  cursor-pointer'>Only on Netflix</li>
              </ul>
            </div>
            <div className=' md:px-14'>
              <ul className=''>
                <li className='underline text-lg py-1  cursor-pointer'>Media Center</li>
                <li className='underline text-lg py-1  cursor-pointer'>Terms of Use</li>
                <li className='underline text-lg py-1  cursor-pointer'>Contact Us</li>
                
              </ul>
            </div>
             
            
            <div className='grid grid-cols-1'>
                <div className=' md:px-14 py-6'>
                <div className='relative '>
                    <CiGlobe className='text-white absolute top-[8px] left-[3px] text-lg font-medium '/>
                    <select name="" id="" className='bg-black text-white   border-2 border-white sm:px-[18px] sm:py-[6px] rounded-lg font-medium md:px-[18px] flex-wrap py-[6px] pl-[18px] '>
                        <option value="">English</option>
                        <option value="">Urdu</option>
                    </select>
                 </div>
                 </div>


                 <p className='md:px-14'>Netflix Pakistan</p>
                 </div>
          </div>
      </div>
   </section>
   
    </>
  )
}

export default Netflix
