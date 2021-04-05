import React from 'react'
import { Link } from 'react-router-dom'

import "./Home.scss"
import "../../assets/styles/App.scss"

export default function Home() {
    return (
        <div className="App">
            <nav>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/episodes">Historic of episodes </Link>
                </li>
            </nav>
            <div className="App-container">
                <p>Home page</p>
            </div>
      </div>
    )
}
