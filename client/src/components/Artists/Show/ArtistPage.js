import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';

class ArtistPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchArtist(id);
  }
  render() {
    console.log(this.props.artist);
    return <div>ArtistPage</div>;
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist };
};

export default connect(mapStateToProps, actions)(ArtistPage);
