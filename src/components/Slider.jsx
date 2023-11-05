import React from 'react';
import Model from './Model';

const Slider = () => {

    const modalId = 'staticBackdrop';

    
  return (
    <div>

        <Model modalId={modalId}/>

        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type of="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item c-item active">
                    <img src="https://images.unsplash.com/photo-1499257398700-43669759a540?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 h-100 object-fit-cover img" alt="..." />
                    <div className="carousel-caption top-0 mt-5 d-none d-md-block">
                        <p className='fs-3 mt-5'>Some representative placeholder content for the first slide.</p>
                        <h1 className='display-1 fw-bolder'>First slide label</h1>
                        <button type="button" class="btn btn-info px-4 py-1 fs-5 mt-5" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>Info</button>
                    </div>
                </div>
                <div className="carousel-item c-item">
                    <img src="https://images.unsplash.com/photo-1698801316000-58aa691f7f11?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 h-100 object-fit-cover img" alt="..." />
                <div className="carousel-caption top-0 mt-5 d-none d-md-block">
                    <p className='fs-3 mt-5'>Some representative placeholder content for the second slide.</p>
                    <h5 className='display-1 fw-bolder'>Second slide label</h5>
                    <button type="button" class="btn btn-info px-4 py-1 fs-5 mt-5" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>Info</button>
                </div>
                </div>
                <div className="carousel-item c-item">
                    <img src="https://images.unsplash.com/photo-1608085021802-e886468f5fc1?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 h-100 object-fit-cover img" alt="..." />
                <div className="carousel-caption top-0 mt-5 d-none d-md-block">
                    <p className='fs-3 mt-5'>Some representative placeholder content for the third slide.</p>
                    <h5 className='display-1 fw-bolder'>Third slide label</h5>
                    <button type="button" class="btn btn-info px-4 py-1 fs-5 mt-5" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>Info</button>
                </div>
                </div>
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

    </div>
  );
}

export default Slider;
