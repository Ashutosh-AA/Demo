import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Heading from './Component/Heading'
import Jumbotron from './Component/Jumbotron'
import VideoContent from './Component/VideoContent'
import Cards from './Component/Cards'
import BtnSection from './Component/BtnSection'



ReactDOM.createRoot(document.getElementById('root')).render(
  <><App />
  <VideoContent/>
  <Jumbotron/>
  <Heading/>
  <Cards/>
  <BtnSection/>
    </>
  
)
