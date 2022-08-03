import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./layouts/index";
import MainPage from "./pages/MainPage/MainPage"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
