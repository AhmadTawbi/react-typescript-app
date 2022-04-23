import { useEffect } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {API_URL} from './api/config'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { Reports } from './pages/Reports';
import { ProfileDetails } from './pages/ProfileDetails';

function App() {

  // fetch api data and push them in the local storage
  // you can change the api url in the "src/api/config" file
  // the below function load once when the applicatin run
  useEffect(() => {
    localStorage.clear();
    fetch(API_URL,{method:'GET'})
    .then(res => res.json())
    .then(
      (result) => {
          localStorage.setItem('UserProfile', JSON.stringify(result));
      },
      (error) => {
          console.log(error)
      }
    )
   }, []);
  
  return (
    //Router configuration
    //to add new router in the application
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/profile' element={<ProfileDetails />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
