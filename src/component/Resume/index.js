import React from 'react'
import { Document } from 'react-pdf'

function Resume() {

    return (
        <div>
            <Document
               file= {{url: "https://docs.google.com/document/d/1oIL6i7CuC1ZKXQhqjkA-LfXXpfh7NwebFpkGk8bAbF4/edit?usp=sharing"}}
            >
            </Document>
        </div>
    )
}
export default Resume