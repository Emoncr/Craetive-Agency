import { parseDate } from "@/utils/helper";
import Link from "next/link";

const getData = async () => {
    const res = await fetch(process.env.BASE_URL + "/api/FeaturedProject");
    if (!res.ok) {
        throw new Error("FeaturedProject Api Calling Failed")
    }
    return res.json();
}





const FeatureProject = async () => {
    const featureProjects = await getData();

    const withoutFirstProject = featureProjects.slice(2)



    return (
        <section className='pt-16 pb-20 bg-bgGreenLite'>
            <div className="container">
                <div className="feature_project_content">
                    <p className='tagline_text'>Featured Project</p>
                    <h2 className='sub_heading mt-6 max-w-[500px]'>We provide the Perfect Solution to your business growth</h2>
                </div>


                <div className="grid grid-cols-2 items-start gap-[30px] mt-[70px] projects_container">
                    <div className="first_project">
                        <div className="porject">
                            <Link href={featureProjects[0].live}  >
                                <img className="h-[531px] w-full rounded-[20px] object-cover " src={featureProjects[0].image} alt="feature project" />
                            </Link>
                            <p className="text-brandSecound/80 font_poppins font-normal text-sm mt-4">App Design - {parseDate(featureProjects[0].updated_at)}</p>
                            <h4 className="text-2xl font-bold font_poppins text-brandSecound mt-[10px]">{featureProjects[0].title}</h4>
                        </div>
                    </div>



                    <div className="other_project ">
                        <div className="grid grid-cols-2 items-start gap-[30px]">

                            {
                                withoutFirstProject.map((project, index) =>
                                    <div key={index} className="porject">
                                        <Link href={project.live}  >
                                            <img className="rounded-[20px]" src={project.image} alt="feature project" />
                                        </Link>
                                        <p className="text-brandSecound/80 font_poppins font-normal text-sm mt-4">App Design - {parseDate(project.created_at)}</p>
                                        <h4 className="text-lg font-bold font_poppins text-brandSecound text-left mt-[10px] max-w-[263px]">{project.title}</h4>
                                    </div>
                                )
                            }

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureProject