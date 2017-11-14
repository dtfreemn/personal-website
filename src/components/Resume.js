import React from 'react'
// import { Document, Page } from 'react-pdf'
// import Loader from './Loader'
import '../styles/Resume.css'
// import resume from '../Tim_Freeman_Resume_2017.pdf'

const Resume = (props) => {


  return (
    <div className='main-content'>
      <a href='https://docs.google.com/document/d/1cQs01ul_uAYG2zCaAkSyJfFAWQCSQsavPFGwanRUfIE/edit?usp=sharing' target='_blank'>
        <button>See Full Resume</button>
      </a>
      <div id='resume-container'>
        <div className='col-1 row-1'><strong>Education</strong></div>
          <table className='col-1 row-2'>
            <tbody>
              <tr>
                <td>Flatiron School<br/>2017</td>
                <td>Web Development</td>
                <td>Learned Ruby on Rails, JavaScript, React, Redux, and various other developer tools.</td>
              </tr>
              <tr>
                <td>National-Louis University<br/>2010</td>
                <td>Master of Arts in Teaching</td>
                <td>4.0 GPA</td>
              </tr>
              <tr>
                <td>University of Memphis<br/>2008</td>
                <td>Bachelor of Arts in History and Spanish</td>
                <td>3.6 GPA</td>
              </tr>
            </tbody>
          </table>
        <div className='col-2 row-1'><strong>Work Experience</strong></div>
          <table className='col-2 row-2'>
            <tbody>
              <tr>
                <td>Democracy Prep Charter High School<br/>2011-17</td>
                <td className='small-text'>Teacher, Grade Level Leader, Department Leader, Athletics Coach</td>
                <td className='small-text'>Managed teams of teachers in developing and executing department and grade intiatives. Taught history, PE, and government</td>
              </tr>
              <tr>
                <td>Teach For America<br/>2008-10</td>
                <td>Teacher, Athletics Coach</td>
                <td className='small-text'>Taught and created standards-aligned curriculum for intro and intermediate level Spanish</td>
              </tr>
              <tr>
                <td>Ministry of Education<br/>2010-11</td>
                <td>Auxiliar de Conversación</td>
                <td className='small-text'>Taught 5th/6th grade math, science, and social studies and managed small-group bilingual tutoring sessions</td>
              </tr>
            </tbody>
          </table>
       {/* <Document className='resume' file={resume} loading={<Loader />}> 
          <Page pageNumber={1}/>
        </Document> */}
      </div>
    </div>
  )
}

export default Resume;