import React, { useState } from 'react';
import './profile.scss';

const Profile = () => {
  // State for managing settings
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [reminders, setReminders] = useState("Daily");
  const [theme, setTheme] = useState("Light");
  const [notifications, setNotifications] = useState({
    moodCheckIn: true,
    reflectionReminders: true,
  });
  const [security, setSecurity] = useState(false);

  const handleExportData = () => {
    // Logic to export data as PDF or CSV
    console.log("Exporting data...");
  };

  return (
    <div className="profile-container">
      <h2>Profile & Settings</h2>

      {/* User Profile Details */}
      <div className="profile-section">
        <h3>Profile Details</h3>
        <div className="profile-info">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      {/* Reminder Settings */}
      <div className="settings-section">
        <h3>Reminder Settings</h3>
        <select value={reminders} onChange={(e) => setReminders(e.target.value)}>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="None">None</option>
        </select>
      </div>

      {/* Customization Options */}
      <div className="settings-section">
        <h3>Customization Options</h3>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="Light">Light Mode</option>
          <option value="Dark">Dark Mode</option>
        </select>
      </div>

      {/* Notification Settings */}
      <div className="settings-section">
        <h3>Notification Settings</h3>
        <label>
          <input
            type="checkbox"
            checked={notifications.moodCheckIn}
            onChange={(e) =>
              setNotifications((prev) => ({ ...prev, moodCheckIn: e.target.checked }))
            }
          />
          Mood Check-In Notifications
        </label>
        <label>
          <input
            type="checkbox"
            checked={notifications.reflectionReminders}
            onChange={(e) =>
              setNotifications((prev) => ({ ...prev, reflectionReminders: e.target.checked }))
            }
          />
          Reflection Reminders
        </label>
      </div>

      {/* Privacy & Security Options */}
      <div className="settings-section">
        <h3>Privacy & Security</h3>
        <label>
          <input
            type="checkbox"
            checked={security}
            onChange={(e) => setSecurity(e.target.checked)}
          />
          Enable PIN/Biometric Lock
        </label>
      </div>

      {/* Export Data */}
      <div className="settings-section">
        <h3>Export Data</h3>
        <button onClick={handleExportData} className="export-button">
          Export as PDF/CSV
        </button>
      </div>
    </div>
  );
};

export default Profile;
