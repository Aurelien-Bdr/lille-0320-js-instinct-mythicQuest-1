import React, { useState, useEffect } from "react";
import "./Music.scss";

export default function Music() {
  const [sound] = useState(new Audio("sound/ori song.mp3"));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? sound.play() : sound.pause();
  }, [playing]);

  return (
    <div>
      <div className="button-container">
        <button className="buttonMusic" onClick={toggle}>
          {playing ? "Pause" : "Play Music"}
        </button>
      </div>
    </div>
  );
}
