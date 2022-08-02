import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from "./layouts/index";

function App() {
  return (
    <Router>
      <Header />
        
      <Footer />
    </Router>
  );
}

export default App;
