// import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";

function App() {

  return (
    <>
      <Header></Header>
      <main className="items-center flex">
        <div className="w-5/6 mx-auto flex justify-center">
          <About></About>
        </div>
      </main>
    </>
  )
}

export default App
