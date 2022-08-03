import React from "react";
import Form from "../../components/searchform/SearchForm";
import UserCard from '../../components/userCard/UserCard'
import RepoCard from '../../components/RepoCard/repoCard'

export default function MainPage() {



  return (
    <>
      <div className="container pt-4">
        <div className="row">
          <Form />
        </div>
      </div>
      <div className="container col-xxl-8 px-4 py-3">
        <div className="row flex-lg-row-reverse justify-content-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-4">
            <div className="card pl-5 col-lg-8 mt-3">
              <UserCard />
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="container mt-3">
              <div className="row row-cols-1 ">
                <RepoCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
