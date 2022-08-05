import React, { useState, useEffect, useContext } from "react";
import img from './img.jpg';
import { HistoryContext } from '../../HistoryContext'

export default function HistoryPage() {
  const [history, setHistory] = useContext(HistoryContext)

  console.log(history)


  return (
    <section className='container justify-content-center mx-auto'>
      <h1 className='display-3 text-center my-4'>{history == '' ?
        <div className='text-center'>
          <h1 className="display-1">Nothing to Show</h1>
          <img className='img-responsive w-25 mt-4' alt="git hut logo" src={img}></img>
        </div> : 'HISTORY PAGE'}</h1>
      <div>
        {history != undefined ? history.map(({ time, userH }) => {
          return (
            <div className="col-auto mb-3" key={userH}>
              <div className="card" >
                <div className="card-body">
                  <h4 className="card-title"><b>{userH}</b> - {time}</h4>
                </div>
              </div>
            </div>
          )
        }) : null}


      </div>
    </section>
  )
}
