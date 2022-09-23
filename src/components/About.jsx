import React from 'react';
import programming from '../img/programming.png'
import xml from '../img/xml.png'

const About = () => {
    return (
        <div className='container' id='about'>
            <div className="row">
                <div className="col-lg-6 mt-4 mt-lg-5 pt-0 pt-lg-4 d-flex justify-content-center animate__animated animate__fadeInLeft">
                    <img src={xml} className='w-75' alt="programming logo"/>
                </div>
                <div className="col-lg-6 mt-lg-5 mt-4 d-flex justify-content-center">
                    <ol className='text-decoration-none mt-lg-5 mt-0'>
                        <li className='text-pink animate__animated animate__fadeInRight'>
                            Ryan has experience as a web developer in various companies for 2 years now. Combined with intelligence, intuition, sensitivity, and thoroughness.And very passionate about learning new technology.
                        </li>
                        <li className='mt-3 text-pink animate__animated animate__fadeInRight'>Very passionate in learning new technology.</li>
                        <li className='mt-3 text-pink animate__animated animate__fadeInRight'>Highly motivated to learn new technology with goals and objectives as established</li>
                        <li className='mt-3 text-pink animate__animated animate__fadeInRight'>Can create a mobile responsive user experience with bootstrap flexbox that allowed cross-plattform accessibility to the website on any device.</li>
                        <li className='mt-3 text-pink animate__animated animate__fadeInRight'>My English skill Intermediate Level</li>
                        <li className='mt-3 text-pink animate__animated animate__fadeInRight'>Knowledge in HTML, CSS, JAVASCRIPT, Figma, PHP, React, Vue,<br/> Laravel, mysql, firebase,...</li>
                        <li className='mt-3 text-pink animate__animated animate__fadeInRight'>Strong Communication and Teamwork skills</li>
                        <li className='mt-3 text-pink animate__animated animate__fadeInRight'>Excellent in technical and problem solving skills</li>
                        <li className='mt-3 text-pink animate__animated animate__fadeInRight'>Able to stay anywhere in the world</li>
                        <li className='mt-3 text-pink animate__animated animate__fadeInRight'>Proficiency with entire Microsoft Office Suite</li>
                    </ol>
                </div>

            </div>

        </div>
    );
};

export default About;