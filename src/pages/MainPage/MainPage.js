import React from 'react'
import Form from "../../components/searchform/SearchForm"

export default function MainPage() {
  return (
    <div className='container'>
      <div className='row'>
        <Form />
      </div>

      <div className='container mt-3'>
        <div class="row row-cols-1 ">
          <div class="col mt-3">
            <div class="card">
              <div class="card-body">
                This is some text within a card body 1.
              </div>
            </div>
          </div>
          <div class="col mt-3">
            <div class="card">
              <div class="card-body">
                This is some text within a card body 2.
              </div>
            </div>
          </div>
          <div class="col mt-3">
            <div class="card">
              <div class="card-body">
                This is some text within a card body 3.
              </div>
            </div>
          </div>
          <div class="col mt-3">
            <div class="card">
              <div class="card-body">
                This is some text within a card body 4.
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
  )
}
