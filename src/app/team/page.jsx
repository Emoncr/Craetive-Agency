import Breadcrumb from "@/components/Breadcrumb";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";

const TeamPage = () => {
  return (
    <>
      <div className=" pt-48 pb-20 bg-bgGray">
        <div className="container">
          <h1 className='heading'>Team</h1>
          <div className="navigation">
            <Breadcrumb />
          </div>
        </div>
      </div>


      <Team />
      <Subscribe />
    </>
  )
}

export default TeamPage