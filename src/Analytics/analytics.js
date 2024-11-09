import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import './analytics.scss';

const moodTrendData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [
    {
      label: "Mood Level",
      data: [3, 4, 5, 2, 4, 5, 3],
      borderColor: "#4a90e2",
      backgroundColor: "rgba(74, 144, 226, 0.2)",
      fill: true,
      tension: 0.3,
    },
  ],
};

const emotionFrequencyData = {
  labels: ["Happiness", "Stress", "Gratitude", "Anxiety", "Calm"],
  datasets: [
    {
      label: "Frequency",
      data: [20, 10, 15, 7, 12],
      backgroundColor: ["#4a90e2", "#e94a4a", "#4ae9a3", "#f4d35e", "#b47ae8"],
    },
  ],
};

const Analytics = () => {
  return (
    <div className="analytics-container">
      <h2>Insights & Analytics</h2>

      {/* Mood Trends Over Time */}
      <div className="mood-trends">
        <h3>Mood Trends Over Time</h3>
        <Line data={moodTrendData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Emotion Frequency Analysis */}
      <div className="emotion-frequency">
        <h3>Emotion Frequency Analysis</h3>
        <Bar data={emotionFrequencyData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Reflection Streaks & Statistics */}
      <div className="reflection-stats">
        <h3>Reflection Streaks & Statistics</h3>
        <ul>
          <li><strong>Longest Reflection Streak:</strong> 14 days</li>
          <li><strong>Average Mood:</strong> 3.8 (out of 5)</li>
          <li><strong>Total Entries:</strong> 50 reflections</li>
        </ul>
      </div>

      {/* Growth Over Time */}
      <div className="growth-over-time">
        <h3>Growth Over Time</h3>
        <p>✨ You’ve been more positive lately! Keep up the good work and continue your mindfulness journey.</p>
      </div>
    </div>
  );
};

export default Analytics;
