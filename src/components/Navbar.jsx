import React from "react"
import ReactImage from '../assets/react.svg'

export default function Navbar() {
    return (
        <div>
            <nav>
                <img className="navImage" src={ReactImage} />
                <h1 className="navHeader">ReactFacts</h1>
                <h1 className="navHeader2">React Course - Project 1</h1>
            </nav>
        </div>
    )
}