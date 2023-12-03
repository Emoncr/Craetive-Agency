const getData = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/StatList");
  if (!res.ok) {
    throw new Error("StatList Api Calling Failed")
  }
  return res.json();
}



const StatList = async () => {

  const data = await getData();

  return (
    <section className='py-10 sm:py-16'>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between  gap-[30px]">

        <div className="w-full px-[47px] py-[71px] rounded-[20px] shadow-statsShadow flex items-center justify-center flex-col  stats">
          <img src="/icons/stats.png" alt="stats image" />
          <p className='font-poppins font-semibold text-3xl text-black mt-5'>{data.followers}</p>
          <p className='font-poppins font-medium text-[16px] text-black mt-1 text-center'>Followers</p>
        </div>

        <div className="w-full px-[47px] py-[71px] rounded-[20px] shadow-statsShadow flex items-center justify-center flex-col stats">
          <img src="/icons/solved.png" alt="stats image" />
          <p className='font-poppins font-semibold text-3xl text-black mt-5'>{data.solved}</p>
          <p className='font-poppins font-medium text-[16px] text-black mt-1 text-center'>Solved Problems</p>
        </div>

        <div className="w-full px-[47px] py-[71px] rounded-[20px] shadow-statsShadow flex items-center justify-center flex-col stats">
          <img src="/icons/customer.png" alt="stats image" />
          <p className='font-poppins font-semibold text-3xl text-black mt-5'>{data.customers}</p>
          <p className='font-poppins font-medium text-[16px] text-black mt-1 text-center'>Happy Customers</p>
        </div>

        <div className="w-full px-[47px] py-[71px] rounded-[20px] shadow-statsShadow flex items-center justify-center flex-col stats">
          <img src="/icons/project.png" alt="stats image" />
          <p className='font-poppins font-semibold text-3xl text-black mt-5'>{data.projects}</p>
          <p className='font-poppins font-medium text-[16px] text-black mt-1 text-center'>Projects</p>
        </div>
      </div>
    </section>
  )
}

export default StatList