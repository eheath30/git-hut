import React from "react";


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><i className="fa-brands fa-github github-mainpage-icon my-1 mx-2"></i></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample05">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item mx-md-2">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item mx-md-2">
            <a className="nav-link" href="#">Favourites</a>
          </li>
          <li className="nav-item mx-md-2">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Coming soon!</a>
          </li>
          <li className="nav-item dropdown mx-md-2">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">About</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown05">
            <hr className="mx-5" />
              <li className="dropdown-item">Designers:</li>
              <li><a className="dropdown-item text-primary" href="https://github.com/allanstocco" target="_blank">Allan <i className="fa-brands fa-github-alt"></i></a></li>
              <li><a className="dropdown-item text-primary" href="https://github.com/eheath30" target="_blank">Elliot <i className="fa-brands fa-github-alt"></i></a></li>
              <hr className="mx-5" />
              <li><a className="dropdown-item" href="#">History</a></li>
              <hr className="mx-5" />
              <li><a className="dropdown-item" href="#">Buy us a coffee! <i className="fa-solid fa-mug-hot"></i></a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
}

export default Header;
