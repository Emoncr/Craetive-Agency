import Breadcrumb from '@/components/Breadcrumb'
import Subscribe from '@/components/Subscribe'
import TestimonialList from '@/components/TestimonialList'

const Testimonial = () => {
    return (
        <>
            <div className="team_layout pt-48 pb-20 bg-bgGray">
                <div className="container">
                    <h1 className='heading'>Testimonial List</h1>
                    <div className="navigation">
                        <Breadcrumb />
                    </div>
                </div>
            </div>


            <TestimonialList />
            <Subscribe />
        </>
    )
}

export default Testimonial