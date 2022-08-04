import React, {useState} from 'react'
import { useSelector } from "react-redux";
import RepoCard from '../../components/repocard/RepoCard'
import Pagination from '../../components/Pagination/pagination'

export default function FavouritePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");


  const favouritesList = useSelector((state) => state.favourites.saved);
  console.log(favouritesList);



  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = favouritesList.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const clearInput = (clear) => {
    setSearchTerm(clear)
  }



  const filteredRepos = () =>
  favouritesList.filter((repo) => {
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


  const renderRepos = () =>
  favouritesList != undefined ?
    currentRepos.map((repo) => (
      <RepoCard key={repo.name} repo={repo} />
    ))
    : null


  return (
    <div className="col-lg-6 mx-auto px-4 py-2">
      <h1 className="display-3 text-center mx-auto my-2">Favourite Repos...</h1>
            <div className="-fluid mt-3">
              <div className="input-group">
                <div className="form-outline mx-auto my-3 d-flex">
                  <input
                    type="search"
                    id="form1"
                    className="form-control mx-2"
                    placeholder="Search Repos"
                    value={searchTerm}
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
                  />
                  <i className="fa-solid fa-folder-tree my-auto fontAwesomeLarger"></i>
                </div>
              </div>
              <section className="row row-cols-1">
                {searchTerm ? filteredRepos() : renderRepos()}
              </section>
              {searchTerm === "" &&
                <div className="pagination d-flex justify-content-center">
                  <div className="container-fluid mx-3">
                    <Pagination reposPerPage={reposPerPage} totalRepos={favouritesList.length} paginate={paginate} />
                  </div>
                </div>
              }
            </div>
          </div>
  )
}
