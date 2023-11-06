import React from 'react';
import { cardData } from '../data';


const CardSection = () => {


  return (
    <div>
        <div className="container">
            <h2 className='p-5 my-3 text-center fs-2'> Packages</h2>

            <div className="row g-4">

                {cardData.map((card) => (
                    <div className="col-md-4" key={card.id}>
                        <div className="card mb-2 mx-4 shadow-sm">
                            <img src={card.img} className="card-img-top w-100" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.desc}</p>
                                <a href="/" className="btn btn-primary text-center">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                ))}
            
            </div>
        </div>
      
    </div>
  );
}

export default CardSection;
