import React, { useState } from 'react'

function Connect() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    return (
        <section>
            <div>
                <h1>Contact Me</h1>
                
            </div>
            <form id='contact-form'>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} />
                </div>
                <button type="submit">Submit </button>
            </form>
        </section>
    )
}

export default Connect;