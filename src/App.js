import "./App.css";
import BestSeller from "./components/BestSeller";
import Categories from "./components/categories";
import Footer from "./components/Footer";
import HandpickedItem from "./components/HandpickedItem";
import Header from './components/Header';
import Home from "./components/Home";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Categories />
      <Home />
      <BestSeller />
      <HandpickedItem />
      <Footer />
    </div>
  );
}

export default App;
