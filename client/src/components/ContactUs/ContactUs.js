import React, { Component } from 'react';
import { IoIosMail } from 'react-icons/io';
import keys from '../../config/keys';
import TitleTemp from '../TitleTemp';

class ContactUs extends Component {
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
        <section className='contact-page section-b-space'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <form
                  onSubmit={this.submitForm}
                  action={keys.formspreeUrl}
                  method='POST'
                  className='theme-form'
                >
                  <div className='form-row'>
                    <div className='col-md-6'>
                      <label className='first-name' htmlFor='name'>
                        이름
                      </label>
                      <input
                        type='text'
                        name='name'
                        className='form-control name-input'
                        id='name'
                        placeholder='성함을 적어주세요.'
                        required=''
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='email'>이메일 주소</label>
                      <input
                        type='text'
                        name='email'
                        className='form-control email-input'
                        id='email'
                        placeholder='이메일 주소를 적어주세요.'
                        required=''
                      />
                    </div>
                    <div className='col-md-12'>
                      <label htmlFor='review'>
                        저희에게 전달하실 사항을 적어주세요.
                      </label>
                      <textarea
                        name='contents'
                        className='form-control contents-input'
                        placeholder='문의 감사드립니다. 24시간안에 답변드리겠습니다!'
                        id='exampleFormControlTextarea1'
                        rows='10'
                      ></textarea>
                    </div>
                    <div className='col-md-12 d-flex justify-content-center'>
                      <button
                        className='btn btn-solid btn-submit'
                        type='submit'
                      >
                        메시지 보내기{' '}
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
        <div className='container'>
          <p className='my-5 py-5 text-center text-primary success-message'>
            메시지가 발송되었습니다. 24시간 내로 답변드리겠습니다. 감사합니다^^!
          </p>
        </div>
      );
    } else if (this.state.status === 'ERROR') {
      return (
        <div className='container'>
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
      <div>
        <TitleTemp bigTitle='아트바나나에 문의하기' subTitle='Contact Us' />
        <div>{this.renderContents()}</div>
      </div>
    );
  }
}

export default ContactUs;
