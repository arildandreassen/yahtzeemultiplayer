import React from 'react'
import {Button,Modal} from 'react-bootstrap';
import '../style/index'

const AddPlayerModal = (props) => {
    console.log('rendering')
    return ( 
    <div>
        <Modal show={props.show} centered className='arild'>
            <Modal.Header closeButton>
                <Modal.Title>
                    Add Player
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='arild'>
                <form>
                    <input placeholder='name...' />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button>Add</Button>
            </Modal.Footer>
        </Modal>
    </div>
    )
}

export default AddPlayerModal;