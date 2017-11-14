import React from 'react'

const Loader = (props) => {

  return (
  <div className='loading-screen'>
    <img src={require('../images/loading.gif')} alt='Loading. Please wait...' />
  </div>
  )
}

export default Loader;