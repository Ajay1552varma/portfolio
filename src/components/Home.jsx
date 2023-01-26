import React from 'react'
import { TbArrowNarrowRight } from 'react-icons/tb'
// import {Link} from 'react-scroll'
import Ajay from '../asset/ajay8.jpg'
import Typewriter from 'typewriter-effect'

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto
      flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
                <div className='flex flex-col justify-center h-screen'>
                    <h2 className='mt-10 text-4xl sm:text-7xl font-bold text-white'>
                       <Typewriter
                       onInit={(typewriter)=>{
                        typewriter
                        .typeString("I'am a  Full stack Developer")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("I am a React Developer")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("I am a Software Engineer")
                        .start();
                       }}
                       />    
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>I am Ajay Varma And I belong from 
                    Bahraich Uttar pradesh as for as my qualification is concern I have done B tech in computer science and enginnering form
                   <b> Lovely professional University </b> My Technical skills include
                   Html,css,javascript,c,c++,React JS ,Node Js, Express js ,Mongodb and git.
                    </p>
                    <div>
                        {/* <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2
                        flex items-center rounded-md bg-gradient-to-r 
                        from-cyan-500 to-blue-500 cursor-pointer'>
                            Scroll To Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <TbArrowNarrowRight size={25} className='ml-1'/>
                            </span>
                        </Link> */}
                        <a href='./ajay_resume.pdf' download="ajay_resume.pdf" className='group text-white w-fit px-6 py-3 my-2
                        flex items-center rounded-md bg-gradient-to-r 
                        from-cyan-500 to-blue-500 cursor-pointer'>
                            Download Resume
                            <span className='group-hover:rotate-90 duration-300'>
                                <TbArrowNarrowRight size={25} className='ml-1'/>
                            </span>
                        </a>
                    </div>
                </div>
                <div>
                    <img className="rounded-2xl mx-auto w-2/3 md:w-full" src={Ajay} alt="myprofile" />
                </div>
            </div>
        </div>
    )
}

export default Home