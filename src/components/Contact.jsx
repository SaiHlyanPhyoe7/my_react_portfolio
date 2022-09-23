import React from 'react';

const Contact = () => {
    return (
        <div className='container'>
            <div className="row mt-5 pt-5 justify-content-evenly">
                <div className="col-lg-6 animate__animated animate__fadeInLeft">
                    <h1 className='text-pink'>My Contact Info</h1>
                    <p className='mt-3 ms-5 ct-txt-gra2' ><i className="bi bi-phone ps-1"/> Phone Number - 09263141207</p>
                    <p className='ms-5 ct-txt-gra2'><i className="bi bi-envelope ps-1"/> Email - saihlyan.phyoe7@gmail.com</p>
                    <p className='ms-5 ct-txt-gra2'><i className="bi bi-geo-alt-fill ps-1"/> Location - Yangon TaMwe St..</p>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-lg-0 mt-5 animate__animated animate__fadeInRight animate__delay-1s">
                    <h1 className='text-pink'>Social Media Account</h1>
                    <p className='mt-3 ms-5 ct-txt-gra'><a href="https://www.facebook.com/saihlyan.phyoe7" target='_blank'><i className="bi bi-facebook ps-1"/></a> Facebook - saihlyan.phyoe7</p>
                    <p className='ms-5 ct-txt-gra'><a href="https://www.instagram.com/__saihlyanphyoe/" target='_blank'><i className="bi bi-instagram ps-1"/></a> Instagram - __saihlyanphyoe</p>
                    <p className='ms-5 ct-txt-gra'><a href="https://www.linkedin.com/in/saihlyan-phyoe7/" target='_blank'><i className="bi bi-linkedin ps-1"/></a> LinkedIn - saihlyan-phyoe7</p>
                    <p className='ms-5 ct-txt-gra'><a href="https://twitter.com/saihlyanphyoe" target='_blank'><i className="bi bi-twitter ps-1"/></a> Twitter - saihlyanphyoe</p>
                </div>
            </div>
            <div className="row mt-lg-5 mt-3 justify-content-center">
                <div className="col-lg-6 mt-lg-0 mt-3 animate__animated animate__fadeInLeft animate__delay-2s">
                    <h1 className='text-pink'>See My Code at</h1>
                    <p className='mt-4 ps-5 ct-txt-gra1'><a href='https://github.com/SaiHlyanPhyoe7' target='_blank'><i className="bi bi-github ps-1"/></a> Github - SaiHlyanPhyoe7</p>
                    <p className='ps-5 ct-txt-gra1'><a href="https://codepen.io/saihlyanphyoe7" target='_blank'><i className="bi bi-box ps-1"/></a> CodePen - saihlyanphyoe7</p>
                </div>
                <div className="col-lg-6 3 mb-5 mt-4 mt-lg-0 animate__animated animate__fadeInRight animate__delay-3s">
                    <h1 className='text-pink my-lg-0 mt-3'>Education Background</h1>
                    <p className='mt-4 ps-5 mt-3 ct-txt-gra3'>MMS-It</p>

                </div>
            </div>
        </div>
    );
};

export default Contact;