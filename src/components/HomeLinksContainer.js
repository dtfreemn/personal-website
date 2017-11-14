import React from 'react';

const HomeLinksContainer = (props) => {

  return (
    <div id='home-links-container'>
      <a className='home-link-img' id='javascript' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img className='small-img' src={require('../javascript.svg.png')} alt='javascript'/><span className='appear javascript-logo'>Java<br/>Script</span></a>
      <a className='home-link-img' id='ruby' href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer"><img className='small-img' src={require('../ruby.png')} alt='ruby'/><span className='appear'>Ruby</span></a>
      <a className='home-link-img' id='html' href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><img className='small-img' src={require('../html.png')} alt='html'/><span className='appear'>HTML</span></a>
      <a className='home-link-img' id='css' href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><img className='small-img' src={require('../css-logo.png')} alt='css'/><span className='appear'>CSS</span></a>
      <a className='home-link-img' id='rails'href="http://rubyonrails.org/" target="_blank" rel="noopener noreferrer"><img className='small-img' src={require('../rails.png')} alt='rails'/><span className='appear'>Rails</span></a>
      <a className='home-link-img' id='react' href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img className='small-img' src={require('../reactjs.png')} alt='react'/><span className='appear'>React</span></a>
      <a className='home-link-img' id='redux' href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"><img className='small-img' src={require('../redux.png')} alt='redux'/><span className='appear'>Redux</span></a>
      <a className='home-link-img' id='flatiron' href="https://flatironschool.com" target="_blank" rel="noopener noreferrer"><img className='small-img' src={require('../flatironschool.png')} alt='flatiron'/><span className='appear flatiron-logo'>Flatiron<br/>School</span></a>
    </div>
  )
}

export default HomeLinksContainer;