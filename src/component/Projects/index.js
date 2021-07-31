import React, { useState } from 'react';
import projects from './projects.json'
import Card from './card'

function Projects() {
    const [projectList, setProjectList] = useState(projects);

    return (
        <div>
            <h1 className="title">Highlighted Projects</h1>
            <br></br>
            {projectList.map(project => (
                <Card 
                name={project.name}
                description={project.description}
                image={project.image}
                link={project.link}
                />

            ))}

        </div>
    )
}


export default Projects;