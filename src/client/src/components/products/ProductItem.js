import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteProduct, editProduct } from "../../actions/productActions";

// : { image, motorModel, type, height, width, weight, length }
const ProductItem = ({
  editProduct,
  deleteProduct,
  products,
  auth: {
    user: { isAdmin }
  }
}) => {
  //State
  const [editData, setEditData] = useState({
    motorModel: "",
    image: "",
    type: "",
    height: "",
    weight: "",
    width: "",
    length: ""
  });

  useEffect(() => {
    setEditData({
      motorModel: !products.motorModel ? "" : products.motorModel,
      image: !products.image ? "" : products.image,
      type: !products.type ? "" : products.type,
      height: !products.height ? "" : products.height,
      weight: !products.weight ? "" : products.weight,
      width: !products.width ? "" : products.width,
      length: !products.length ? "" : products.length
    });
  }, [products]);

  //Modal Concerns
  const [showImageModal, setShowImageModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

  let handleShowImageModal = () => {
    setShowImageModal(true);
  };
  let handleCloseImageModal = () => {
    setShowImageModal(false);
  };

  let handleShowEditModal = () => {
    setShowEditModal(true);
  };

  let handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const onChange = e => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const onDeleteProduct = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirm) {
      deleteProduct(products._id);
      window.location.reload();
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const { motorModel, image, type, height, weight, width, length } = editData;
    const editedData = {
      motorModel,
      image,
      type,
      height,
      weight,
      width,
      length
    };
    editProduct(editedData, products._id);
    window.location.reload();
  };

  return (
    <div className="card-component">
      <div className="card">
        <img src={products.image} className="card-img-top img-size" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{products.motorModel}</h5>
          <p className="card-text">
            <b>Type: </b>
            {products.type}
          </p>
          <p className="card-text">
            <b>Height: </b>
            {products.height}
          </p>
          <p className="card-text">
            <b>Weight: </b>
            {products.weight}
          </p>
          <p className="card-text">
            <b>Width: </b>
            {products.width}
          </p>
          <p className="card-text">
            <b>Length: </b>
            {products.length}
          </p>
          <p className="card-text">Rusi Motors Inc.</p>
          {isAdmin ? (
            <div className="admin-buttons">
              <Button
                href="#test"
                className="btn btn-primary"
                onClick={handleShowImageModal}
              >
                View
              </Button>

              <Modal
                show={showImageModal}
                onHide={handleCloseImageModal}
                size="lg"
              >
                <Modal.Header>
                  <Modal.Title>Product Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src={products.image}
                    className="card-img-top img-size"
                    alt="..."
                  />
                </Modal.Body>
              </Modal>
              <Button className="btn btn-primary" onClick={handleShowEditModal}>
                Edit
              </Button>

              <Modal
                show={showEditModal}
                onHide={handleCloseEditModal}
                size="lg"
              >
                <Modal.Header>
                  <Modal.Title>{products.motorModel}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={onSubmit}>
                    <Form.Group>
                      <Form.Label>Motor Model</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Motor Model"
                        name="motorModel"
                        value={editData.motorModel}
                        onChange={e => onChange(e)}
                      />

                      <Form.Label>Image</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Image"
                        name="image"
                        value={editData.image}
                        onChange={e => onChange(e)}
                      />

                      <Form.Label>Type</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="type"
                        name="type"
                        value={editData.type}
                        onChange={e => onChange(e)}
                      />

                      <Form.Label>Height</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Height"
                        name="height"
                        value={editData.height}
                        onChange={e => onChange(e)}
                      />

                      <Form.Label>Weight</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Weight"
                        name="weight"
                        value={editData.weight}
                        onChange={e => onChange(e)}
                      />

                      <Form.Label>Width</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Width"
                        name="width"
                        value={editData.width}
                        onChange={e => onChange(e)}
                      />

                      <Form.Label>Length</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Length"
                        name="length"
                        value={editData.length}
                        onChange={e => onChange(e)}
                      />
                    </Form.Group>
                    <Button type="submit" className="btn btn-primary">
                      Save Changes
                    </Button>{" "}
                    <Button
                      onClick={handleCloseEditModal}
                      className="btn btn-danger"
                    >
                      Cancel
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>

              <Button onClick={onDeleteProduct} className="btn btn-danger">
                Delete
              </Button>
            </div>
          ) : (
            <Fragment>
              <Button
                onClick={handleShowImageModal}
                className="btn btn-primary"
              >
                View
              </Button>
              <Modal
                show={showImageModal}
                onHide={handleCloseImageModal}
                size="lg"
              >
                <Modal.Header>
                  <Modal.Title>{products.motorModel}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src={products.image}
                    className="card-img-top img-size"
                    alt="..."
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    onClick={handleCloseImageModal}
                    className="btn btn-primary"
                  >
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToPros = state => ({
  product: state.product,
  auth: state.auth
});

export default connect(
  mapStateToPros,
  { editProduct, deleteProduct }
)(ProductItem);
