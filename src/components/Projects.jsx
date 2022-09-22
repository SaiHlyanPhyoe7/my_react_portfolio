import React from 'react';
import {data} from './data'


const Projects = () => {
    console.log(data)
    return (
        <div className='container'>
            <div className="row mt-5 justify-content-center">
                {
                    data.map((i,index)=>{
                        return (
                            <div key='index' className='col-lg-4 mt-lg-5 d-flex justify-content-center'>
                                <div className="card card-width animate__animated mb-3 animate__fadeInUp animate__delay-1s">
                                    <img src={i.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{i.title}</h5>
                                            <p className="card-text">{i.description}</p>
                                            <p className="card-text">Project Price => ${i.price}</p>
                                            <a href={i.url} className="btn btn-primary">View Project</a>
                                        </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Projects;