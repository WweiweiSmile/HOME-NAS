import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import VideoPlay from "./pages/VideoPlay"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />}></Route>
        <Route path={'/video-play'} element={<VideoPlay></VideoPlay>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
