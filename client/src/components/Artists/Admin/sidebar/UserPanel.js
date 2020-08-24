import React, { Component } from 'react';

export class UserPanel extends Component {
  render() {
    return (
      <div>
        <div className='sidebar-user text-center'>
          <div>
            <img
              className='img-60 rounded-circle lazyloaded blur-up'
              src={this.props.profilePhoto}
              alt='#'
            />
          </div>
          <h6 className='mt-3 f-14'>{this.props.artistName}</h6>
        </div>
      </div>
    );
  }
}

export default UserPanel;
