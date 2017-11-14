import React from 'react'
import '../styles/Projects.css'

const Projects = (props) => {

  return (
    <div className='main-content fade-in'>
      <div className='scroll-y'>
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Front End</th>
              <th>Back End</th>
              <th>Github</th>
            </tr>
            <tr>
              <td>eVALUEate<br/><a href='https://evaluationmanager.herokuapp.com' target='_blank' rel="noopener noreferrer"><strong className='small-text'>(Demo Site)</strong></a></td>
              <td>Employee evaluation management system. Companies can create, execute, and track data for their employee reviews.</td>
              <td>React, Redux, JavaScript, chart.js</td>
              <td>Ruby on Rails, Postgres</td>
              <td className='no-border-right'><a href='https://github.com/dtfreemn/evaluator-react-redux' target='_blank' rel="noopener noreferrer"> <strong>Frontend</strong></a> <a href='https://github.com/dtfreemn/evaluator-rails' target='_blank' rel="noopener noreferrer"><strong>Backend</strong></a></td>
            </tr>
            <tr>
              <td>MoodBoards<br/><a href='https://moodboards-inc.herokuapp.com' target='_blank' rel="noopener noreferrer"><strong className='small-text'>(Demo Site)</strong></a></td>
              <td>Creative project management tool. Users can create projects and idea boards and upload images. Comments and direct messages allow users to interact on projects, and supervisors can approve or reject them, as well.</td>
              <td>Ruby on Rails</td>
              <td>Ruby on Rails, SQLite</td>
              <td className='no-border-right'><a href='https://github.com/joshlacey/moodboards' target='_blank' rel="noopener noreferrer"><strong>Repo</strong></a></td>
            </tr>
            <tr>
              <td>Trip Tracker</td>
              <td>Trip planning web app utilizing the Yelp API. Users can create trips with destinations to any city served by Yelp. Users can then categorically filter activities fetched from Yelp and save them to their trips for ease of planning.</td>
              <td>React, JavaScript, jQuery</td>
              <td>Ruby on Rails, SQLite</td>
              <td className='no-border-right'><a href='https://github.com/dtfreemn/module-4-project-react' target='_blank' rel="noopener noreferrer"><strong>Frontend</strong></a> <a href='https://github.com/dtfreemn/module-4-project-rails' target='_blank' rel="noopener noreferrer"><strong>Backend</strong></a></td>
            </tr>
            <tr>
              <td className='last'>Quora Overflow</td>
              <td className='last'>Crowdsourced question and answer app for users to get the information they need from those who know it best.</td>
              <td className='last'>Vanilla JavaScript</td>
              <td className='last'>Ruby on Rails, Postgres</td>
              <td className='last no-border-right'><a href='https://github.com/dtfreemn/module3-js-frontend' target='_blank' rel="noopener noreferrer"><strong>Frontend</strong></a> <a href='https://github.com/dtfreemn/module3-rails-backend' target='_blank' rel="noopener noreferrer"><strong>Backend</strong></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Projects;