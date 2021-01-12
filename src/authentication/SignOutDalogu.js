import React from 'react'
import {Button,Modal} from 'react-bootstrap'
import  {auth} from '../firebase'

function SignOutDilogu(props) {
  
  return (
    <>
      <Modal {...props} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>SignOut</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, Sure Wanted To Signout ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancle
          </Button>
          <Button variant="primary" onClick={props.signOut}>
            Sign Out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignOutDilogu