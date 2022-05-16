import React from "react";
import './css/null.css'
import Main from './pages/main/Main'
import Boots from "./pages/boots/Boots";
import Mission from './pages/mission/Misson'
import News from './pages/news/News'
import OurMission from './pages/ourmission/OurMission'
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'
import Health from './pages/family/Health';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='boots' element={<Boots/>}/>
          <Route exact path='mission' element={<Mission/>}/>
          <Route exact path='news' element={<News/>}/>
          <Route exact path='health' element={<Health/>}/>
          <Route exact path='ourmission' element={<OurMission/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
