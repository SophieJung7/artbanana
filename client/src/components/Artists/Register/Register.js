import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import PencilRegisterFormReview from './PencilRegisterFormReview';
import EditionRegisterFormReview from './EditionRegisterFormReview';

class Register extends Component {
  state = {
    showFormReview: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderContent() {
    if (
      this.state.showFormReview &&
      this.props.form.artistForm.values.productCategory === 'pencil'
    ) {
      return (
        <PencilRegisterFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    if (
      this.state.showFormReview &&
      this.props.form.artistForm.values.productCategory === 'edition'
    ) {
      return (
        <EditionRegisterFormReview
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
