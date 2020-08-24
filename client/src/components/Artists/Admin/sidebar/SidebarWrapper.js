import React from 'react';
import Sidebar from './Sidebar';
import Breadcrumb from '../../../Common/Breadcrumb';

const SidebarWrapper = ({ children, artistId, breadTitle, breadParent }) => {
  return (
    <div>
      <div className='page-wrapper'>
        <div className='page-body-wrapper'>
          <Sidebar artistId={artistId} />
          <div className='page-body'>
            <Breadcrumb title={breadTitle} parent={breadParent} />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarWrapper;
