import Home from './frontend/Home/Home';
import './App.css';
import Dashboard from './frontend/Dashboard/Dashboard';
import MoodCheckIn from './frontend/MoodCheckIn/MoodCheckIn';
import Reflection from './frontend/Reflection/reflection';
import GuidedSessions from './frontend/GuidedSessions/guidedsessions';
import Analytics from './Analytics/analytics';
import Profile from './Profile/profile';
import Settings from './settings/setttings';

const App = () => {
  // Define handleSave outside of the return statement
  const handleSave = (moodData) => {
    // Handle the saved mood data, e.g., saving to local storage or sending to a backend
    console.log("Mood data saved:", moodData);
  };

  return (
    <div className="App">
      {/* Pass handleSave as a prop to MoodCheckIn */}
      <MoodCheckIn onSave={handleSave} />
      <Reflection/>
      <GuidedSessions/>
      <Analytics/>
      <Settings/>
     
    </div>

  );
}

export default App;
