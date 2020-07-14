import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verifyEmail } from '../../actions';

class EmailVerified extends Component {
  state = {
    verified: true,
  };
  componentDidMount() {
    const userId = this.props.match.params.id;
    const verified = this.props.verifyEmail(userId);
    this.setState({ verified: verified });
  }

  render() {
    return (
      <div className='container my-5'>
        {this.state.verified ? <h5>이메일 인증에 성공했습니다!^^</h5> : null}
      </div>
    );
  }
}

export default connect(null, { verifyEmail })(EmailVerified);
