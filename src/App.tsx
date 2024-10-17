import { FormEvent, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
        <Card/>
    </form>
  )
}

export default App
