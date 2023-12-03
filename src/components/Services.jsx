
const getData = async () => {
    const res = await fetch(process.env.BASE_URL + "/api/AllService")
    if (!res.ok) {
        throw new Error("AllService API Calling Falied!")
    }
    return res.json()
}

const Services = async () => {

    const servicesData = await getData();



    return (
        <section className='pt-16 pb-20'>
            <div className="container">
                <div className="content">
                    <p className='tagline_text'>Our All Services</p>
                    <h2 className="sub_heading mt-4 max-w-[500px]">We Provide BestWeb design services</h2>
                </div>


                <div className="service_card_container grid grid-cols-1 md:grid-cols-2 gap-8  mt-[50px]">

                    {
                        servicesData.map(service => {
                            return (
                                <div key={service.id} className="service_card bg-white cursor-pointer shadow-brandShadow max-w-[604px] rounded-[20px] mx-auto px-9 pt-10 pb-11">
                                    <div className="card_content">
                                        <h4 className='font-poppins font-semibold text-[26px] text-black uppercase'>{service.title}</h4>
                                        <p className='font-poppins font-normal text-[#9D9D9D] capitalize mt-5'>{service.des}</p>
                                    </div>
                                    <div className="service_images_container mt-14  ">
                                        <div className="imgaes flex items-center justify-between flex-row lg:flex-row lg:gap-8 gap-4">


                                            <img className=" rounded-lg w-2/3 h-full object-cover  max-w-[358px] max-h-[164px]" src={service.image1} alt="services image" />

                                            <img className=" rounded-lg h-[164px] w-1/3 lg:w-[143px] object-cover" src={service.image2} alt="services image" />

                                        </div>


                                        <div className="imgaes flex items-center justify-between flex-row lg:flex-row lg:gap-8 gap-2 mt-5">


                                            <img className="rounded-lg w-1/3 lg:w-[257px] object-cover h-[263px]" src={service.image3} alt="services image" />


                                            <img className="rounded-lg w-2/3 lg:w-[248px] object-cover h-[263px]" src={service.image4} alt="services image" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </section>
    )
}

export default Services