import { useEffect, useState } from 'react';
import './Navbar.css';
import Light from './day.png';
import Dark from './night.png';

function Navbar({ theme, settheme }) {
  const toggle_mode = () => {
    theme === 'light' ? settheme('dark') : settheme('light');
  };

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [dates, setDates] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDates(new Date().toLocaleDateString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="navbar">
      <div className="title">
        <h1>Today<span style={{ color: "#4CAF50" }}>Jokes</span></h1>
      </div>
      <div className="time">
        <h3 id="current-time">
          Time: {time}<br />
          Date: {dates}
        </h3>
      </div>
      <div className="img-them">
        <img
          onClick={toggle_mode}
          src={theme === 'light' ? Dark : Light}
          alt="Theme Toggle"
        />
      </div>
    </div>
  );
}

export default Navbar;
