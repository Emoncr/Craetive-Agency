import AllProjects from "@/components/AllProjects"
import Breadcrumb from "@/components/Breadcrumb"
import Subscribe from "@/components/Subscribe"

const Projects = () => {
  return (
    <>
      <div className=" pt-48 pb-20 bg-bgGray">
        <div className="container">
          <h1 className='heading'>All Project</h1>
          <div className="navigation">
            <Breadcrumb />
          </div>
        </div>
      </div>


      <AllProjects />
      <Subscribe />
    </>
  )
}

export default Projects