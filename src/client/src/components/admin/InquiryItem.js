import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteInquiry, editInquiry } from "../../actions/inquiryActions";

const InquiryItem = ({
  inquiries: { _id, randomCode, fullName, address, motorModel },
  editInquiry,
  deleteInquiry
}) => {
  const [handleShowEditModal, setHandleShowEditModal] = useState(false);
  const [editData, setEditData] = useState({
    randomCode: "",
    fullName: "",
    address: "",
    motorModel: ""
  });

  useEffect(() => {
    setEditData({
      randomCode: !randomCode ? "" : randomCode,
      fullName: !fullName ? "" : fullName,
      address: !address ? "" : address,
      motorModel: !motorModel ? "" : motorModel
    });
  }, [randomCode, fullName, address, motorModel]);

  let hideModal = () => {
    setHandleShowEditModal(false);
  };

  let showModal = () => {
    setHandleShowEditModal(true);
  };

  let onChange = e => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  let onSubmit = e => {
    e.preventDefault();
    const { randomCode, fullName, address, motorModel } = editData;

    let newData = {
      randomCode,
      fullName,
      address,
      motorModel
    };

    editInquiry(newData, _id);
    window.location.reload();
  };

  let onDeleteInquiry = () => {
    let confirm = window.confirm(
      "Are you sure you wanted to delete this item ?"
    );

    if (confirm) {
      deleteInquiry(_id);
    }
    window.location.reload();
  };

  let editModal = (
    <Modal
      onHide={hideModal}
      show={handleShowEditModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Inquiry Transaction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Random Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Random Code"
              disabled
              name="randomCode"
              value={randomCode}
            />

            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={editData.fullName}
              onChange={e => onChange(e)}
            />

            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              name="address"
              value={editData.address}
              onChange={e => onChange(e)}
            />

            <Form.Label>Motor Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Motor Model"
              name="motorModel"
              value={editData.motorModel}
              onChange={e => onChange(e)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onSubmit} className="btn btn-primary">
          Save Changes
        </Button>{" "}
        <Button onClick={hideModal} className="btn btn-danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <Fragment>
      <tr>
        <td>{randomCode}</td>
        <td>{fullName}</td>
        <td>{address}</td>
        <td>{motorModel}</td>
        <td>
          <Fragment>
            <Button onClick={showModal}>Edit</Button>
            {editModal}
            <Button className="btn btn-danger" onClick={onDeleteInquiry}>
              Delete
            </Button>
          </Fragment>
        </td>
      </tr>
    </Fragment>
  );
};

InquiryItem.propTypes = {
  inquiry: PropTypes.object.isRequired,
  editInquiry: PropTypes.func.isRequired,
  deleteInquiry: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  inquiry: state.inquiry
});

export default connect(
  mapStateToProps,
  { editInquiry, deleteInquiry }
)(InquiryItem);
