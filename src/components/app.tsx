import React, { FC } from 'react'
import MessageCarousel from './message-carousel'
import './app.css'

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Calculate how much that <MessageCarousel /> costed <MessageCarousel /> in 🌯's
        </h2>
      </header>
    </div>
  )
}

export default App
