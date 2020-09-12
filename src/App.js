import React from 'react';
import './App.css';
import Video from "./Video"

const App = () => {
  return (
    //BEM naming convention
    <div className="app">
      <div className="app_videos">
        <Video
          channel="sssssanga"
          description="YOOO this works!"
          song="99 problems but REACT AINT ONE!"
          messages={123}
          likes={456}
          shares={789}
          url={"http://techslides.com/demos/sample-videos/small.ogv"}
        />
        <Video
          channel="sssssanga"
          description="YOOO this works!"
          song="99 problems but REACT AINT ONE!"
          messages={123}
          likes={456}
          shares={789}
          url={"http://techslides.com/demos/sample-videos/small.ogv"}
        />
      </div>
    </div>
  );
}

export default App;
