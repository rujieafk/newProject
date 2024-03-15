import React, { useState } from 'react';
import './App.css';

function App() {

  const [file, setFile] = useState('');
  const [submittedFile, setSubmittedFile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!file){
      console.log("No File Selected");
    }
    console.log(file);
    setSubmittedFile(file);
  }

  return (
    <div className="border"> 
      <div className="border-content">
        <h1>Attendance</h1>
        <div>
          <input 
            type="file"
            name="thisEvent"
            onChange={e => setFile(e.target.files[0])} 
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <h1>List</h1>
        {submittedFile && <p> {submittedFile.name}</p>} 
      </div>
    </div>
  );
}

export default App;
