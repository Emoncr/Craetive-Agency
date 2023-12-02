import Breadcrumb from '@/components/Breadcrumb'


const Layout = ({ children }) => {
    return (
        <main>
            <div className="team_layout pt-48 pb-20 bg-bgGray">
                <div className="container">
                    <h1 className='heading'>Testimonial List</h1>
                    <div className="navigation">
                        <Breadcrumb/>
                    </div>
                </div>
            </div>
            {children}
        </main>
    )
}

export default Layout