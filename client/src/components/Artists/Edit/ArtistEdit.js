import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';

class ArtistEdit extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchArtist(id);
  }
  render() {
    const { name } = this.props.artist;

    return (
      <div>
        <h1>Artist Edit Page</h1>
        {name}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist };
};

export default connect(mapStateToProps, actions)(ArtistEdit);
