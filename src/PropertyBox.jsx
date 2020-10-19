import React from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default class PropertyBox extends React.Component {
    render() {
        return (
            <Modal.Dialog className="modalBox">
                <Modal.Header>
                    <Modal.Title>Name</Modal.Title>
                    <button type="button" className="close">
                        <span aria-hidden="true">×</span>
                        <span className="sr-only">Close</span>
                    </button>
                </Modal.Header>

                <Modal.Body className="modalBody">
                    <div className='modal-timer'>
                        <p>This is Timer</p>
                        <button type="button" className="p-4 text-xl font-semibold border-2 border-black border-solid rounded bg-teal">OK</button>
                    </div>
                    <div className='modal-input'>
                        <p>This is Fade</p>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                    Name:
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Element Name"
                                aria-label="Element Name"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                </Modal.Body>
            </Modal.Dialog>
        );
    }
}
