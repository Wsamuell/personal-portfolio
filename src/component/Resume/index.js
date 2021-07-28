import React from 'react'
import { Document, Page } from 'react-pdf'
import CurrentPdf from './resume.pdf'

function Resume() {

    return (
        <div>
            <Document file={CurrentPdf}>
        <Page pageNumber={1} ></Page>
                </Document>
        </div>
    )
}
export default Resume