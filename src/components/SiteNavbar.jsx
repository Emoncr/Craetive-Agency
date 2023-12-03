"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";



const SiteNavbar = () => {
    const currentPath = usePathname()
    const [mobileActive, setMobileActive] = useState(true)

    return (
        <div className="container mx-auto absolute   transform left-1/2 -translate-x-1/2 ">

            {/* NAVITEMS FOR DESKTOP  */}
            <nav className="lg:flex items-center hidden  justify-between py-9 relative">
                <div className="logo_container">
                    <img src="/images/logo.png" alt="logo" />
                </div>

                <div className="nav_items">
                    <ul className="lg:flex items-center gap-[30px] hidden   md:text-xs  md:gap-4 lg:text-sm xl:gap-[30px] xl:text-base ">
                        <li>
                            <Link
                                href={"/"}
                                className={`${currentPath === "/" ? "text-brandGreen border-b border-brandGreen" : "text-black"} p-[10px] text-center  font-poppins font-medium capitalize `}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/team"}
                                className={`${currentPath === "/team" ? "text-brandGreen border-b border-brandGreen" : "text-black"} p-[10px] text-center font-poppins font-medium capitalize `}
                            >
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/services"}
                                className={`${currentPath === "/services" ? "text-brandGreen border-b border-brandGreen" : "text-black"} p-[10px] text-center font-poppins font-medium capitalize `}
                            >
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/projects"}
                                className={`${currentPath === "/projects" ? "text-brandGreen border-b border-brandGreen" : "text-black"} p-[10px] text-center font-poppins font-medium capitalize `}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/testimonials"}
                                className={`${currentPath === "/testimonials" ? "text-brandGreen border-b border-brandGreen" : "text-black"} p-[10px] text-center font-poppins font-medium capitalize `}
                            >
                                Testimonials
                            </Link>
                        </li>

                        <li>
                            <Link
                                href={""}
                                className="font-poppins  font-medium text-black py-[10px] px-6 border-brandGreen border rounded-lg hover:border-transparent hover:bg-brandGreen duration-300 hover:text-white"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="font-poppins  font-medium text-white py-[10px] px-6 bg-brandGreen border border-transparent rounded-lg hover:bg-transparent hover:border-brandGreen duration-300 hover:text-black "
                                href={""}
                            >

                                Register
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>



            {/* NAV FOR MOBILE  */}
            <nav className="flex items-center lg:hidden justify-between py-9 relative">
                <div className="logo_container">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="menuBtn">
                    <button className="text-brandGreen text-2xl" onClick={() => setMobileActive(!mobileActive)}>
                        {mobileActive ? <IoClose className="text-red-700" /> : <IoMenu  />}
                    </button>
                </div>
                {
                    mobileActive &&
                    <ul className="bg-greenLite absolute text-lg top-20 w-full pt-7 pl-8 pb-16 grid grid-cols-1 gap-5 rounded-lg transition-all duration-300 shadow-md shadow-greenLite">
                        <li>
                            <Link
                                href={"/"}
                                className={`${currentPath === "/" ? "text-brandGreen" : "text-black"} p-[10px] text-center  font-poppins font-medium capitalize `}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/team"}
                                className={`${currentPath === "/team" ? "text-brandGreen " : "text-black"} p-[10px] text-center font-poppins font-medium capitalize `}
                            >
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/services"}
                                className={`${currentPath === "/services" ? "text-brandGreen " : "text-black"} p-[10px] text-center font-poppins font-medium capitalize `}
                            >
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/projects"}
                                className={`${currentPath === "/projects" ? "text-brandGreen " : "text-black"} p-[10px] text-center font-poppins font-medium capitalize `}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/testimonials"}
                                className={`${currentPath === "/testimonials" ? "text-brandGreen" : "text-black"} p-[10px] text-center font-poppins font-medium capitalize `}
                            >
                                Testimonials
                            </Link>
                        </li>

                        <li className="my-5">
                            <Link
                                href={""}
                                className="font-poppins  font-medium text-black py-[10px] px-6 border-brandGreen border rounded-lg hover:border-transparent hover:bg-brandGreen duration-300 hover:text-white"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="font-poppins  font-medium text-white py-[10px] px-6 bg-brandGreen border border-transparent rounded-lg hover:bg-transparent hover:border-brandGreen duration-300 hover:text-black "
                                href={""}
                            >

                                Register
                            </Link>
                        </li>

                    </ul>
                }
            </nav>


        </div>
    );
}

export default SiteNavbar