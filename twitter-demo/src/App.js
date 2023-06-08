import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Router } from 'react-bootstrap-icons';
import { Landpage } from './component/Landingpage/landpage';
import  { Logintweet } from './component/Landingpage/login';
import { Signup } from './component/Landingpage/signup';
import { Homepage } from './component/home component/home';
import { Followersfeed } from './component/home component/followingFeeds';




function App() {
  
  return (
    
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landpage/>}/>
      <Route path='/login'element={<Logintweet/>}/>
      <Route path='/signup'element={<Signup/>}/>
      <Route path='/homepage/foryou'element={<Homepage/>}/>   
      <Route path='/homepage/following'element={<Followersfeed/>}/>
    </Routes>

    </BrowserRouter>
    
    </>
  );
}

export default App;
