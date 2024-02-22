import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {Routes, Route} from "react-router-dom";
import AbstractSubmission from './Pages/AbstractSubmission';
import About from './Pages/About';
import CallPaper from './Pages/CallForPaper';
import Committee from './Pages/Committee';
import ImportantDates from './Pages/ImportantDates';
import Registration from './Pages/Registrastion';
import Themes from './Pages/Themes';
import Venue from './Pages/Venue';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/abstract" element={<AbstractSubmission />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/callpaper" element={<CallPaper />}/>
        <Route path="/committee" element={<Committee />}/>
        <Route path="/importantdates" element={<ImportantDates />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route path="/themes" element={<Themes />}/>
        <Route path="/venue" element={<Venue />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
