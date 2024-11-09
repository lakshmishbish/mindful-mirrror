import React, { useState } from 'react';
import './MoodCheckIn.scss';

const MoodCheckIn = ({ onSave }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [intensity, setIntensity] = useState(50);
  const [notes, setNotes] = useState('');

  const moodOptions = [
    { label: '😊 Happy', value: 'happy' },
    { label: '😞 Sad', value: 'sad' },
    { label: '😌 Calm', value: 'calm' },
    { label: '😰 Anxious', value: 'anxious' },
    { label: '😡 Angry', value: 'angry' },
    { label: '😴 Tired', value: 'tired' },
  ];

  const handleSave = () => {
    const moodData = {
      mood: selectedMood,
      intensity,
      notes,
      date: new Date().toISOString(),
    };
    // Call the onSave function to save data and return to the home screen
    onSave(moodData);
  };

  return (
    <div className="mood-checkin-container">
      <h2>Mood Check-In</h2>

      {/* Mood Selector */}
      <div className="mood-selector">
        <h3>Select Your Mood</h3>
        <div className="mood-options">
          {moodOptions.map((mood) => (
            <button
              key={mood.value}
              className={`mood-button ${selectedMood === mood.value ? 'active' : ''}`}
              onClick={() => setSelectedMood(mood.value)}
            >
              {mood.label}
            </button>
          ))}
        </div>
      </div>

      {/* Emotion Intensity Slider */}
      <div className="intensity-slider">
        <h3>Intensity</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
        />
        <div className="intensity-labels">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="additional-notes">
        <h3>Additional Notes</h3>
        <textarea
          placeholder="Add any additional context here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      {/* Save Button */}
      <button className="save-button" onClick={handleSave} disabled={!selectedMood}>
        Save Check-In
      </button>
    </div>
  );
};

export default MoodCheckIn;
