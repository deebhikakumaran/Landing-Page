import React from 'react'

function Widget() {
  return (
    <>
        <form className="form-subscribe">
            <div className="row">
                <div className="col">
                    <input className="form-control form-control-lg" placeholder="Email Address" />
                </div>
                <div className="col-auto"><button className="btn btn-primary btn-lg disabled">Submit</button></div>
            </div>
        </form>
    </>
  )
}

export default Widget

