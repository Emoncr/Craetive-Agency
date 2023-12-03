"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const SiteNavbar = () => {
    const currentPath = usePathname()

    return (
        <div className="container mx-auto absolute   transform left-1/2 -translate-x-1/2 ">
            <nav className="flex items-center justify-between py-9 relative">
                <div className="logo_container">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="nav_items">
                    <ul className="flex items-center gap-[30px] ">
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
        </div>
    );
}

export default SiteNavbar