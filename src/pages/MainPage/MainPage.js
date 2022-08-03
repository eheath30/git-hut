import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Form from "../../components/searchform/SearchForm";
import UserCard from "../../components/userCard/UserCard";
import RepoCard from "../../components/repocard/RepoCard";
import { UserContext } from "../../UserContext";

export default function MainPage() {
  const [user, setUser] = useContext(UserContext);
  const [repos, setRepos] = useState();
  const [userInfo, setUserInfo] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(function (response) {
        let currentUserInfo = response.data;
        setUserInfo(currentUserInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then(function (response) {
        let currentUserRepos = response.data;
        setRepos(currentUserRepos);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user]);

  const renderRepos = () =>
    repos !== undefined
      ? repos
          .filter((repo) => {
            if (searchTerm === "") {
              return repo;
            } else if (
              repo.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return repo;
            }
          })
          .map((repo) => <RepoCard key={repo.name} repo={repo} />)
      : null;

  const renderUser = () =>
    userInfo !== undefined ? (
      <UserCard key={userInfo.name} userInfo={userInfo} />
    ) : null;

  return (
    <section key={user.name}>
      <div className="container pt-4">
        <div className="mx-md-5">
          <div className="row mx-md-5 ">
            <Form />
          </div>
        </div>
      </div>
      <div className="container col-xxl-8 px-4 py-2">
        <div className="row flex-lg-row-reverse justify-content-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <section className="card col-lg-8 mt-4 shadow border-info mx-auto">
              {renderUser()}
            </section>
          </div>
          <div className="col-lg-6">
            <div className="-fluid mt-3">
              <div class="input-group">
                <div class="form-outline mx-auto my-3 d-flex">
                  <input
                    type="search"
                    id="form1"
                    class="form-control mx-2"
                    placeholder="Search Repos"
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
                  />
                  <i class="fa-solid fa-folder-tree my-auto folderIcon"></i>
                </div>
              </div>

              <section className="row row-cols-1">{renderRepos()}</section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
