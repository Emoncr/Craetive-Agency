
const FeatureProject = () => {
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
                            <img src="/images/feature 1.png" alt="feature project" />
                            <p className="text-brandSecound/80 font_poppins font-normal text-sm mt-4">App Design - June 20, 2022</p>
                            <h4 className="text-2xl font-bold font_poppins text-brandSecound mt-[10px]">App Redesign</h4>
                        </div>
                    </div>
                    <div className="other_project ">
                        <div className="flex items-center justify-between gap-[30px]">
                            <div>
                                <div className="porject">
                                    <img src="/images/feature projects.png" alt="feature project" />
                                    <p className="text-brandSecound/80 font_poppins font-normal text-sm mt-4">App Design - June 20, 2022</p>
                                    <h4 className="text-lg font-bold font_poppins text-brandSecound text-left mt-[10px] max-w-[263px]">Redesign channel website landng page</h4>
                                </div>
                            </div>
                            <div >
                                <div className="porject">
                                    <img src="/images/feature projects.png" alt="feature project" />
                                    <p className="text-brandSecound/80 font_poppins font-normal text-sm mt-3">App Design - June 20, 2022</p>
                                    <h4 className="text-lg font-bold font_poppins text-brandSecound text-left mt-2 max-w-[263px]">Redesign channel website landng page</h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-[30px] mt-[30px]">
                            <div>
                                <div className="porject">
                                    <img src="/images/feature projects.png" alt="feature project" />
                                    <p className="text-brandSecound/80 font_poppins font-normal text-sm mt-4">App Design - June 20, 2022</p>
                                    <h4 className="text-lg font-bold font_poppins text-brandSecound text-left mt-2 max-w-[263px]">Redesign channel website landng page</h4>
                                </div>
                            </div>
                            <div >
                                <div className="porject">
                                    <img src="/images/feature projects.png" alt="feature project" />
                                    <p className="text-brandSecound/80 font_poppins font-normal text-sm mt-3">App Design - June 20, 2022</p>
                                    <h4 className="text-lg font-bold font_poppins text-brandSecound text-left mt-2 max-w-[263px]">Redesign channel website landng page</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureProject