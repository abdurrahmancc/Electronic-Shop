import React, { useEffect, useRef, useState } from "react";

const TImer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = (countdownDate) => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(interval.current);
    } else {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
  };

  function saveInLocalStorage(time) {
    localStorage.setItem("timer", time);
  }

  function getTimeFromLocalStorage() {
    return localStorage.getItem("timer");
  }

  useEffect(() => {
    const localTimer = getTimeFromLocalStorage();

    if (localTimer) {
      interval.current = setInterval(() => {
        startTimer(+localTimer);
      }, 1000);
    } else {
      const countdownDate = new Date().getTime() + 30000 * 24 * 60 * 1000;
      saveInLocalStorage(countdownDate);
      interval.current = setInterval(() => {
        startTimer(+countdownDate);
      }, 1000);
    }

    return () => clearInterval(interval.current);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-1 justify-center">
      <div className="flex flex-col text-center ">
        <span className="bg-primary text-neutral text-[2vw] p-1 rounded"> {timerDays} </span>
        <span>Days</span>
      </div>
      <div className="flex flex-col text-center">
        <span className="bg-primary text-neutral text-[2vw] p-1 rounded"> {timerHours} </span>
        <span>Hours</span>
      </div>
      <div className="flex flex-col text-center">
        <span className="bg-primary text-neutral text-[2vw] p-1 rounded"> {timerMinutes} </span>
        <span>Min</span>
      </div>
      <div className="flex flex-col text-center">
        <span className="bg-primary text-neutral text-[2vw] p-1 rounded"> {timerSeconds} </span>
        <span>Sec</span>
      </div>
    </div>
  );
};

export default TImer;
