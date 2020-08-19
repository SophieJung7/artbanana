import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import RegisterFormReview from './RegisterFormReview';

class Register extends Component {
  state = {
    showFormReview: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <RegisterFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <RegisterForm
        onReviewSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { form: state.form };
};

export default reduxForm({ form: 'artistForm' })(
  connect(mapStateToProps)(Register)
);
