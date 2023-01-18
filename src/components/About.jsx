import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-full bg-gradient-to-b
    from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold 
          inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>I am Ajay Verma from bahraich uttar pradesh
         My hobbies include playing cricket and listining to music moreover I am good 
         team palyer. 
        </p>
        <br />
        <h1 className='text-3xl font-bold'>Internship/Work</h1><br/>
        <p className='text-xl'>I Have done Internship with wipro for the four months
         in these technology stack React js , Express js , Node js , Mongodb (MERN), I have 
         develop few projects like Social media application,news website and have learned 
         many more things.
        </p>
      </div>
    </div>
  )
}

export default About