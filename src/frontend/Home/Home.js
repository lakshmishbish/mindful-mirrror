import React, { useState } from 'react';
import './Home.scss';

const Home = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  // Optional quiz questions
  const quizQuestions = [
    "What are your goals with Mindful Mirror?",
    "Are you looking to reduce stress?",
    "Would you like to track your emotional growth?",
  ];

  return (
    <div className="home-container">
      {/* Introduction Section */}
      <div className="intro-section">
        <h1>Welcome to Mindful Mirror</h1>
        <p>Your personal journey to self-awareness, emotional growth, and mindfulness starts here.</p>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <h2>Why Use Mindful Mirror?</h2>
        <ul className="benefits-list">
          <li>🌱 Gain deeper self-awareness</li>
          <li>📈 Track emotional growth over time</li>
          <li>🧘 Practice mindfulness daily</li>
        </ul>
      </div>

      {/* Sign-Up/Login Section */}
      <div className="auth-section">
        <h3>Get Started</h3>
        <button className="auth-button email-login">Sign up with Email</button>
        <button className="auth-button google-login">Continue with Google</button>
        <button className="auth-button apple-login">Continue with Apple</button>
        <button className="auth-button social-login">Continue with Social Media</button>
      </div>

      {/* Personalization Quiz Toggle */}
      {!showQuiz ? (
        <div className="quiz-prompt">
          <p>Personalize your experience with a quick quiz!</p>
          <button className="quiz-toggle-button" onClick={() => setShowQuiz(true)}>
            Take the Quiz
          </button>
        </div>
      ) : (
        <div className="quiz-section">
          <h3>Personalize Your Experience</h3>
          {quizQuestions.map((question, index) => (
            <div key={index} className="quiz-question">
              <p>{question}</p>
              <div className="quiz-options">
                <button>Yes</button>
                <button>No</button>
              </div>
            </div>
          ))}
          <button className="quiz-finish-button" onClick={() => setShowQuiz(false)}>
            Finish
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
