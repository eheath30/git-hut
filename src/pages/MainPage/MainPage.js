import axios from "axios";
import React, {useState, useEffect, useContext} from "react";
import Form from "../../components/searchform/SearchForm";
import UserCard from '../../components/userCard/UserCard'
import RepoCard from '../../components/repocard/RepoCard'
import { UserContext } from "../../UserContext"

export default function MainPage() {
  const [user, setUser] = useContext(UserContext);
  const [repos, setRepos] = useState();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    axios.get(`https://api.github.com/users/${user}`)
  .then(function (response) {
    let currentUserInfo = response.data
    setUserInfo(currentUserInfo);
  })
  .catch(function (error) {
    console.log(error);
  })
  }, [user]);

  useEffect(() => {
  axios.get(`https://api.github.com/users/${user}/repos`)
  .then(function (response) {
    let currentUserRepos = response.data
    setRepos(currentUserRepos)
  })
  .catch(function (error) {
    console.log(error);
  })
  }, [user]);


const renderRepos = () =>
repos != undefined ?
repos.map((repo) => (
<RepoCard key={repo.name} repo={repo}/>
))
: null

const renderUser = () =>
userInfo != undefined ?
<UserCard key={userInfo.name} userInfo={userInfo}/>
: null

  return (
    <section key={user.name} >
      <div className="container pt-4">
        <div className="row">
          <Form />
        </div>
      </div>
      <div className="container col-xxl-8 px-4 py-2">
        <div className="row flex-lg-row-reverse justify-content-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-4">
            <section className="card pl-5 col-lg-8 mt-3 shadow border-info">
              {renderUser()}
            </section>
          </div>
          <div className="col-lg-6">
            <div className="-fluid mt-3">
              <section className="row row-cols-1">
                {renderRepos()}
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
