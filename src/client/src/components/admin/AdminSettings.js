import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { Accordion, Button, Card, Form, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getInquiries, getInquiry } from "../../actions/inquiryActions";
import { addProduct } from "../../actions/productActions";
import InquiryItem from "./InquiryItem";

class AdminSettings extends Component {
  constructor() {
    super();
    this.state = {
      motorModel: "",
      image: "",
      priceFrom: "",
      priceTo: "",
      type: "",
      height: "",
      weight: "",
      width: "",
      length: "",
      randomCode: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    this.props.getInquiries();
  }

  onSearch = e => {
    e.preventDefault();
    if (this.state.randomCode !== "" || this.state.randomCode !== null) {
      this.props.getInquiry(this.state.randomCode);
    }
    this.setState({ randomCode: "" });
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      motorModel,
      image,
      priceFrom,
      priceTo,
      type,
      height,
      weight,
      width,
      length
    } = this.state;
    const { addProduct } = this.props;
    let newProduct = {
      motorModel,
      priceFrom,
      priceTo,
      image,
      type,
      height,
      weight,
      width,
      length
    };
    addProduct(newProduct);
    this.setState({
      motorModel: "",
      image: "",
      priceFrom: "",
      priceTo: "",
      type: "",
      height: "",
      weight: "",
      width: "",
      length: "",
      errors: {}
    });
    // window.location.reload();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  tableHead = (
    <thead>
      <tr>
        <th>Code</th>
        <th>Full Name</th>
        <th>Actions</th>
      </tr>
    </thead>
  );

  render() {
    const { inquiries, inquiry, loading } = this.props.inquiry;

    const {
      motorModel,
      image,
      priceFrom,
      priceTo,
      type,
      height,
      weight,
      width,
      length,
      randomCode,
      errors
    } = this.state;
    return (
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                Add Product
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form onSubmit={this.onSubmit}>
                  <Form.Group>
                    <Form.Label>Motor Model</Form.Label>
                    <Form.Control
                      type="text"
                      className={
                        errors && errors.motorModel ? "is-invalid" : ""
                      }
                      placeholder="Motor Model"
                      name="motorModel"
                      value={motorModel}
                      onChange={this.onChange}
                    />
                    <Form.Text className="text-danger">
                      {errors && <p>{errors.motorModel}</p>}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="text"
                      className={
                        errors && errors.motorModel ? "is-invalid" : ""
                      }
                      placeholder="Image"
                      name="image"
                      value={image}
                      onChange={this.onChange}
                    />
                    <Form.Text className="text-danger">
                      {errors && <p>{errors.image}</p>}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Price From</Form.Label>
                    <Form.Control
                      type="number"
                      className={priceFrom < 1 ? "is-invalid" : ""}
                      placeholder="Price From"
                      name="priceFrom"
                      value={priceFrom}
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Price To</Form.Label>
                    <Form.Control
                      type="number"
                      className={priceTo < 1 ? "is-invalid" : ""}
                      placeholder="Price To"
                      name="priceTo"
                      value={priceTo}
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      type="text"
                      className={errors && errors.type ? "is-invalid" : ""}
                      placeholder="Type"
                      name="type"
                      value={type}
                      onChange={this.onChange}
                    />
                    <Form.Text className="text-danger">
                      {errors && <p>{errors.type}</p>}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Height</Form.Label>
                    <Form.Control
                      type="text"
                      className={errors && errors.height ? "is-invalid" : ""}
                      placeholder="Height"
                      name="height"
                      value={height}
                      onChange={this.onChange}
                    />
                    <Form.Text className="text-danger">
                      {errors && <p>{errors.height}</p>}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                      type="text"
                      className={errors && errors.weight ? "is-invalid" : ""}
                      placeholder="Weight"
                      name="weight"
                      value={weight}
                      onChange={this.onChange}
                    />
                    <Form.Text className="text-danger">
                      {errors && <p>{errors.weight}</p>}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Width</Form.Label>
                    <Form.Control
                      type="text"
                      className={errors && errors.width ? "is-invalid" : ""}
                      placeholder="Width"
                      name="width"
                      value={width}
                      onChange={this.onChange}
                    />
                    <Form.Text className="text-danger">
                      {errors && <p>{errors.width}</p>}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Length</Form.Label>
                    <Form.Control
                      type="text"
                      className={errors && errors.length ? "is-invalid" : ""}
                      placeholder="Length"
                      name="length"
                      value={length}
                      onChange={this.onChange}
                    />
                    <Form.Text className="text-danger">
                      {errors && <p>{errors.length}</p>}
                    </Form.Text>
                  </Form.Group>

                  <Button
                    variant="primary"
                    disabled={
                      Number(priceFrom) >= Number(priceTo) ||
                      Number(priceFrom) < 1 ||
                      Number(priceTo) < 1
                    }
                    type="submit"
                  >
                    Add Motor
                  </Button>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                List of Inquiries
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="cotainter">
                  <Form>
                    <Form.Group>
                      <Form.Label>Search Code</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Code"
                        name="randomCode"
                        value={randomCode}
                        onChange={this.onChange}
                      />
                      <Button variant="primary" onClick={this.onSearch}>
                        Search
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
                <div className="container">
                  {loading && inquiries === [] ? (
                    <Fragment>Loading...</Fragment>
                  ) : (
                    <Fragment>
                      {inquiries && inquiry === null ? (
                        <Fragment>
                          <Table>
                            {this.tableHead}
                            {inquiries.map(inquiry => (
                              <Fragment key={inquiry._id}>
                                <tbody>
                                  <InquiryItem
                                    key={inquiry._id}
                                    inquiries={inquiry}
                                  />
                                </tbody>
                              </Fragment>
                            ))}
                          </Table>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <Table>
                            {this.tableHead}
                            {inquiry ? (
                              <Fragment key={inquiry._id}>
                                <tbody>
                                  <InquiryItem inquiries={inquiry} />
                                </tbody>
                              </Fragment>
                            ) : (
                              <Fragment>No inquiries found</Fragment>
                            )}
                          </Table>
                        </Fragment>
                      )}
                    </Fragment>
                  )}
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

AdminSettings.propTypes = {
  addProduct: PropTypes.func.isRequired,
  getInquiries: PropTypes.func.isRequired,
  getInquiry: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  inquiry: state.inquiry,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addProduct, getInquiries, getInquiry }
)(AdminSettings);
