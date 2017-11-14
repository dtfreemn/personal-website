import React from 'react'
import '../styles/Bio.css'

const Bio = (props) => {

  return (
  <div className='main-content fade-in' id='bio-grid'>
    <h2 className='col-1 row-1'>Life Before Coding</h2>
    <p className='col-1 border-right'>I am originally from outside of Nashville, TN and attended the University of Memphis. I was a teacher for 9 years before getting into programming. I started as a Teach For America corps member on the south side of Chicago before moving to Madrid, Spain to teach middle school for a year. After that, I came to NYC and taught in central Harlem for 6 years. Over the 9 years, I taught Spanish, history, science, social studies, physical education, and government, and I coached varsity volleyball, softball, and baseball.</p>
    <h2 className='col-2 row-1'>How I Discovered Code</h2>
    <p className='col-2 border-right pad-left'>As leader of the 10th grade a few years ago, I needed the ability to assign ~100 students to tutoring groups every few weeks. I wanted to develop a data driven system but wasn't sure where to turn. On the advice a friend, I decided to teach myself how to write a software program to solve my problem. I spent countless hours over the next few weeks teaching myself some JavaScript and Python and wrote a program to run over a GoogleSheet and assign students to tutoring based on their current academic situation. After that, I was hooked.</p>
    <div className='col-3 row-1'>
    <h2>What I am Doing Now</h2>
    <p className='col-3 pad-left border-bottom'>I am a recent graduate of Flatiron School actively seeking opportunities to dive into this new career. I spend my days working on projects, teaching myself new technologies, and networking. I am working hard in search of a company willing to give me the chance to prove myself.</p>
    <h2 className='col-3 no-hoist'>Personal Life</h2>
    <p className='col-3 pad-left'>I have been married to my beautiful wife, Margaret, since July 2016. We currently live in Bed-Stuy Brooklyn.</p>
    </div>
  </div>
  )
}

export default Bio;