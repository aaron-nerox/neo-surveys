// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateSurvey from './pages/CreateSurvey';
import SurveyList from './pages/SurveyList';
import Survey from './pages/Survey';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/surveys" element={ <SurveyList />} />
        <Route path="/newsurvey" element={ <CreateSurvey />} />
        <Route path="/survey/:id" element={ <Survey />} />
      </Routes>
    </Router>
  );
}

export default App;
