import './App.scss';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Projects from './components/Projects'
import MySkills from './components/MySkills'
import Contact from './components/Contact'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import About from "./components/About";
import Typejs from "./components/Typejs";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/mySkills' element={<MySkills />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>


        <Typejs/>

    </div>
  );
}

export default App;
