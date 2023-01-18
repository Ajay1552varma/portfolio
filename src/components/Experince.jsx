import React from 'react'
import css from '../asset/css.png'
import github from '../asset/github.png'
import html from '../asset/html.png'
import C from '../asset/c.png'
import javascript from '../asset/javascript.png'
import express from '../asset/exp1.jpg'
import mongodb from '../asset/mongodb.png'
import git from '../asset/git.jpg'
import cplus from '../asset/c++.png'
import node from '../asset/node.png'
import react from '../asset/react.png'
import tailwind from '../asset/tailwind.png'
const Experince = () => {
    const skills=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:3,
            src:css,
            title:'CSS',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:C,
            title:'C',
            style:'shadow-pink-500'
        },
        {
            id:6,
            src:javascript,
            title:'javascript',
            style:'shadow-pink-500'
        },
        {
            id:7,
            src:cplus,
            title:'c++',
            style:'shadow-orange-500'
        },
        {
            id:8,
            src:github,
            title:'github',
            style:'shadow-blue-500'
        },
        {
            id:9,
            src:node,
            title:'node',
            style:'shadow-red-500'
        },
        {
            id:10,
            src:react,
            title:'react',
            style:'shadow-pink-500'
        },
        {
            id:11,
            src:tailwind,
            title:'tailwind',
            style:'shadow-purple-500'
        },
        {
            id:12,
            src:git,
            title:'Git',
            style:'shadow-pink-500'
        },
        {
            id:13,
            src:express,
            title:'Express',
            style:'shadow-purple-500'
        },
        {
            id:14,
            src:mongodb,
            title:'Mongodb',
            style:'shadow-blue-500'
        },
      
    ]
  return (
    <div name="experince" className='bg-gradient-to-b from-gray-800 
    to-black w-full h-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col 
        justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4
                border-gray-500 p-2 inline'>Experiance</p>
                <p className='py-6'>There are the technologies I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3
            gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    skills.map(({id,title,src,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500
                    py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experince;