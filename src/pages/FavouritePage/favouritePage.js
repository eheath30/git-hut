import React from 'react'

export default function FavouritePage() {



  return (
    <section className='container justify-content-center mx-auto'>
      <h1 className='display-3 text-center my-4'>FAVOURITE COMPONENT</h1>
      <div className="card text-center mb-3 border-success px-0 shadow-sm">
        <div className="card-header">
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex">
              <i className="fa-solid fa-star my-auto mx-1"></i>
              <h5 className="my-auto mx-1">Stargazers: </h5>
            </div>
            <div className="d-flex">Size: kb</div>
            <div className="d-flex">
              <div className="d-flex mx-1">
                <h5 className="my-auto mx-1 my-auto"></h5>
                <i className="fa-solid fa-triangle-exclamation my-auto"></i>
              </div>
              <div className="d-flex mx-1">
                <h5 className="my-auto mx-1 my-auto"></h5>
                <i className="fa-solid fa-eye my-auto"></i>
              </div>
              <div className="d-flex mx-1">
                <h5 className="my-auto mx-1 my-auto"></h5>
                <i className="fa-solid fa-code-fork my-auto"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">

            "Alt description is here to save the day because the repo owner is lazy."
          </p>
          <p className="card-text my-1">Primary language:</p>
          <p className="card-text">Default branch:</p>

          <div className="d-flex justify-content-around">
            <a target="_blank" className="btn btn-sm btn-dark">
              <i className="fa-brands fa-square-github"></i> Go to repo
            </a>
          </div>
        </div>
        <div className="card-footer text-muted">
          <div className="d-flex justify-content-around">
            <span>Created at:</span>
            <span>Last Updated: </span>
          </div>
        </div>
      </div>
    </section>
  )
}
