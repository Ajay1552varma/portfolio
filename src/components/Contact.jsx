import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b
        from-black to-gray-800 p-4 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the below form to get in touch with me</p>
                </div>
                <div className='flex justify-center item-center'>
                    <form action="https://getform.io/f/5dedc00f-c94f-4143-8044-188a8e753171" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input required type="text" name='name' placeholder='Enter your Name'
                            className='p-2 bg-transparent border-2 rounded-md text-white first-letter:focus:outline-none' />
                        <input required type="email" name='email' placeholder='Enter your Email'
                            className='my-4 p-2 bg-transparent border-2 rounded-md text-white first-letter:focus:outline-none' />
                          <textarea required name="message" rows="10"
                          placeholder='Enter your message'
                            className="p-2 bg-transparent border-2 rounded-md text-white first-letter:focus:outline-none'"></textarea>
                        <button className='text-white bg-gradient-to-b
                    from-cyan-500 to-blue-500 px-6 py-3
                    my-8 mx-auto flex items-center rounded-md
                    hover:scale-110 duration-300'>Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact