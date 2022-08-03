import React from "react";
import Form from "../../components/searchform/SearchForm";

export default function MainPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Form />
        </div>
      </div>
      <div class="container col-xxl-8 px-4 py-3">
        <div class="row flex-lg-row-reverse justify-content-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-4">
            {/* <UserCard /> */}
            <div class="card mx-5 col-lg-6 mt-5">"aside box"</div>
          </div>
          <div class="col-lg-6 ">
            <div className="container mt-3">
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
        </div>
      </div>
    </>
  );
}
