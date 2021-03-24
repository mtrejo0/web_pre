import React from 'react'

import '../styles/projects.css'

const Project = ({name, link, photo}) => {
    return <div class = 'project'>
        <h1>{name}</h1>
        <a href={link}>See more</a>
        <br></br>
        <img class = 'image' src={process.env.PUBLIC_URL+`/images/${photo}`}></img>
    </div>
}

export default Project;