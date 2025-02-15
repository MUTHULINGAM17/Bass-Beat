import './App.css';
import React from 'react';
import Topbar from './Topbar.jsx'
import Sider from './Sidebar.jsx'
import Homepage from './Homepage.jsx'
import Tamil from './Categories/Tamil.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AudioPlayer from './AudioPlayer.jsx';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
  return (
    <div className='bg'>
      <BrowserRouter></BrowserRouter>
      
      <Topbar/>
      <Sider/>
      <Homepage/>
      <Tamil/>
      <div>
        <AudioPlayer />
      </div>
    </div>
  )
}

export default App;