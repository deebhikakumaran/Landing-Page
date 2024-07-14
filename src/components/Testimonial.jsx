import React from 'react'

function Testimonial({testimonial}) {
  return (
    <>
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src={testimonial.image} alt="..." />
                <h5>{testimonial.name}</h5>
                <p className="font-weight-light mb-0">{`"${testimonial.description}"`}</p>
            </div>
        </div>
    </>
  )
}

export default Testimonial
