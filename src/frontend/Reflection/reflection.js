import React, { useState } from 'react';
import './reflection.scss';

const Reflection = ({ onSave }) => {
  const [entryText, setEntryText] = useState('');
  const [tags, setTags] = useState([]);
  const [showVoiceInput, setShowVoiceInput] = useState(false);

  // Contextual prompt based on recent mood or interactions
  const prompt = "What are you grateful for today?";

  // List of available tags
  const availableTags = ["Gratitude", "Stress", "Anger", "Joy", "Reflection"];

  const handleTagClick = (tag) => {
    setTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const handleSave = () => {
    const reflectionData = {
      text: entryText,
      tags,
      date: new Date().toISOString(),
    };
    if (onSave) {
      onSave(reflectionData);
    }
    setEntryText('');
    setTags([]);
  };

  return (
    <div className="reflection-container">
      {/* Contextual Prompt */}
      <div className="prompt-section">
        <h2>Reflection Prompt</h2>
        <p>{prompt}</p>
      </div>

      {/* Free-Write Text Box */}
      <div className="entry-section">
        <textarea
          placeholder="Write your thoughts here..."
          value={entryText}
          onChange={(e) => setEntryText(e.target.value)}
        />
      </div>

      {/* Voice Input Option (optional) */}
      {showVoiceInput && (
        <div className="voice-input">
          {/* Placeholder for voice input */}
          <p>Voice input feature is not yet implemented.</p>
        </div>
      )}
      <button className="voice-toggle-button" onClick={() => setShowVoiceInput(!showVoiceInput)}>
        {showVoiceInput ? "Hide Voice Input" : "Record Voice Entry"}
      </button>

      {/* Emotion Tags */}
      <div className="tags-section">
        <h3>Tags</h3>
        <div className="tags-list">
          {availableTags.map((tag) => (
            <button
              key={tag}
              className={`tag-button ${tags.includes(tag) ? 'active' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Save & Reflect Later Button */}
      <div className="actions">
        <button className="save-button" onClick={handleSave} disabled={!entryText}>
          Save Reflection
        </button>
        <button className="reflect-later-button" onClick={() => console.log('Reflect Later')}>
          Reflect Later
        </button>
      </div>
    </div>
  );
};

export default Reflection;
