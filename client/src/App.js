import React, {useEffect, useState} from 'react';
import './App.css';

import Jobs from './Jobs';

const JOB_API_URL = 'http://localhost:5000/jobs'

// const mockJobs = [
//   { title: 'SWE 1', company: 'Google' },
//   { title: 'SWE 2', company: 'FaceBook' },
//   { title: 'SWE 3', company: 'Linkedin' }
// ];

const fetchJobs = async (updateCb) => {
  const res = await fetch(JOB_API_URL)
  const data = await res.json();
  updateCb(data);
}

const App = () => {

  const [jobList, updateJobs] = useState([]) 
  useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
