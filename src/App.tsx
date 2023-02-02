import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./components/Header"
import SuperheroList from "./components/SuperheroList"
import SuperHeroDetail from './components/SuperHeroDetail'
import { Route, Routes } from "react-router-dom"
import NotFound from './components/NotFound'

function App() {

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<SuperheroList />} />
      <Route path="/:id" element={<SuperHeroDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
