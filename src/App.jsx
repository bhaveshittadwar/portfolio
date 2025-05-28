import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AnimatedCursor from 'react-animated-cursor';
import Header     from './components/Header.jsx'
import Panel      from './components/Panel.jsx'
import Body       from './components/Body.jsx'
import Contacts   from './components/Contacts.jsx'
import Footer     from './components/Footer.jsx'
import NoPage     from './components/NoPage.jsx'

function AppLayout() {
  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={32}
        color="255,255,255"
        outerAlpha={0.2}
        innerScale={0.8}
        outerScale={2}
        trailingSpeed={8}
        clickables={['a','button','.pushable']}

        innerStyle={{
          boxShadow: '0 0 8px 4px rgba(255,255,255,0.4)',
          backdropFilter: 'blur(2px)'
        }}
      />
      <Header />
      <Panel />
      <Body />       {/* ← renders Skills, Education, Experience, Projects */}
      <Contacts />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
