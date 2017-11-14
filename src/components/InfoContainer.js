import React from 'react';
import '../styles/InfoContainer.css'
import '../styles/main-content.css'
import Home from './Home'
import Projects from './Projects'
import Bio from './Bio'
import Resume from './Resume'
import Contact from './Contact'

const InfoContainer = (props) => {

  const componentToRender = () => {
    switch (props.location.pathname) {
      case '/home':
      case '/':
        return <Home {...props} />
      case '/bio':
        return <Bio {...props} />
      case '/projects':
        return <Projects {...props} />
      case '/resume':
        return <Resume {...props} />
      case '/contact':
        return <Contact {...props} />
      default:
        return <div></div>
    }
  }

  return (
  <div id='info-container'>
    <div id='header-name'>Tim Freeman</div>
    {componentToRender()}
  </div>
  )
}

export default InfoContainer