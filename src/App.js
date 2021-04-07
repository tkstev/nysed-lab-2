import React from 'react';
import Navbar from './components/Navbar.js';
import SchoolCard from './components/SchoolCard.js';
import data from './nycSchoolEnrollmentData.js';
import './App.css';

function App() {

let School1 = data.schools

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
       <SchoolCard school = {data[1].ENTITY_NAME} year = {data[0].YEAR}/> 
       <SchoolCard school ={data[1].ENTITY_NAME}/> 
       <SchoolCard school = {data[2].ENTITY_NAME}/>    
        </div>
      </div>
    </div>
  );
}

export default App;
