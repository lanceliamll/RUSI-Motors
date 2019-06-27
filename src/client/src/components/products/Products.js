import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productActions";
import "./Product.css";

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props.product;
    return (
      <div>
        <div className="container">
          <h3>Products</h3>
          {products !== [] ? (
            <Fragment>
              {products.map(product => (
                <div className="card-component" key={product.id}>
                  <div className="card">
                    <img
                      src={product.image}
                      className="card-img-top img-size"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.motorModel}</h5>
                      <p className="card-text">
                        <b>Type: </b>
                        {product.type}
                      </p>
                      <p className="card-text">
                        <b>Height: </b>
                        {product.height}
                      </p>
                      <p className="card-text">
                        <b>Weight: </b>
                        {product.weight}
                      </p>
                      <p className="card-text">
                        <b>Width: </b>
                        {product.width}
                      </p>
                      <p className="card-text">
                        <b>Length: </b>
                        {product.length}
                      </p>
                      <p className="card-text">Rusi Motors Inc.</p>
                      <a href="#test" className="btn btn-primary">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Fragment>
          ) : (
            <p>No Products found</p>
          )}
        </div>
      </div>
    );
  }
}

Products.propTypes = {
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
