import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import Sidebar from './sidebar/Sidebar';

class ArtistAdminPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchArtist(id);
  }
  render() {
    const { name } = this.props.artist;

    return (
      <div>
        <div className='page-wrapper'>
          <div className='page-body-wrapper'>
            <Sidebar />
            <div className='page-body'>{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist };
};

export default connect(mapStateToProps, actions)(ArtistAdminPage);
