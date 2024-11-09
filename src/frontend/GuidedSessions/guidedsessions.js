import React, { useState } from 'react';
import './guidedsessions.scss';

const GuidedSessions = ({ onSave }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [sessionNotes, setSessionNotes] = useState("");
  const [sessionComplete, setSessionComplete] = useState(false);

  // Sample steps for the guided session
  const steps = [
    { type: "instruction", text: "Take a deep breath and focus on your breathing." },
    { type: "breathing", text: "Breathe in slowly for 4 seconds, hold for 4 seconds, and breathe out slowly for 4 seconds." },
    { type: "reflection", text: "Think about a positive experience you had recently." },
    { type: "reflection", text: "List three things you're grateful for." },
    { type: "summary", text: "Reflect on what you've written and think about how you feel." },
  ];

  const handleNextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setSessionComplete(true);
    }
  };

  const handleSaveSession = () => {
    const sessionData = {
      notes: sessionNotes,
      date: new Date().toISOString(),
    };
    if (onSave) {
      onSave(sessionData);
    }
    setSessionNotes("");
    setStepIndex(0);
    setSessionComplete(false);
  };

  return (
    <div className="guided-session-container">
      {/* Display Step Content */}
      {!sessionComplete ? (
        <div className="session-step">
          <h2>Guided Session</h2>
          <p>{steps[stepIndex].text}</p>
          
          {/* Optional Breathing Exercise Visual */}
          {steps[stepIndex].type === "breathing" && (
            <div className="breathing-animation">
              <p>Breathe In... Hold... Breathe Out...</p>
              <div className="circle-animation"></div>
            </div>
          )}
          
          {/* Reflection Note Area */}
          {steps[stepIndex].type === "reflection" && (
            <textarea
              placeholder="Write your thoughts here..."
              value={sessionNotes}
              onChange={(e) => setSessionNotes(e.target.value)}
            />
          )}
          
          <button className="next-step-button" onClick={handleNextStep}>
            {stepIndex < steps.length - 1 ? "Next" : "Complete Session"}
          </button>
        </div>
      ) : (
        // Session Completion Summary
        <div className="session-summary">
          <h2>Session Complete</h2>
          <p>Thank you for participating in this mindfulness session.</p>
          <textarea
            placeholder="Summarize your thoughts or takeaways from this session..."
            value={sessionNotes}
            onChange={(e) => setSessionNotes(e.target.value)}
          />
          <button className="save-session-button" onClick={handleSaveSession}>
            Save to Journal
          </button>
        </div>
      )}
    </div>
  );
};

export default GuidedSessions;
