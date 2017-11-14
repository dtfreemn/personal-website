import React from 'react';
import '../styles/Home.css'
import HomeLinksContainer from './HomeLinksContainer'

const Home = (props) => {

  return (
    <div className='main-content left home fade-in'>
      <img id='headshot' src={require('../headshot.JPG')} alt='headshot'/>
      <HomeLinksContainer />
      <div id='home-blurb'>
        Welcome! My name is Tim Freeman, and I am a full stack engineer. I recently graduated from Flatiron School where I learned Ruby on Rails, JavaScript, React, Redux, and several other developer tools. Feel free to contact me with questions or opportunities!
      </div>
    </div>
  )
}

export default Home;