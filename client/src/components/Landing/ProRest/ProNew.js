import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ProForm from './ProForm';
import ProFormReview from './ProFormReview';

class ProNew extends Component {
  state = {
    showFormReview: false,
  };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <ProFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <ProForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({ form: 'proForm' })(ProNew);
