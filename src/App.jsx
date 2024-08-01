// import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {

  return (
    <>
      <Header></Header>
      <main className="items-center flex">
        <div className="w-5/6 mx-auto flex justify-center flex-col space-y-8">
          <About></About>
          <Contact></Contact>
        </div>
      </main>
    </>
  )
}

export default App
