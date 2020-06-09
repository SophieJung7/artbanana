import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotographer } from '../../../actions';

class PhotographerShow extends Component {
  componentDidMount() {
    this.props.fetchPhotographer(this.props.match.params.id);
  }

  render() {
    const { fullName, workArea } = this.props.photographer;

    return (
      <div>
        <h3>{fullName}</h3>
        <h4>{workArea}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { photographer: state.photographer };
};
export default connect(mapStateToProps, { fetchPhotographer })(
  PhotographerShow
);
