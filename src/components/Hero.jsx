import Brand from "./Brand";

const getData = async () => {
    const res = await fetch(process.env.BASE_URL + "/api/HeroList");
    if (!res.ok) {
        throw new Error("HeroList Calling Failed");
    }
    return res.json();
}

const Hero = async () => {
    const data = await getData();
    const { title, description, image1, image2, image3, image4 } = data;
    
    return (
        <section className=" hero_bg pt-36 pb-9">
            <div >
                <div className="grid grid-cols-2 items-center container mx-auto ">
                    <div className="content_container">
                        <h1 className="leading-[65px] text-[50px] font-bold font_poppins max-w-[550px] text-left ">{title}</h1>
                        <p className="font_avenir text-lg font-normal text-black max-w-[472px] text-left">{description}</p>
                        <button
                            className="font-poppins font-normal text-lg text-white mt-[50px] bg-brandGreen px-[30px] py-5 rounded-[16px] hover:bg-brandGreen/90 duration-300"
                        >
                            Get Started
                        </button>
                    </div>
                    <div className='w-full  px-4'>
                        <div className='flex flex-wrap '>
                            <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-lg' src={image1} alt='hero image' />
                            <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-lg' src={image2} alt='hero image' />
                        </div>
                        <div className='flex flex-wrap '>
                            <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-lg' src={image3} alt='hero image' />
                            <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-lg' src={image4} alt='hero image' />
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