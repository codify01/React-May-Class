import React from 'react'

const Google = () => {
  return (
    <div>
        <nav className='mb-52'>
        <ul className='flex gap-2 text-white justify-end mr-5'>
          <li>Gmail</li>
          <li>Images</li>
          <li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
          </li>
          <li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-white rounded-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
          </li>
        </ul>
      </nav>
      <img alt="Google" className='mx-auto' height="92" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"/>
      <div className='flex justify-between items-center md:w-[30%] border border-neutral-600 py-1 px-4 rounded-full mx-auto text-neutral-500 my-8 hover:bg-neutral-700 hover:border-none hover:shadow transition duration-100'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"     className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input type="text" placeholder='' className='w-full text-gray-300 bg-transparent border-none focus:ring-transparent focus:outline-none ml-2 ' autoFocus/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>
      </div>
      <div className='flex justify-center gap-3'>
        <button className='bg-neutral-700 py-1 px-3 text-neutral-200 rounded-sm'>Google Search</button>
        <button className='bg-neutral-700 py-1 px-3 text-neutral-200 rounded-sm'>I'm feeling lucky</button>
      </div>
      <p className='text-center text-white mt-2'>
      Google offered in: <span className='text-blue-500'>Hausa Igbo Èdè Yorùbá Nigerian Pidgin</span>
      </p>
      <footer className='fixed w-full bottom-0 text-sm  md:text-md'>
        <div className='bg-black p-3 text-white'>
          <p>Nigeria</p>
        </div>
        <div className='bg-black p-3 text-white flex flex-grid-col justify-between border-t border-t-neutral-600'>
          <ul className='flex gap-5'>
            <li>About</li>
            <li>Advertising</li>
            <li>Bussiness</li>
            <li>How search works</li>
          </ul>
          <p className='hidden md:block hover:underline underline-offset-3 cursor-pointer'>Our third decade of climate action: join us</p>
          <ul className='flex gap-5'>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Setting</li>
          </ul>

        </div>

      </footer>
    </div>
  )
}

export default Google