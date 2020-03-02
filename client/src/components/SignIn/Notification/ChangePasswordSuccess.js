import React from 'react';
import { withTranslate } from 'react-redux-multilingual';
import Alert from '../../Alert';

const ChangePasswordSuccess = props => {
  const { translate } = props;
  const Password_changed = translate('Password_changed');
  const Go_back_homepage = translate('Go_back_homepage');
  return (
    <div>
      <Alert
        message={Password_changed}
        linkName={Go_back_homepage}
        linkAddress='/'
      />
    </div>
  );
};

export default withTranslate(ChangePasswordSuccess);
