import React from 'react'
import VideoJS from './components/VideoJS';
import "./App.scss";
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter as Router, Redirect, Switch, Route, useParams} from "react-router-dom";
import { Container } from 'react-bootstrap';
import Header  from './components/header/Header';
import VideoHorizontal from './components/videoHorizontal/VideoHorizontal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import userEvent from '@testing-library/user-event';



// const Layout = ({children}) => {

//     //Redirect videos to main watchScreen
//     // const params = useParams();

//     // console.log(params); 
  
//     // <h2>userId is  {params.id}</h2>;

//     return(
//         <>
//         <Header />
//         <div className='app__container'>
//             <Sidebar/>
            
//             <Container fluid className='app__main'>
//                {children}
//             </Container>
            
//         </div>
         
//         </>
//     )
// }

// function Account() {
//     const { account } = useParams();
  
//     return <h3>ID: {account}</h3>;
//   }



const App = () => {
  return (
         <>
         <Header />
             <div className='app__container'>
                 <Sidebar/>
                
                 <Router>
            <Switch>
            <Route path = "/" exact>
                {/* <Layout> */}
                    <VideoJS />
                {/* </Layout> */}
            </Route>
            

            {/* Route for Horizontal Videos */}
            <Route path= "/:id" >
                
                    <VideoJS />
                    
            </Route>

            {/* <Route>
                <Redirect to="/" />
            </Route> */}

        </Switch>
        </Router>
                 {/* <Container fluid className='app__main'>
                    {children}
                 </Container> */}
                
             </div>
             
            </>

       
  
    )
}

export default App