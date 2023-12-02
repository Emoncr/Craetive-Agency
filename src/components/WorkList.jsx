const getData = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/WorkList");
  if (!res.ok) {
    throw new Error("WorkList Api Calling Failed")
  }
  return res.json();
}




const WorkList = async () => {
  const workLists = await getData();

  return (
    <section className='py-16 bg-white'>
      <div className="container">
        <div className="section_content">
          <p className='mb-4 tagline_text'>Work List</p>
          <h2 className='sub_heading max-w-[500px]'>
            We provide the Perfect Solution to your business growth
          </h2>
        </div>
        <div className="grid grid-cols-3 items-center  mt-11 ">

          {
            workLists.map(workList =>
              <div key={workList.step} className='py-[50px] px-[30px] card max-w-[380px] '>
                <img src="/icons/Heart.png" alt="what we do" />
                <h3 className='font-poppins font-semibold text-2xl text-left text-black mt-4'>
                  {workList.title}
                </h3>
                <p className='font_avenir font-normal text-lg text-black mt-4'>
                  {workList.des}
                </p>
                <button className='font_avenir text-lg font-normal rounded-lg   bg-transparent hover:bg-greenLite  duration-300 px-5 py-[15px] mt-11'>
                  <span className='flex items-center gap-2'>
                    Learn More
                    <img src="/icons/arrow.png" alt="icon" />
                  </span>
                </button>
              </div>
            )
          }




        </div>
      </div>
    </section>
  )
}

export default WorkList