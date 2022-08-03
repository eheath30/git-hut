import React from "react";


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><i class="fa-brands fa-github github-mainpage-icon my-1 mx-2"></i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample05">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-md-2">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item mx-md-2">
            <a class="nav-link" href="#">Favourites</a>
          </li>
          <li class="nav-item mx-md-2">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Coming soon!</a>
          </li>
          <li class="nav-item dropdown mx-md-2">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">About</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown05">
            <hr className="mx-5" />
              <li class="dropdown-item">Designers:</li>
              <li><a class="dropdown-item text-primary" href="https://github.com/allanstocco" target="_blank">Allan <i class="fa-brands fa-github-alt"></i></a></li>
              <li><a class="dropdown-item text-primary" href="https://github.com/eheath30" target="_blank">Elliot <i class="fa-brands fa-github-alt"></i></a></li>
              <hr className="mx-5" />
              <li><a class="dropdown-item" href="#">History</a></li>
              <hr className="mx-5" />
              <li><a class="dropdown-item" href="#">Buy us a coffee! <i class="fa-solid fa-mug-hot"></i></a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
}

export default Header;
