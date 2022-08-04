import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Form from "../../components/searchform/SearchForm";
import UserCard from '../../components/userCard/UserCard'
import RepoCard from '../../components/repocard/RepoCard'
import Pagination from '../../components/Pagination/pagination'
import { UserContext } from "../../UserContext"

export default function MainPage() {
  const [user, setUser] = useContext(UserContext);
  const [repos, setRepos] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await axios.get(`https://api.github.com/users/${user}`)
      setUserInfo(userData.data)
    }
    fetchUser()
  }, [user]);

  useEffect(() => {
    const fetchRepos = async () => {
      const repoData = await axios.get(`https://api.github.com/users/${user}/repos`)
      setRepos(repoData.data)
    }
    fetchRepos()
  }, [user]);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const renderRepos = () =>
    repos != undefined ?
      currentRepos.map((repo) => (
        <RepoCard key={repo.name} repo={repo} />
      ))
      : null

  const renderUser = () =>
    userInfo != undefined ?
      <UserCard key={userInfo.name} userInfo={userInfo} />
      : null

  const filteredRepos = () =>
    repos.filter((repo) => {
      if (searchTerm === "") {
        return repo;
      } else if (
        repo.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return repo;
      }
    }).map((repo) => (
      <RepoCard key={repo.name} repo={repo} />
    ))

  return (
    <section key={user.name}>
      <div className="container pt-4">
        <div className="mx-md-5">
          <div className="row mx-md-5 ">
            <Form />
          </div>
        </div>
      </div>
      <div className="container col-xxl-8 px-4 py-5">
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
              <section className="row row-cols-1">
                {searchTerm ? filteredRepos() : renderRepos()}
              </section>
              {searchTerm === "" &&
                <div className="pagination d-flex justify-content-center">
                  <div className="-fluid mt-3">
                    <Pagination reposPerPage={reposPerPage} totalRepos={repos.length} paginate={paginate} />
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
