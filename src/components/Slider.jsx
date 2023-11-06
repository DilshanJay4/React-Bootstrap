import React from 'react';
import Model from './Model';
import { sliderItems } from '../data';

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
                <button type of="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">

                { sliderItems.map((item) => (

                    <div className="carousel-item c-item active" key={item.id}>
                    <img src={item.img} className="d-block w-100 h-100 object-fit-cover img" alt="..." />
                    <div className="carousel-caption top-0 mt-5 d-none d-md-block">
                        <p className='fs-3 mt-5'>{item.desc}</p>
                        <h1 className='display-1 fw-bolder'>{item.head}</h1>
                        <button type="button" class="btn btn-info px-4 py-1 fs-5 mt-5" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>Info</button>
                    </div>
                    </div>

                ))}

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
