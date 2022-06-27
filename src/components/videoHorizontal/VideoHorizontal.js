import React, { useState, useEffect } from 'react'
import {Link, useHistory, useParams} from "react-router-dom";
import "./videoHorizontal.scss"
import { Col, Row } from 'react-bootstrap'
import VideoPlayer from "react-video-js-player";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Scrollbars} from "react-custom-scrollbars-2"


const VideoHorizontal = ({name, id, src, poster, handleVideoId}) => {

  // const { ids } = useParams()
  // const history = useHistory()
  // const handleClick = () => {
  //       history.push(`/${id}`)
  // }

// console.log(id);
    // const v_src = Video2;

    // const [rowId, setRowId] = useState(1)

    // useEffect(()=>{
    //   setRowId(id)
    // })

  return (

    

    <Row className='videoHorizontal mr-5 p-2 align-items-center img-fluid' onClick={e => {handleVideoId(e)}}>
     
      
    <Col xs={6} md={6} className="videoHorizontal__left d-flex align-items-center">
    <input type="checkbox" id="check1" name="option1" value="something" />
      <video src= {src}  data-videoid={id}
              poster= {poster}
                      // height= '99px'
                      // width= '160px'
                    className='videoHorizontal__thumbnail'/>
  </Col>

  <Col xs={6} md={6} className="videoHorizontal__right">

    <div className='videoHorizontal__title'> 
        {name} 
    </div>

  </Col>
  
  </Row>
  
  
    // <ul className='videoHorizontal mr-5 p-2 align-items-center img-fluid'>
    //   <li className='d-flex align-items-center'>
    //   <input type="checkbox" id="check1" name="option1" value="something" />
    //   {/* <Link to="/videos/Video2.mp4"> */}
    //   <video src={src} 
    //                          className='videoHorizontal__marleft' 
    //                          height= '99px'
    //                          width= '160px'>
    //          </video>
    //          {/* </Link> */}
    //          {/* <Link to="/"></Link> */}
    //        <div>Video Name 1</div> 
        
    //   </li>

    
  
    )
}

export default VideoHorizontal