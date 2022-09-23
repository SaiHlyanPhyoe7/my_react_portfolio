import React from 'react';
import blob from '../img/blob.svg'
import svg from '../img/svg.jpg'
import myPhoto from '../img/myPhoto.jpg'
import Typewriter from "typewriter-effect";

const Home = () => {

    return (
        <section className='container'>
            <div className=" justify-content-center row flex-md-row-reverse mb-lg-0 mb-5">
                <div className="col-lg-5 text-center mt-lg-5 pt-lg-3 pt-2 mt-4 animate__animated animate__zoomInDown animate__delay-1s">
                    <img src={myPhoto} alt="hero_image" className='animate__animated animate__tada animate__repeat-2 animate__delay-2s img-height mt-lg-5 mt-1 ms-lg-5 w-100 mb-5'/>
                </div>
                <div className="col-lg-7 mt-4 text-lg-start lh-1">
                    <div className="row">


                        <h1 className='ct-txt-gra mt-lg-5 h1 pt-lg-5 mt-0 pt-0 mb-4 animate__animated animate__fadeInRight animate__delay-0.5s'>
                            <Typewriter
                                onInit={(typewriter)=>{
                                    typewriter.typeString("Hi! I'm Sai Hlyan Phyoe...")
                                        .pauseFor(1000).deleteAll().typeString("Oops..").deleteAll()
                                        .typeString("But you can call me Ryan...").deleteAll()
                                        .typeString("Warmly Welcome from my Portfolio Website..").start();
                                }}
                            />
                        </h1>



                        {/*<h1 className='mt-lg-5 pt-lg-5 mt-0 pt-0 mb-4 animate__animated animate__fadeInRight animate__delay-0.5s'>Hi! I'm Sai Hlyan Phyoe<i className="bi bi-person ms-2"/>*/}
                        {/*</h1>*/}
                        <h3 className='text-yellow-no-gra mb-4 animate__animated animate__fadeInRight animate__delay-1s'>Currently Frontend Developer</h3>
                        <p className='lh-p w-75 animate__animated animate__fadeInRight animate__delay-2s'>
                            An experienced website developer specializing in websites and phone applications. Have done numerous projects involving front and back end development.
                        </p>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-xl-6 col-12 mb-3">
                                <div className="row">
                                    <h2 className='text-yellow-no-gra animate__animated animate__fadeInRight animate__delay-3s'>
                                        <i className="bi bi-envelope me-2"/>
                                        Email <span className='font-sz'>account..</span></h2>
                                    <p className='text-black-50 ms-3 ps-3 animate__animated animate__fadeInRight animate__delay-3s mt-1'>saihlyan.phyoe7@gmail.com</p>
                                </div>
                                <div className="row mt-1">
                                    <button className='btn btn-bg-yellow btn-ms-cs px-lg-3 w-50 text-white animate__animated animate__fadeInRight animate__delay-3s'>
                                        <i className="bi bi-person-lines-fill me-2"/>
                                        Contact now
                                    </button>
                                </div>
                            </div>
                            <div className="col-xl-6 col-12 mb-3">
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
            </div>
        </section>

    );
};

export default Home;











