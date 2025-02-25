import React from 'react'

function Navigation() {
    return (
        <div>
            <nav className='flex justify-between h-20 items-center mt-2'>
                <div className='logo ml-5 p-3'>
                    <img src="/images/brand_logo.png" alt="logo " />
                </div>
                <ul className='flex font-bold'>
                    <li className='mr-10 text-black'><a className='hover:text-white' href="#">Menu</a></li>
                    <li className='mr-10 text-black'><a className='hover:text-white' href="#">Location</a></li>
                    <li className='mr-10 text-black'><a className='hover:text-white' href="#">About</a></li>
                    <li className='mr-10 text-black'><a className='hover:text-white' href="#">Contact</a></li>
                </ul>
                <button className='bg-[#C01521] text-white cursor-pointer mr-5 p-3 w-20 hover:bg-[#FEE5E4] hover:text-black rounded-3xl'>
                    Login
                </button>
            </nav>
        </div>
    )
}

export default Navigation
