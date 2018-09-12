import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SkillList from './components/SkillsList';
import WorkHistory from './components/WorkHistory';
import EducationHistory from './components/EducationHistory';
import {skills, eduList, jobsList} from './data/datasource.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SkillList skills={skills}/>
        <EducationHistory eduList={eduList}/>
        <WorkHistory jobsList={jobsList}/>
      </div>
    );
  }
}

export default App;
