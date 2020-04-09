import React, { Component } from 'react';
import Experiences from './Experiences';
import Skills from './Skills';
import Education from './Education';

class Resume extends Component {
  render() {
    return (
      <div>
        <Experiences />
        <Education />
        <Skills />
      </div>
    );
  }
}

export default Resume;
