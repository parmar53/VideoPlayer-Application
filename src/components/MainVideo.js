import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import VideoPlayer from "react-video-js-player";

const MainVideo = ({msrc, mid, mname, mposter}) => {

  
    // useEffect(()=>{

    // },[mid, msrc])
  return (
    <div className='video__player'>
           
              <VideoPlayer  
                            src={msrc}
                            id={mid}
                            name={mname}
                            poster={mposter} 
                          width ="720" height="420"
                         playbackRates={[0.5, 1, 2, 3.5, 16]} 
                         frameBorder="0"
                         title={mname}
                         allowFullScreen />
                        
            
            
        </div>
  )
}

export default MainVideo