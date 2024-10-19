
import { useState } from 'react';
import sampleVideo from './assets/bunny_1080p_60fps.mp4';
import CustomVideoPlayer from './custom';
function App(){



  
    return (
    <div>
      <h1>Custom Video Player</h1>
      {/* Pass the imported video path as the videoSrc prop */}
      <CustomVideoPlayer videoSrc={sampleVideo} />
    </div>
  );
   
  
}

 export default App