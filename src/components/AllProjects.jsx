import Link from "next/link"

const getData = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/AllProject")
  if (!res.ok) {
    throw new Error("AllProject API Calling Falied!")
  }
  return res.json()
}



const AllProjects = async () => {
  const projects = await getData()


  return (
    <section className='pt-16 pb-20'>
      <div className="container">
        <div className="content">
          <p className='tagline_text'>All Project</p>
          <h2 className="sub_heading mt-4 max-w-[500px]">Better Agency/SEO Solution At Your Fingertips</h2>
        </div>

        <div className="projects_container grid grid-cols-2 gap-8 mt-12">

          {
            projects.map(porject =>
              <Link key={projects.id} href={""}>
                <div className="project bg-white px-[30px] pt-10 pb-[30px] rounded-[20px] shadow-brandShadow">
                  <img className='rounded-[20px]' src={porject.image} alt="Projects images" />
                  <h4 className="font-poppins font-semibold text-[26px] text-black uppercase text-left mt-8">{porject.title}</h4>
                </div>
              </Link>
            )
          }


        </div>


      </div>
    </section>
  )
}

export default AllProjects