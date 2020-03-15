import React from 'react';
import SearchBar from './SearchBar';
import { withTranslate } from 'react-redux-multilingual';

const Jumbotron = ({ translate }) => {
  return (
    <header className='masthead d-flex align-items-center'>
      <div className='container'>
        <div className='intro-text'>
          <div className='intro-text-bg'>{translate('Jumbo_big_words')}</div>
          <div className='intro-text-sm'>{translate('Jumbo_small_words')}</div>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default withTranslate(Jumbotron);
