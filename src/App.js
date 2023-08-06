import './App.css';
import { Route, Routes } from "react-router-dom";
import MyNavbar from './components/MyNavbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import Learn from './components/Learn'
import Reference from './components/Reference'
import Comumunity from './components/Comumunity'


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/comumunity" element={<Comumunity />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

      <Footer />
    </div >
  );
}

export default App;
