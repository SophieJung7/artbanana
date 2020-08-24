import React, { Component } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { User } from 'react-feather';

export class TabsetProfile extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <TabList className='nav nav-tabs tab-coupon'>
            <Tab className='nav-link'>
              <User className='mr-2' />
              Profile
            </Tab>
          </TabList>

          <TabPanel>
            <div className='tab-pane fade show active'>
              <h5 className='f-w-600 f-16'>Profile</h5>
              <div className='table-responsive profile-table'>
                <table className='table table-responsive'>
                  <tbody>
                    <tr>
                      <td>First Name:</td>
                      <td>John</td>
                    </tr>
                    <tr>
                      <td>Last Name:</td>
                      <td>Deo</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>johndeo@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Gender:</td>
                      <td>Male</td>
                    </tr>
                    <tr>
                      <td>Mobile Number:</td>
                      <td>2124821463</td>
                    </tr>
                    <tr>
                      <td>DOB:</td>
                      <td>Dec, 15 1993</td>
                    </tr>
                    <tr>
                      <td>Location:</td>
                      <td>USA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabsetProfile;
