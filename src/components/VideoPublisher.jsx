import React from 'react';
import ReactDom from 'react-dom';
import MediaDevice from './MediaDevice';

export default class VideoPublisher extends React.Component
{
  deviceList;

  videoRef;


  constructor(props)
  {
    super(props);
    this.videoRef = React.createRef();

  }

  componentDidMount()
  {
    console.log("VideoPublisher");

  }


  componentWillUnmount()
  {
  }

  componentDidUpdate() {
  }

  render()
  {
    return (
      <div id="VideoPublisher">VideoPublisher
        <MediaDevice />
        <video ref={this.videoRef}/>
      </div>
    );
  }
}



