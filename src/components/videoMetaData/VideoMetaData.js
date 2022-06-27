import React from 'react'
import "./videoMetaData.scss"
import ShowMoreText from "react-show-more-text";

const VideoMetaData = ({title, description}) => {
  return (
    <div className='videoMetaData py-2'>

            <div className='videoMetaData__top'>
                <h5> {title}</h5>
                {/* <div className='d-flex justify-content-between align'>

                </div> */}
            </div>

            <div className='videoMetaData__description'>
             <ShowMoreText 
                        lines={3} 
                        more="SHOW MORE" 
                        less="SHOW LESS" 
                        anchorClass='showMoreText' 
                        expanded={false} >
                {description}
            </ShowMoreText>
            </div>
    </div>
     )  
}

export default VideoMetaData