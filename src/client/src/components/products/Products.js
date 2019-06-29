import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { getProduct, getProducts } from "../../actions/productActions";
import "./Product.css";
import ProductItem from "./ProductItem";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      modelName: ""
    };
  }
  componentDidMount() {
    this.props.getProducts();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchProduct = () => {
    const { modelName } = this.state;
    if (modelName === "") {
      this.props.getProducts();
    }
    this.props.getProduct(modelName.toUpperCase());
    this.setState({ modelName: "" });
  };

  render() {
    const { products, loading, product } = this.props.product;
    const { modelName } = this.state;

    return (
      <Fragment>
        <div className="container">
          <h3>Products</h3>
          {/* Search Section */}
          <div>
            <Form.Group>
              <Form.Label>Search a Product</Form.Label>
              <Form.Control
                type="text"
                // className={errors.password ? "is-invalid" : ""}
                placeholder="Search a Product"
                name="modelName"
                value={modelName}
                onChange={this.onChange}
              />
              <Form.Text className="text-danger">
                {/* {errors && <p>{errors.username}</p>} */}
              </Form.Text>
            </Form.Group>

            <Button variant="primary" onClick={this.searchProduct}>
              Search
            </Button>
          </div>

          {/* Product Section */}
          <div>
            {loading && products === [] ? (
              <Fragment>Loading...</Fragment>
            ) : (
              <Fragment>
                <div className="container">
                  {products && product === null ? (
                    <Fragment>
                      {products.map(product => (
                        <ProductItem key={product._id} products={product} />
                      ))}
                    </Fragment>
                  ) : (
                    <Fragment>
                      {product ? (
                        <Fragment>
                          <ProductItem key={product._id} products={product} />
                        </Fragment>
                      ) : (
                        <Fragment>No products found</Fragment>
                      )}
                    </Fragment>
                  )}
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

Products.propTypes = {
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
  getProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { getProducts, getProduct }
)(Products);
