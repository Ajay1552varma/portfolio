import React from 'react'
import {FaInstagram,FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    const links=[
        {
        id:1,
        icon:(
          <>
          <FaTwitter size={20}/>
          </>
        ),
        href:'https://twitter.com/AjayVer08455100',
        style:'rounded-tr-md'
      },
      {
        id:2,
        icon:(
          <>
          <FaInstagram size={20}/>
          </>
        ),
        href:'https://www.instagram.com/_btwitsajay_/',
      },
      {
        id:3,
        icon:(
          <>
          <FaFacebook size={20}/>
          </>
        ),
        href:'https://www.facebook.com/profile.php?id=100021750132813',
        style:'rounded-tr-md'
      },
      {
        id:4,
        icon:(
          <>
          <FaLinkedin size={20}/>
          </>
        ),
        href:'https://linkedin.com/in/ajay-varma-profile',
        style:'rounded-br-md'
      },
    ]
  return (
    <div className='bg-gradient-to-b from-blue-600 to-gray-900 w-full text-white md:h-full'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
           
        <footer className='text-sm inset-x-0 bottom-0 p-2 flex justify-between'>
                    <div>
                        © Copyright 2014, All Rights Reserved to Ajay Varma
                    </div>
                
                <div className='flex space-x-2'>
                   {
                    links.map(({id,links,href,style,icon})=>(
                        <a key={id} href={href} target="_blank"
                        rel="noreferrer">
                            {icon}
                        </a>
                     ))
                   }
                </div>
        </footer>
        </div>
    </div>
  )
}

export default Footer