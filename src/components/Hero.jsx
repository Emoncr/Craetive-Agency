import Link from "next/link";
import Brand from "./Brand";
async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/HeroList");
    if (!res.ok) {
        throw new Error("HeroList Calling Fail");
    }
    return res.json();
}

const Hero = async () => {
    const data = await getData();
    return (
        <section className=" hero_bg pt-36 pb-9">
            <div >
                <div className="grid grid-cols-2 items-center container mx-auto ">
                    <div className="content_container">
                        <h1 className="leading-[65px] text-[50px] font-bold font_poppins max-w-[550px] text-left ">
                            Increase Your Customers Loyalty and Satisfaction
                        </h1>
                        <p className="text-lg font-normal text-black max-w-[472px] text-left">We help businesses like yours earn more customers, standout from competitors,  make more money</p>
                        <button
                            className="font-poppins font-normal text-lg text-white mt-[50px] bg-brandGreen px-[30px] py-5 rounded-[16px] hover:bg-brandGreen/90 duration-300"
                        >
                            Get Started
                        </button>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-center gap-5">
                            <img src="/images/img 1.png" alt="hero image" />
                            <img src="/images/img 2.png" alt="hero image" />
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <img src="/images/img 3.png" alt="hero image" />
                            <img src="/images/img 4.png" alt="hero image" />
                        </div>
                    </div>
                </div>
                <div className="brand_container mt-20">
                    <Brand />
                </div>
            </div>
        </section>
    );
};

export default Hero;