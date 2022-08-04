import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./layouts/index";
import MainPage from "./pages/MainPage/MainPage"
import Error from "./pages/Error/Error"
import Pagination from './components/Pagination/pagination'
import { UserProvider } from "../src/UserContext";


function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="!#" element={<Pagination />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
