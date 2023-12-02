import React from 'react'

const Subscribe = () => {
    return (
        <section className='pb-36 pt-24'>
            <div className="container">
                <p className='tagline_text text-center'>SUBSCRIBE</p>
                <h2 className='sub_heading max-w-[500px] mx-auto text-center capitalize mt-5'>Subscribe to get the latest news about us</h2>
                <p className='font_avenir text-[#8B8B8B] font-medium capitalize text-center mt-1'>Please drop your email below to get daily update about what we do</p>
                <div className="imput_container max-w-[600px] mx-auto relative mt-10">
                    <input className='w-full border border-black rounded-[14px] py-5 px-4 placeholder:capitalize placeholder:text-[#8B8B8B]' placeholder='Enter your email address' type="email" />
                    <button className='bg-brandOrange py-4 px-6 rounded-[14px] font-poppins font-medium text-white absolute right-2 top-1/2 -translate-y-1/2  '>Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe