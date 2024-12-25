import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Gallery from "./Components/Gallery";
import Testimonials from "./Components/Testimonials";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/testimonials" element={<Testimonials/>}/>
        </Routes>
        </Router>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
