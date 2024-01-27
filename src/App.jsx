import ReactDOM from "react-dom/client";
import './App.css'
import Header from './components/Header.jsx'
import Panel from './components/Panel.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import NoPage from './components/NoPage.jsx'
import Contacts from './components/Contacts.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Header />
          <Panel />
          <Body />
          <Footer />
        </>}>
          <Route index element={<App />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
