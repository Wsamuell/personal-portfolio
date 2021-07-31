import React from 'react';


function Card(props) {

    return (
        <div>
            <div className='img-container'>
            <a href={props.link} target='_blank'><img alt={props.name} src={(props.image)} /></a>
            </div>
            <div className="content">
                <ul>
                    <li>
                    {props.name}
                    </li>
                    <li>
                     {props.description}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Card;