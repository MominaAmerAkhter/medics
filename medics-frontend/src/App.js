import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "@fontsource/montserrat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Login'
import HomeScreen from './HomeScreen'
import OutPatient from './OutPatient'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/main" element={<HomeScreen />} /> 
          <Route path="/outpatient" element={<OutPatient />} /> 
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
