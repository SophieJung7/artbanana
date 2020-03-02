export default password => {
  const minMaxLength = /^[\s\S]{6,100}$/;
  const number = /[0-9]/;
  if (minMaxLength.test(password) && number.test(password)) {
    return;
  }
  return `비밀번호는 6자 이상 입력해주시고 숫자를 1개 이상 사용해주세요.`;
};
