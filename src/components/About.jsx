import React from 'react';
import github from '../img/github.png'
import gitLogo from '../img/gitlogo.png'
import htmlLogo from '../img/html.png'
import cssLogo from '../img/css.png'
import javascriptLogo from '../img/javascript.png'
import phpLogo from '../img/php.png'
import reactLogo from '../img/react.png'
import vueLogo from '../img/vue.png'
import bootstrapLogo from '../img/bootstrap.png'
import laravelLogo from '../img/laravel.png'

const About = () => {
    return (
        <div className='container'>
            <div className='mt-5'>
                <h1 className='h1-gradient'>I am Good at - </h1>
            </div>
            <div className="row mt-0 mt-lg-5">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={gitLogo} className='img-height-2 text-center animate__animated animate__lightSpeedInLeft' alt=""/>
                </div>
                <div className="col-lg-6 pt-lg-5 mt-lg-5 pt-2 mt-2">
                    <h1 className='ab-text-pink  animate__animated animate__lightSpeedInRight'>Git</h1>
                    <p className='ab-text-yellow animate__animated animate__lightSpeedInRight'>
                        Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
                    </p>
                </div>
            </div>
            <div className="row mt-0 mt-lg-5 flex-md-row-reverse">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={github} className='img-height-3 w-lg-50 w-75 text-center text-center animate__animated animate__lightSpeedInRight d-flex justify-content-center' alt=""/>
                </div>

                <div className="col-lg-6">
                    <h1 className='abg-text-yellow mt-lg-5 pt-lg-5 pt-2 mt-2 animate__animated animate__lightSpeedInLeft'>Github</h1>
                    <p className='abg-text-pink animate__animated animate__lightSpeedInLeft'>
                        GitHub is where over 83 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, ...
                    </p>
                </div>


            </div>
            <div className="row mt-0 mt-lg-5">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={htmlLogo} className='img-height-2 text-center animate__animated animate__lightSpeedInLeft' alt=""/>
                </div>
                <div className="col-lg-6 pt-lg-5 mt-lg-5 pt-2 mt-2">
                    <h1 className='animate__animated ab-text-pink animate__lightSpeedInRight'>HTML</h1>
                    <p className='animate__animated ab-text-yellow animate__lightSpeedInRight'>
                        HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it! Study our free HTML ...
                    </p>
                </div>
            </div>
            <div className="row mt-0 mt-lg-5 flex-md-row-reverse">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={cssLogo} className='img-height-3 w-75 text-center animate__animated animate__lightSpeedInRight d-flex justify-content-center' alt=""/>
                </div>

                <div className="col-lg-6">
                    <h1 className='abg-text-yellow pt-lg-5 mt-lg-5 pt-2 mt-2 animate__animated animate__lightSpeedInLeft'>Css</h1>
                    <p className='abg-text-pink animate__animated animate__lightSpeedInLeft'>
                        CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to ...
                    </p>
                </div>


            </div>
            <div className="row mt-0 mt-lg-5">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={javascriptLogo} className='img-height-2 text-center animate__animated animate__lightSpeedInLeft' alt=""/>
                </div>
                <div className="col-lg-6 pt-lg-5 mt-lg-5 pt-2 mt-2">
                    <h1 className='ab-text-pink  animate__animated animate__lightSpeedInRight'>Javascript</h1>
                    <p className='ab-text-yellow animate__animated animate__lightSpeedInRight'>
                        JavaScript.com is a resource for the JavaScript community. You will find resources and examples for JavaScript beginners as well as support for JavaScript ...
                    </p>
                </div>
            </div>
            <div className="row mt-0 flex-md-row-reverse">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={phpLogo} className='img-height-3 w-75 text-center animate__animated animate__lightSpeedInRight d-flex justify-content-center' alt=""/>
                </div>
                <div className="col-lg-6">
                    <h1 className='abg-text-yellow pt-lg-5 mt-lg-5 pt-2 mt-2 animate__animated animate__lightSpeedInLeft'>PHP</h1>
                    <p className='abg-text-pink animate__animated animate__lightSpeedInLeft'>
                        A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to ...
                    </p>
                </div>


            </div>
            <div className="row mt-lg-5 mt-2">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={reactLogo} className='img-height-2 text-center animate__animated animate__bounce animate__infinite' alt=""/>
                </div>
                <div className="col-lg-6 pt-lg-5 mt-lg-5 pt-2 mt-2">
                    <h1 className='h1-gradient animate__animated animate__jello animate__infinite'>React</h1>
                    <p className='abg-text-pink animate__animated animate__jello animate__infinite'>
                        React · Declarative. React makes it painless to create interactive UIs. · Component-Based. Build encapsulated components that manage their own state, then compose ...
                    </p>
                </div>
            </div>
            <div className="row mt-0 mt-lg-5 flex-md-row-reverse">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={vueLogo} className='img-height-4 w-75' alt=""/>
                </div>
                <div className="col-lg-6">
                    <h1 className='ab-text-pink pt-lg-5 mt-lg-5 pt-2 mt-2'>Vue</h1>
                    <p className='ab-text-yellow'>
                        Vue is a progressive framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, ...
                    </p>
                </div>


            </div>

            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={bootstrapLogo} className='img-height-2 text-center' alt=""/>
                </div>
                <div className="col-lg-6 pt-lg-5 mt-lg-5 pt-2 mt-2">
                    <h1 className='abg-text-yellow'>Bootstrap</h1>
                    <p className='abg-text-pink'>
                        Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and ...
                    </p>
                </div>
            </div>
            <div className="row mb-5 mt-0 flex-md-row-reverse">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={laravelLogo} className='img-height-5 mt-lg-5 mt-2 w-75' alt=""/>
                </div>
                <div className="col-lg-6">
                    <h1 className='ab-text-pink pt-lg-5 mt-lg-5 pt-2 mt-2'>Laravel</h1>
                    <p className='ab-text-yellow'>
                        Laravel is a PHP web application framework with expressive, elegant syntax. We've already laid the foundation — freeing you to create without sweating the ...
                    </p>
                </div>


            </div>

        </div>
    );
};

export default About;