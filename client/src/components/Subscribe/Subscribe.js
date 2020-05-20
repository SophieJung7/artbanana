import React, { Component } from 'react';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  renderButton() {
    if (this.state.status === 'SUCCESS') {
      return (
        <div className="pt-3 ml-3">
          <h4 className="thank-you">감사합니다!</h4>
        </div>
      );
    } else if (this.state.status === 'ERROR') {
      return (
        <div className="pt-3 ml-3">
          <h4 className="d-block" style={{ color: 'red' }}>
            잘못된 이메일 형식입니다. 다시 입력해주세요!
          </h4>
        </div>
      );
    } else {
      return (
        <button
          type="submit"
          className="btn btn-solid btn-subscribe"
          style={{
            height: '6vh',
            backgroundImage:
              'linear-gradient(30deg, black 50%, transparent 50%)',
            color: 'white',
            border: 'none',
          }}
        >
          구독하기
        </button>
      );
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title1">
              <h4>Subscribe</h4>
              <h2 className="title-inner1">이메일 뉴스레터에 가입하세요!</h2>
              <hr />
            </div>
          </div>
        </div>
        <div className="white-layout">
          <div className="container">
            <section className="small-section">
              <div className="row">
                <div className="col-xl-6 offset-xl-3">
                  <div className="subscribe">
                    <form
                      onSubmit={this.submitForm}
                      action="https://formspree.io/mknvrpdl"
                      method="POST"
                      className="form-inline subscribe-form classic-form"
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          className="form-control subscribe-input"
                          id="exampleFormControlInput"
                          placeholder="이메일주소를 입력하세요."
                          style={{ height: '6vh' }}
                        />
                      </div>
                      {this.renderButton()}
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}

export default Subscribe;
