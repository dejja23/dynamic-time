import React from "react";
const Timer = props => {
  let time = props.time;
  let s = time / 1000;
  let h = parseInt(s / 3600);
  let m = h > 0 ? parseInt((s % 3600) / 60) : parseInt(s / 60);
  let sec = m > 0 || h > 0 ? parseInt(((s % 3600) % 60) % 60) : s;
  return (
    <div className="App">
      <p className="time">
        {h > 9 ? h : "0" + h}:{m > 9 ? m : "0" + m}:{sec > 9 ? sec : "0" + sec}
      </p>
    </div>
  );
};

export default Timer;
