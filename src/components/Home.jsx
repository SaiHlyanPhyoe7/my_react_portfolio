import React from 'react';
import blob from '../img/blob.svg'
import svg from '../img/svg.jpg'

const Home = () => {
    return (
        <section className='container'>
            <div className=" justify-content-center vh-100 row flex-md-row-reverse">
                <div className="col-lg-5 text-center">
                    <img src={svg} alt="hero_image" className='img-height mt-hero-svg ms-lg-5 animate__animated animate__fadeInRight animate__delay-1s w-100 mb-5'/>
                </div>
                <div className="col-lg-7 text-lg-start lh-1">
                    <h1 className='mt-h1 mb-4 animate__animated animate__fadeInRight animate__delay-0.5s'>Hi! I'm Sai Hlyan Phyoe                     <i className="bi bi-person ms-2"/>
                    </h1>
                    <h3 className='text-yellow mb-4 animate__animated animate__fadeInRight animate__delay-1s'>UI/UX Designer</h3>
                    <p className='lh-p w-75 animate__animated animate__fadeInRight animate__delay-2s'>
                        Lorem ipsum dolor sit amet, consectetur aolorum esse illum impedit in, laboriosam magni nemo, optio sed, similique. Blanditiis itaque laudantium, necessitatibus odio quia repellat voluptatem.
                    </p>
                    <div className="row">
                        <div className="col-lg-6 col-12 mb-3">
                            <div className="row">
                                <h2 className='text-yellow-no-gra animate__animated animate__fadeInRight animate__delay-3s'>
                                    <i className="bi bi-envelope me-2"/>
                                    Email <span className='font-sz'>account..</span></h2>
                                <p className='text-black-50 ms-3 ps-3 animate__animated animate__fadeInRight animate__delay-3s mt-1'>saihlyan.phyoe7@gmail.com</p>
                            </div>
                            <div className="row mt-1">
                                <button className='btn btn-bg-yellow btn-ms-cs px-lg-3 w-50 text-white animate__animated animate__fadeInRight animate__delay-3s'>
                                    <i className="bi bi-person-lines-fill me-2"/>
                                    Contact now</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 mb-3">
                            <div className="row">
                                <h2 className='text-pink animate__animated animate__fadeInRight animate__delay-4s'>
                                    <i className="bi bi-github me-2"/>
                                    Github <span className='font-sz'>username</span>..</h2>
                                <p className='text-black-50 ms-3 ps-3 animate__animated animate__fadeInRight animate__delay-4s mt-1'>SaiHlyanPhyoe7</p>
                            </div>
                            <div className="row mt-1">
                                <button className='btn btn-bg-pink btn-ms-cs px-lg-3 w-50 text-white animate__animated animate__fadeInRight animate__delay-4s'>
                                    Explore Now
                                    <i className="bi bi-three-dots ms-2"/>
                                </button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;