import React from 'react'
import "../styles/home.css"

const Home = () => {
    return <div class='wrapper'>
        <h1 class='title'>Moises Trejo</h1>
        <p>I am a 3rd year CS student I am interested in cookign and money.</p>
        <img class='mexico' src={process.env.PUBLIC_URL + `/images/mexico.jpg`} alt="Moises in Mexico"></img>
    </div>
}

export default Home;