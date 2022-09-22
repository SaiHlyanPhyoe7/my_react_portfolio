import React from 'react';

const Contact = () => {
    return (
        <div className='container'>
            <div className="row mt-5 justify-content-evenly animate__animated animate__fadeInLeft">
                <div className="col-lg-6">
                    <h1 className='text-pink'>My Contact Info</h1>
                    <p className='mt-3 ms-5 ct-txt-gra2' ><i className="bi bi-phone ps-1"/> Phone Number - 09263141207</p>
                    <p className='ms-5 ct-txt-gra2'><i className="bi bi-envelope ps-1"/> Email - saihlyan.phyoe7@gmail.com</p>
                    <p className='ms-5 ct-txt-gra2'><i className="bi bi-geo-alt-fill ps-1"/> Location - Yangon TaMwe St..</p>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-lg-3 mt-5">
                    <h1 className='text-pink'>Social Media Account</h1>
                    <p className='mt-3 ms-5 ct-txt-gra'><i className="bi bi-facebook ps-1"/> Facebook - saihlyan.phyoe7</p>
                    <p className='ms-5 ct-txt-gra'><i className="bi bi-instagram ps-1"/> Instagram - __saihlyanphyoe</p>
                    <p className='ms-5 ct-txt-gra'><i className="bi bi-linkedin ps-1"/> LinkedIn - saihlyan-phyoe7</p>
                    <p className='ms-5 ct-txt-gra'><i className="bi bi-twitter ps-1"/> Twitter - saihlyanphyoe</p>
                </div>
            </div>
            <div className="row mt-lg-5 mt-3 justify-content-center animate__animated animate__fadeInRight ">
                <div className="col-lg-6 mt-lg-0 mt-3">
                    <h1 className='text-pink'>See My Code at</h1>
                    <p className='mt-4 ps-5 ct-txt-gra1'><a href='https://github.com/SaiHlyanPhyoe7'><i className="bi bi-github ps-1"/></a> Github - SaiHlyanPhyoe7</p>
                    <p className='ps-5 ct-txt-gra1'><i className="bi bi-box ps-1"/> CodePen - saihlyanphyoe7</p>
                </div>
                <div className="col-lg-6 3 mb-5 mt-4 mt-lg-0">
                    <h1 className='text-pink my-lg-0 mt-3'>Education Background</h1>
                    <p className='mt-3'>Borcelle Business School</p>
                    <p>Masters in Accounting</p>
                    <p>Completed in 2016</p>
                    <br/>
                    <p>Larana Business School</p>
                    <p>Certificate in Financial Management, </p>
                    <p>Financial Analysis, and Public Budgeting</p>
                    <p>Completed in 2014</p>
                    <p>Borcelle Business School</p>
                    <p>Bachelor of Economics, Major in Finance, </p>
                    <p>Minor in Data Analytics</p>
                    <p>Completed in 2012</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;