import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
  render() {
    // const { artistId, price, size, quantity } = this.props.orderDetail;

    return (
      <div>
        <h3>페이지 준비중입니다.</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderDetail: state.order,
  };
};

export default connect(mapStateToProps)(Checkout);
