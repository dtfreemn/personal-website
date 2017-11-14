import React from 'react'
import { Document, Page } from 'react-pdf'
import Loader from './Loader'
import '../styles/Resume.css'
import resume from '../Tim_Freeman_Resume_2017.pdf'

const Resume = (props) => {


  return (
    <div className='main-content'>
      <div id='resume-container'>
        <Document className='resume' file={resume} loading={<Loader />}> 
          <Page pageNumber={1}/>
        </Document>
      </div>
    </div>
  )
}

export default Resume;