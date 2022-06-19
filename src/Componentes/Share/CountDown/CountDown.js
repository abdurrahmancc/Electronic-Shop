import React from "react";

const CountDown = ({ timerDays, timerMinutes, timerSeconds }) => {
  return (
    <>
      <div class="grid grid-flow-col gap-2 justify-center text-center relative auto-cols-max ">
        <div class="flex flex-col">
          <span class="countdown font-mono bg-primary text-neutral px-3 py-2 rounded text-[2vw]">
            <span>{timerDays}</span>
          </span>
          <span className="text-sm pt-2">days</span>
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono bg-primary text-neutral px-3 py-2 rounded  text-[2vw]">
            <span>{timerDays}</span>
          </span>
          <span className="text-sm pt-2"> hours</span>
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono bg-primary text-neutral px-3 py-2 rounded  text-[2vw]">
            <span>{timerMinutes}</span>
          </span>
          <span className="text-sm pt-2"> min</span>
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono bg-primary text-neutral px-3 py-2 rounded  text-[2vw]">
            <span>{timerSeconds}</span>
          </span>
          <span className="text-sm pt-2"> sec</span>
        </div>
      </div>
    </>
  );
};

export default CountDown;
