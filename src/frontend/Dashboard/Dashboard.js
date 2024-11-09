import React, { useState } from 'react';
import './Dashboard.scss';

const Dashboard = () => {
  const [moodPrompt, setMoodPrompt] = useState("What brought you joy today?");
  const recentEntries = [
    { date: "Nov 7, 2024", text: "Feeling grateful for the little things." },
    { date: "Nov 6, 2024", text: "A challenging day but learned to stay calm." },
    { date: "Nov 5, 2024", text: "Started the day with meditation." },
  ];

  return (
    <div className="dashboard-container">
      {/* Daily Mood Check-In */}
      <div className="mood-checkin">
        <button className="checkin-button">Check in with your Mood</button>
      </div>

      {/* Today’s Reflection Prompt */}
      <div className="reflection-prompt">
        <h2>Today's Reflection</h2>
        <p>{moodPrompt}</p>
        <button className="reflect-button">Reflect Now</button>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <button className="action-button">Reflect Now</button>
        <button className="action-button">Start Guided Session</button>
        <button className="action-button">Track Progress</button>
      </div>

      {/* Recent Entries */}
      <div className="recent-entries">
        <h2>Recent Entries</h2>
        <ul>
          {recentEntries.map((entry, index) => (
            <li key={index} className="entry">
              <span className="entry-date">{entry.date}</span>
              <p className="entry-text">{entry.text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Progress Overview */}
      <div className="progress-overview">
        <h2>Progress Overview</h2>
        <div className="progress-indicators">
          <div className="calendar">📅</div>
          <div className="emotion-graph">📈</div>
          <p>Keep track of your emotional journey</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
