import React from 'react'
import expence from '../asset/portfolio/expence-tra.png'
import curd from '../asset/portfolio/curd.png'
import reactWeather from '../asset/portfolio/reactWeather.jpg'
import covid from '../asset/portfolio/covid.png'
import port from '../asset/portfolio/port.png'
import social from '../asset/portfolio/social.png'
const Portfolio = () => {
  const portfolio=[
    {
      id:1,
      src:curd,
      href:"https://react-curd15.netlify.app/",
      code:"https://github.com/Ajay1552varma/react-curd-app",
    },
    {
      id:2,
      src:expence,
      href:"https://expence-tracker11.netlify.app/",
      code:"https://github.com/Ajay1552varma/Expence-tracker",
    },
    {
      id:3,
      src:port,
      href:"https://ajayvarmaportfolio.netlify.app/",
      code:"https://github.com/Ajay1552varma/portfolio",
    },
    {
      id:4,
      src:covid,
      href:"https://github.com/Ajay1552varma/covid-tracker-app",
      code:"https://github.com/Ajay1552varma/covid-tracker-app",
     
    },
    {
      id:5,
      src:social,
      href:"https://github.com/Ajay1552varma/Social-media",
      code:"https://github.com/Ajay1552varma/Social-media",
    },
    {
      id:6,
      src:reactWeather,
      href:"https://github.com/Ajay1552varma/weatherapp",
      code:"https://github.com/Ajay1552varma/weatherapp",
    },
   
  ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black
    to-gray-800 w-full h-full text-white md:h-full'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'> 
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
              </div>
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
               px-12 sm:px-0'>

              {
                portfolio.map(({id,src,href,code})=>(
                  <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <img src={src} alt="" className='rounded-md
                  duration-200 hover:scale-105'/>
                  <div className='flex items-center justify-center'>
                    <a href={href} rel="noreferrer" target="_blank" className='w-1/2 px-6 py-3 m-4 duration-200
                    hover:scale-105'>Demo</a>
                   <a href={code} rel="noreferrer" target="_blank" className='w-1/2 px-6 py-3 m-4 duration-200
                    hover:scale-105'>Code</a>
                    </div>
                  </div>
                ))
                }
         </div>
        </div>
    </div>
  )
}

export default Portfolio