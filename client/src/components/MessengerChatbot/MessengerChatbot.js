import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const MessengerChatbot = () => {
  return (
    <div>
      <MessengerCustomerChat
        pageId="107334984290797"
        themeColor="#20cef5"
        loggedInGreeting="인터뷰온에 오신 것을 환영합니다^^! 무엇이 궁금하신가요?"
        loggedOutGreeting="인터뷰온에 오신 것을 환영합니다^^! 무엇이 궁금하신가요?"
        language="ko_KR"
      />
    </div>
  );
};

export default MessengerChatbot;
