import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { PiInstagramLogoFill } from "react-icons/pi";
const SiteFooter = () => {
    return (
        <section className='bg-black pt-20 pb-8'>
            <div className="container">
                <div className="footer_items_container grid grid-cols-1 md:grid-cols-2 gap-y-10 lg:gap-y-0 lg:flex items-start justify-between">
                    <div className="logo_items">
                        <img  src="/images/logo.png" alt="logo" />
                        <p className='font_avenir font-normal text-xl text-white max-w-[320px] text-left mt-5'>Some footer text about the  Agency. Just a little description to help people understand you better</p>
                        <div className="social_links flex items-center justify-start gap-4 mt-5">



                            <Link href={"/"} className='w-10 h-10 rounded-[100px]  bg-brandGreen text-white flex items-center justify-center'>
                                <FaFacebookF />
                            </Link>



                            <Link href={"/"} className='w-10 h-10 rounded-[100px]  bg-brandGreen text-white flex items-center justify-center'>
                                <FaTwitter />
                            </Link>



                            <Link href={"/"} className='w-10 h-10 rounded-[100px]  bg-brandGreen text-white flex items-center justify-center'>
                                <FaLinkedinIn />
                            </Link>



                            <Link href={"/"} className='w-10 h-10 rounded-[100px]  bg-brandGreen text-white flex items-center justify-center'>
                                <PiInstagramLogoFill />
                            </Link>
                        </div>
                    </div>
                    <div className="quick_links ">
                        <div className="links_tittle">
                            <p className=' font-poppins font-semibold text-xl text-white text-left '>Quick Links</p>
                        </div>
                        <div className="links mt-4 flex flex-col items-start justify-start gap-6">
                            <Link href={"/services"} className=' font_avenir font-normal text-lg text-white hover:text-brandOrange duration-300'>Services</Link>

                            <Link href={"/services"} className=' font_avenir font-normal text-lg text-white hover:text-brandOrange duration-300'>Portfolio</Link>

                            <Link href={"/services"} className=' font_avenir font-normal text-lg text-white hover:text-brandOrange duration-300'>About Us </Link>

                            <Link href={"/services"} className=' font_avenir font-normal text-lg text-white hover:text-brandOrange duration-300'>Contact Us</Link>
                        </div>
                    </div>
                    <div className="address">
                        <div className="links_tittle">
                            <p className=' font-poppins font-semibold text-xl text-white text-left '>Address</p>
                        </div>
                        <p className='font_avenir font-normal text-xl text-white text-left mt-6 max-w-[250px]'>
                            Design Agency Head Office.
                            Airport Road
                            United Arab Emirate
                        </p>
                    </div>
                </div>


                <div className="copy_rights mt-16">
                    <p className='font_avenir font-normal text-xl text-white text-left'>Copyright Design Agency 2022</p>
                </div>
            </div>
        </section>
    )
}

export default SiteFooter