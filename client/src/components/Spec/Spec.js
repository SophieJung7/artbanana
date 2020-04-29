import React, { Component } from 'react';
import { IoIosMail } from 'react-icons/io';
import TitleTemp from '../TitleTemp';

class WebinarRegister extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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

  renderForm() {
    return (
      <div>
        <section className="contact-page section-b-space">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-sm-12">
                <form
                  onSubmit={this.submitForm}
                  action="https://formspree.io/mknvrpdl"
                  method="POST"
                  className="theme-form"
                >
                  <div className="form-row">
                    <div className="col-md-6">
                      <label className="first-name" htmlFor="name">
                        이름
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control name-input"
                        id="name"
                        placeholder="성함을 적어주세요."
                        required=""
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">이메일 주소</label>
                      <input
                        type="text"
                        name="email"
                        className="form-control email-input"
                        id="email"
                        placeholder="이메일 주소를 적어주세요."
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="company">
                        취업을 원하는 직종 및 회사명(생략가능)을 입력해주세요.
                      </label>
                      <textarea
                        name="company"
                        className="form-control contents-input"
                        placeholder="마케팅 | KT, 아시아나항공 등"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="job">
                        이력서, 자소서, 면접 중 가장 힘든 부분이 어느 것인지
                        알려주세요. 이 외에도 취업컨설팅에 대해 궁금한 점이
                        있다면 얼마든지 적어주세요!
                      </label>
                      <textarea
                        name="job"
                        className="form-control contents-input"
                        placeholder="이력서, 자소서 등"
                        id="exampleFormControlTextarea1"
                        rows="2"
                      ></textarea>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                      <button
                        className="btn btn-solid btn-submit"
                        type="submit"
                      >
                        무료 취업컨설팅 신청{' '}
                        <IoIosMail
                          style={{
                            height: '2rem',
                            width: '2rem',
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  renderContents() {
    if (this.state.status === 'SUCCESS') {
      return (
        <div className="container">
          <p className="my-5 py-5 text-center text-primary success-message">
            신청이 완료되었습니다. 이메일로 스펙진단 양식을 보내드리겠습니다!
          </p>
        </div>
      );
    } else if (this.state.status === 'ERROR') {
      return (
        <div className="container">
          <p style={{ color: 'red' }}>
            올바른 이메일주소를 작성해 주시기 바랍니다. 오류가 계속 발생한다면
            sophiecheong7@gmail.com으로 연락부탁드립니다!
          </p>
          {this.renderForm()}
        </div>
      );
    } else {
      return <div>{this.renderForm()}</div>;
    }
  }

  render() {
    return (
      <div className="mt-3">
        <TitleTemp
          bigTitle="무료 취업컨설팅 체험 신청하기"
          subTitle="Facebook Special Promotion"
        />
        <div>{this.renderContents()}</div>
      </div>
    );
  }
}

export default WebinarRegister;
