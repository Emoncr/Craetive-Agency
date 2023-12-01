import Link from "next/link";

const SiteNavbar = () => {


    return (
        <div>
            <div className="container mx-auto">
                <nav className="flex items-center justify-between py-9 relative">
                    <div className="logo_container">
                        <img src="/images/DesignAGENCY.png" alt="logo" />
                    </div>
                    <div className="nav_items">
                        <ul className="flex items-center gap-[30px] ">
                            <li>
                                <Link
                                    href={"/"}
                                    className="p-[10px] text-center text-black font-poppins font-medium capitalize "
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="p-[10px] text-center text-black font-poppins font-medium capitalize "
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="p-[10px] text-center text-black font-poppins font-medium capitalize "
                                >
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="p-[10px] text-center text-black font-poppins font-medium capitalize "
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="p-[10px] text-center text-black font-poppins font-medium capitalize "
                                >
                                    Testimonials
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={"/"}
                                    className="font-poppins  font-medium text-black py-[10px] px-6 border-brandGreen border rounded-lg hover:border-transparent hover:bg-brandGreen duration-300 hover:text-white"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="font-poppins  font-medium text-white py-[10px] px-6 bg-brandGreen border border-transparent rounded-lg hover:bg-transparent hover:border-brandGreen duration-300 hover:text-black "
                                    href={"/"}
                                >

                                    Register
                                </Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>

        </div>
    );
}

export default SiteNavbar