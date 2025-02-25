import React from 'react'

function Hero() {
    return (
        <div>
            <main className='hero flex justify-evenly items-center mt-10'>
                <div className="heroContent">
                    <h1 className='uppercase text-8xl  font-bold '>Your feet <br /> deserve <br /> the best</h1>
                    <p className='uppercase mt-10 font-medium'>Your feet deserve the best and we're here to <br /> help you with our shoes.</p>
                    <div className="heroButtons mt-10">
                        <button className='bg-[#C01521] text-white cursor-pointer mr-5 p-4 hover:bg-[#FEE5E4] hover:text-black rounded-3xl'>Shop Now</button>
                        <button className='bg-[#C01521] text-white cursor-pointer mr-5 p-4 hover:bg-[#FEE5E4] hover:text-black rounded-3xl'>Category</button>
                    </div>
                    <div className="icons flex mt-10">
                        <a href="https://www.amazon.in/" target='_blank'><img className='mr-5 bg-white p-1 rounded-2xl' src="/images/amazon.png" alt="" /></a>
                        <a href="https://www.flipkart.com/" target='_blank'><img className='bg-white p-1 rounded-2xl' src="/images/flipkart.png" alt="" /></a>
                    </div>
                </div>
                <div className="heroImage">
                    <img src="/images/hero-image.png" alt="" />
                </div>
            </main>
        </div>
    )
}

export default Hero
