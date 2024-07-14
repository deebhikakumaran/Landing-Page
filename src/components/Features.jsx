import React from 'react'

function Features({features}) {
  return (
    <>
        <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex"><i className={`${features.icon} m-auto text-primary`}></i></div>
                <h3>{features.title}</h3>
                <p className="lead mb-0">{features.description}</p>
            </div>
        </div>
    </>
  )
}

export default Features
