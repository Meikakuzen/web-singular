import React from 'react'
import ReactAudioPlayer from 'react-audio-player';



const Player = () => {
  return (
    <div>
        <ReactAudioPlayer
        src="./src/assets/MusicaWebMix2.wav"
        autoPlay
        controls
        />
    </div>
  )
}

export default Player