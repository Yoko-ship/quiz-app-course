import React from 'react'
import logo from "../assets/quiz-logo.png"

function Header() {
  return (
    <header>
        <img src={logo}></img>
        <h2>react quiz</h2>
    </header>
  )
}

export default Header