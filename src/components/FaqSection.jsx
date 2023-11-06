import React from 'react';
import { accordionItem } from '../data';

const FaqSection = () => {

  return (
    <div>
    <div className="section py-5">

        <h2 className="my-5 text-center fs-2">FAQ</h2>

            <div className="accordion w-75 mx-auto" id="accordionExample">

                {accordionItem.map((item) => (
                    <div className="accordion-item" key={item.id}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.target}`} aria-expanded="false" aria-controls={item.target}>
                                {item.header}
                            </button>
                        </h2>
                        <div id={item.target} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>{item.bold}</strong>{item.desc}
                            </div>
                        </div>
                    </div>

                ))}
                
            </div>
        </div> 
    </div>
  );
}

export default FaqSection;
