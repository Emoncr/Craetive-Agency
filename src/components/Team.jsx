import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
const Team = () => {
  return (
    <section className='pt-16 pb-20'> 
      <div className="container">
        <div className="content">
          <p className='tagline_text'>Our Team Member</p>
          <h2 className="sub_heading mt-4 max-w-[500px]">Check our awesome team members</h2>
        </div>
        
        <div className="team_member flex items-center justify-between gap-8 mt-16">


          <div className="member max-w-[392px] mx-auto shadow-teamShadow rounded-[20px] bg-white">
            <div className="image_container relative">
              <img src="/images/team member.png" alt="tem member image" />
              <div className="social_links flex items-center justify-between bg-white py-4 px-5 shadow-teamShadow rounded-[25px] absolute bottom-8 gap-4 left-1/2 -translate-x-1/2">
                <Link className="text-[#737588] hover:text-brandOrange duration-300 " href={"/"}> <FaFacebookF /> </Link>
                <div className="line bg-[#E3E3E3] w-[1px] h-4 "></div>
                <Link className="text-[#737588] hover:text-brandOrange duration-300 " href={"/"}> <FaTwitter /> </Link>
                <div className="line bg-[#E3E3E3] w-[1px] h-4 "></div>
                <Link className="text-[#737588] hover:text-brandOrange duration-300 " href={"/"}> <FaInstagram /> </Link>
              </div>
            </div>
            <div className='pt-7 pb-12'>
              <h3 className='text-[#101A29] font-poppins text-[30px] font-semibold text-center '>Devon Lane</h3>
            </div>
          </div>



          <div className="member max-w-[392px] mx-auto shadow-teamShadow rounded-[20px] bg-white">
            <div className="image_container relative">
              <img src="/images/team member.png" alt="tem member image" />
              <div className="social_links flex items-center justify-between bg-white py-4 px-5 shadow-teamShadow rounded-[25px] absolute bottom-8 gap-4 left-1/2 -translate-x-1/2">
                <Link className="text-[#737588] hover:text-brandOrange duration-300 " href={"/"}> <FaFacebookF /> </Link>
                <div className="line bg-[#E3E3E3] w-[1px] h-4 "></div>
                <Link className="text-[#737588] hover:text-brandOrange duration-300 " href={"/"}> <FaTwitter /> </Link>
                <div className="line bg-[#E3E3E3] w-[1px] h-4 "></div>
                <Link className="text-[#737588] hover:text-brandOrange duration-300 " href={"/"}> <FaInstagram /> </Link>
              </div>
            </div>
            <div className='pt-7 pb-12'>
              <h3 className='text-[#101A29] font-poppins text-[30px] font-semibold text-center '>Devon Lane</h3>
            </div>
          </div>



          <div className="member max-w-[392px] mx-auto shadow-teamShadow rounded-[20px] bg-white">
            <div className="image_container relative">
              <img src="/images/team member.png" alt="tem member image" />
              <div className="social_links flex items-center justify-between bg-white py-4 px-5 shadow-teamShadow rounded-[25px] absolute bottom-8 gap-4 left-1/2 -translate-x-1/2">
                <Link className="text-[#737588] hover:text-brandOrange duration-300 " href={"/"}> <FaFacebookF /> </Link>
                <div className="line bg-[#E3E3E3] w-[1px] h-4 "></div>
                <Link className="text-[#737588] hover:text-brandOrange duration-300 " href={"/"}> <FaTwitter /> </Link>
                <div className="line bg-[#E3E3E3] w-[1px] h-4 "></div>
                <Link className="text-[#737588] hover:text-brandOrange duration-300 " href={"/"}> <FaInstagram /> </Link>
              </div>
            </div>
            <div className='pt-7 pb-12'>
              <h3 className='text-[#101A29] font-poppins text-[30px] font-semibold text-center '>Devon Lane</h3>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Team