// This is not a Modal but a usual react component.
// Just to copy the design of Modal, I used Modal Component.

import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const Alert = props => {
  return (
    <Modal.Dialog>
      <Modal.Body>
        <div className='d-flex justify-content-center'>{props.message}</div>
      </Modal.Body>
      <Modal.Footer className='py-5'>
        <Link to={props.linkAddress} className='btn-yellow py-2 px-5'>
          {props.linkName}
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default Alert;
