import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPhotographers } from '../../../actions';

class Photographers extends Component {
  componentDidMount() {
    this.props.fetchPhotographers();
  }

  renderPhotographers() {
    return this.props.photographers
      .reverse()
      .map(({ fullName, workArea, profileImageUrl, _id }, index) => {
        return (
          <div key={index} className="col-sm-4 d-inline-block">
            <div className="card">
              <img
                src={`https://catsnap-photographer.s3.ap-northeast-2.amazonaws.com/${profileImageUrl}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{fullName}</h5>
                <p className="card-text">{workArea}</p>
                <Link
                  to={`/bali/photographers/${_id}`}
                  className="btn btn-primary"
                >
                  Check Details
                </Link>
              </div>
            </div>
          </div>
        );
      });
  }

  render() {
    return (
      <div>
        <h3>Photographers</h3>
        {this.renderPhotographers()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { photographers: state.photographers };
};

export default connect(mapStateToProps, { fetchPhotographers })(Photographers);
