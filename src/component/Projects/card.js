import React from 'react';


function Card(props) {

    return (

        <div className="console flex flex-wrap max-w-md">
            <div className='text-center'>
                <a href={props.link} target='_blank'><img className='project-img object-fill h-40 w-full rounded-2xl shadow-2xl' alt={props.name} src={props.image} /></a>
            </div>
            <div className='overlay'>
                    <p className='project-desc'>
                        {props.description}
                    </p>
                </div>
        </div>
    );
}

export default Card;