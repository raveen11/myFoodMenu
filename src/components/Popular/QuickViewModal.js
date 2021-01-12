import React from 'react'
import {Modal} from 'react-bootstrap'
import {useStateValue} from '../../StateProvider'
import './Owl.css'
import Button from '@material-ui/core/Button';

function QuickViewModal(props) {
    const[{basket},dispatch]=useStateValue();


	const addToCart=()=>{
		dispatch({
			type:'ADD_TO_BASKET',
			item:{
				id:props.alldata.id,
				img:props.alldata.img,
				price:props.alldata.price,
				name:props.alldata.name
			}
        })
        
	}
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
          keyboard={false}
       
        >
          <Modal.Header closeButton>
            <Modal.Title className="ml-auto" id="contained-modal-title-vcenter">
                Quick View
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="quick_wrapper">
                <div className="img_wrapper">
                   <img className="quick_img" src={props.alldata.img}/>
                </div>
               <div className="quick_desc">
                  <h3>{props.alldata.name}</h3>
                  <p style={{fontSize:'4wv'}}>Lorepfdas fpsiaffsadfd sfafds fsdfdfsdafdfsfadf sdfasdfdsfsdfs dfadfs dfsdfsdfa</p>
                  <h5>$ {props.alldata.price}</h5>

                  <Button onClick={addToCart} variant="outlined" color="secondary">
                    Order
                  </Button>
              </div>
            </div>
          </Modal.Body>
          
          </Modal>
      );
    }

export default QuickViewModal
