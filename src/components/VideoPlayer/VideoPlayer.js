import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="App">
      <h1>Video Player</h1>
      <ReactPlayer
        url={"https://youtu.be/7sDY4m8KNLc"}
        controls
        width={"480px"}
        height={"240px"}
        onReady={()=> console.log('onReady callback')}
        onStart={()=> console.log('onStart callback')}
        onPause={()=> console.log('onPause callback')}
        onEnded={()=> console.log('onEnded callback')}
        onError={()=> console.log('onError callback')}
      />
    </div>
  );
};

export default VideoPlayer;
