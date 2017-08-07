import React from 'react';

import FillerText from './FillerText.js'

class Webpage extends React.Component{
  render(){
    return (
      <div>
        <head>
          <title>The world's coolest webpage</title>
        </head>
        <FillerText/>
        <FillerText/>
      </div>
    )
  }
}

export default Webpage;
