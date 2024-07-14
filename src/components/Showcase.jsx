import React from 'react'

function Showcase({showcase}) {

  return (
    <>
      <div className="row g-0">
        <div className={showcase.imageSide?'col-lg-6 order-lg-2 text-white showcase-img':'col-lg-6 text-white showcase-img'} style={{backgroundImage: `url(${showcase.image})` }}></div>
        <div className={showcase.imageSide?'col-lg-6 order-lg-1 my-auto showcase-text':'col-lg-6 my-auto showcase-text'}>
            <h2>{showcase.title}</h2>
            <p className="lead mb-0">{showcase.description}</p>
        </div>
      </div>
    </>
  )
}

export default Showcase
