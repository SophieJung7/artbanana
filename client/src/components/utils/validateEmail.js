const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (email) => {
  if (re.test(email) === false) {
    return `잘못된 이메일 형식입니다. 올바른 형식: loveyou@gmail.com`;
  }
  return;
};
