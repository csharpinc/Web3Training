// src/App.js

import React, { useState } from 'react';
import './App.css';  // Optional: For styling.

function App() {
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.trim()) {
      setActivities([...activities, activity.trim()]);
      setActivity('');
    }
  };

  return (
    <div className="App">
      <h1>Activity Tracker</h1>

      {/* Activity Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your activity..."
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button type="submit">Add Activity</button>
      </form>

      {/* Activity List */}
      <ul>
        {activities.map((act, index) => (
          <li key={index}>{act}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
