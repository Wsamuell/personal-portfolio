import React, { useState } from 'react';
import projects from './projects.json'
import Card from './card'
import '../Projects/style.css'


function Projects() {
    const [projectList, setProjectList] = useState(projects);

    return (
        <div className=''>
            <h1 className="project-title">Recent Projects</h1>
            <br />
            <article className="project-list flex flex-wrap justify-center">
                {projectList.map(project => (
                    <Card
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                        repo={project.repo}
                    />

                ))}
            </article>
        </div>
    )
}


export default Projects;