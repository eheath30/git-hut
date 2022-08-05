import React from "react";
import SearchForm from '../../components/searchform/SearchForm'
import { Link } from 'react-router-dom'

export default function HistoryPage() {

  const userHistory = JSON.parse(localStorage.getItem("UserHistory"));

  return (
    <section className='container justify-content-center mx-auto'>
      <h1 className='display-3 text-center my-4'>{userHistory == '' ? 'Nothing to Show' : 'HISTORY PAGE'}</h1>
      <div>
        {userHistory != undefined ? userHistory.map(({ time, userH }) => {
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
