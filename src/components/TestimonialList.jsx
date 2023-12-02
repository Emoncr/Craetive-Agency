const getData = async () => {
    const res = await fetch(process.env.BASE_URL + "/api/TestimonialList")
    if (!res.ok) {
        throw new Error("TestimonialList API Calling Falied!")
    }
    return res.json()
}



const TestimonialList = async () => {
    
    const tesimonials = await getData();


    return (
        <section className='pt-16 pb-20'>
            <div className="container">
                <div className="content">
                    <p className='tagline_text'>Our Team Member</p>
                    <h2 className="sub_heading mt-4 max-w-[500px]">Check our awesome team members</h2>
                </div>
                <div className="testimonial_card_container grid grid-cols-3 gap-x-8 gap-y-10 mt-[50px]">


                    {
                        tesimonials.map(testimonial =>
                            <div key={testimonial.id} className="testimonial_card bg-white shadow-brandShadow px-6 py-12 max-w-[392px] rounded-[20px] ">
                                <div className="image_container flex items-center justify-center">
                                    <img className='rounded-[20px] w-[100px] h-[100px] object-cover' src={testimonial.image} alt="Testimonial Images" />
                                </div>
                                <p className='font-poppins font-normal text-[#9D9D9D] capitalize text-center mt-10'>{testimonial.msg}</p>
                                <h4 className='font-poppins font-semibold text-black text-[26px] uppercase text-center mt-7'>{testimonial.name}</h4>
                                <p className='font-poppins font-normal text-black mt-[10px] text-center '>{testimonial.designation}</p>
                            </div>
                        )
                    }


                </div>
            </div>
        </section>
    )
}

export default TestimonialList