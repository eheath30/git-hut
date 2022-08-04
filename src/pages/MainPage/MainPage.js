import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Form from "../../components/searchform/SearchForm";
import UserCard from '../../components/userCard/UserCard'
import RepoCard from '../../components/RepoCard/RepoCard'
import Pagination from '../../components/Pagination/pagination'
import { UserContext } from "../../UserContext"

export default function MainPage() {
  const [user, setUser] = useContext(UserContext);
  const [repos, setRepos] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);



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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = repos.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  const renderRepos = () =>
    repos != undefined ?
      currentPosts.map((repo) => (
        <RepoCard key={repo.name} repo={repo} />
      ))
      : null

  const renderUser = () =>
    userInfo != undefined ?
      <UserCard key={userInfo.name} userInfo={userInfo} />
      : null

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
              <section className="row row-cols-1">
                {renderRepos()}
              </section>
              <div className="d-flex justify-content-center">
                <div className="-fluid mt-3">
                  <Pagination postsPerPage={postsPerPage} totalPosts={repos.length} paginate={paginate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
