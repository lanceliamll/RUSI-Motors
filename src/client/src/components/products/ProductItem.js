import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

const ProductItem = ({
  products: { image, motorModel, type, height, width, weight, length }
}) => {
  return (
    <div className="card-component">
      <div className="card">
        <img src={image} className="card-img-top img-size" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{motorModel}</h5>
          <p className="card-text">
            <b>Type: </b>
            {type}
          </p>
          <p className="card-text">
            <b>Height: </b>
            {height}
          </p>
          <p className="card-text">
            <b>Weight: </b>
            {weight}
          </p>
          <p className="card-text">
            <b>Width: </b>
            {width}
          </p>
          <p className="card-text">
            <b>Length: </b>
            {length}
          </p>
          <p className="card-text">Rusi Motors Inc.</p>
          <a href="#test" className="btn btn-primary">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

const mapStateToPros = state => ({
  product: state.product
});

export default connect(
  mapStateToPros,
  null
)(ProductItem);
