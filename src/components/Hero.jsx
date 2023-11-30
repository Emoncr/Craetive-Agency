import Link from "next/link";
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/HeroList");
    if(!res.ok){
        throw new Error("HeroList Calling Fail");
    }
    return res.json();
}

const Hero = async () => {
    const data = await getData();
    return (
        <div>
            <section className='relative bg-gray-50'>
                <div className='relative pt-12 lg:pt-20 pb-20 z-10'>
                    <div className='container mx-auto px-4'>
                        <div className='flex flex-wrap -mx-4'>
                            <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center'>
                                <div className='w-full text-center lg:text-left'>
                                    <div className='max-w-md mx-auto lg:mx-0'>
                                        <h2 className='mb-3 text-4xl lg:text-5xl font-bold font-heading'>
                                            <span>
                                                 {data['title']}
                                            </span>
                                            <span className='text-green-600'>problems</span>
                                        </h2>
                                    </div>
                                    <div className='max-w-sm mx-auto lg:mx-0'>
                                        <p className='mb-6 text-gray-400 leading-loose'>
                                            {data['description']}
                                        </p>
                                        <div>
                                            <Link
                                                className='inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200'
                                                href=''>Get Started</Link>
                                            <Link
                                                className='inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200'
                                                href='#'>How it works</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/2 px-4'>
                                <div className='flex flex-wrap lg:mb-4 lg:ml-6'>
                                    <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none' src={data['image1']} alt=''/>
                                    <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none' src={data['image2']} alt=''/>
                                </div>
                                <div className='flex flex-wrap lg:mb-4 lg:mr-6'>
                                    <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none' src={data['image3']} alt=''/>
                                    <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none' src={data['image4']} alt=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;