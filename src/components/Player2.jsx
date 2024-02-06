import React from "react";
import audioFile from '../assets/MusicaWebMix2.wav'

const Player2 = () => {
  return (
    <div>
      <audio controls>
        <source
          id="audio-player"
          name="audio-player"
          src={audioFile}
          type="audio/mp3"
        />
      </audio>
    </div>
  );
};

export default Player2;