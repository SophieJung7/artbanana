import React, { Component } from 'react';
import SidebarWrapper from '../sidebar/SidebarWrapper';

class EditPortfolio extends Component {
  render() {
    return (
      <SidebarWrapper
        artistId={this.props.match.params.id}
        breadTitle='포트폴리오수정'
        breadParent='아티스트페이지'
      >
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='card'>
                <div className='card-header'>
                  <h5>포트폴리오수정</h5>
                </div>
                <div className='card-body'>df</div>
              </div>
            </div>
          </div>
        </div>
      </SidebarWrapper>
    );
  }
}

export default EditPortfolio;
