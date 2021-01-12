import React from 'react'
import {Modal} from 'react-bootstrap'
import close from './close.png'
import Button from '@material-ui/core/Button';

function WindowModal(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
          keyboard={false}
       
        >
          <Modal.Body>
            <div className="window_wrapper">
                <div><img src={close} onClick={props.onHide} className="close_img"/></div>
                <div className="window_img_wrapper">  
                     <img src="https://i.ibb.co/T8dDYwL/brooke-lark-Hl-Ncigv-Ui4-Q-unsplash.jpg" className="window_image"></img>
                </div>
                <div className="window_details">
                    <h5>Fruits Mamboosa</h5>
                                            
                        <Button variant="outlined" color="primary" href="#outlined-buttons">
                             Order Now
                        </Button>
                </div>
            </div>
          </Modal.Body>
          
          </Modal>
      );
    }

export default WindowModal
