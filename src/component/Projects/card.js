import React from 'react';
// import '../../project'

function Card(props) {

    return (
        <div className='card-disp'>
            <div className="console flex flex-wrap max-w-md">
                <div className='text-center'>
                    <a href={props.link} target='_blank'><img className='project-img object-fill h-full w-full rounded-xl shadow-xl' alt={props.name} src={props.image} /></a>
                </div>
                <div className='overlay'>
                    <p className='project-desc'>
                        {props.description}
                    </p>
                </div>
                <p>Tech Usage: {props.tools}</p>
                <br />
                <p>Github Repo: <a className='repo' target='_blank' href={props.repo}>{props.repo}</a></p>
            </div>
        </div>
    );
}

export default Card;