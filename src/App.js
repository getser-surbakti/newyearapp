import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState({});
  const [countdownOver, setCountdownOver] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-01-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setCountdownOver(true);
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>New Year Countdown</h1>
        {!countdownOver ? (
          <div className="countdown">
            <p>{timeLeft.days} Days</p>
            <p>{timeLeft.hours} Hours</p>
            <p>{timeLeft.minutes} Minutes</p>
            <p>{timeLeft.seconds} Seconds</p>
          </div>
        ) : (
          <h2>Happy New Year!</h2>
        )}
      </header>
    </div>
  );
}

export default App;
