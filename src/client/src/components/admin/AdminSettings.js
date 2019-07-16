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
    const {
      motorModel,
      image,
      type,
      height,
      weight,
      width,
      length
    } = this.state;
    const { addProduct } = this.props;
    e.preventDefault();
    let newProduct = {
      motorModel,
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
      type: "",
      height: "",
      weight: "",
      width: "",
      length: ""
    });
    window.location.reload();
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
      type,
      height,
      weight,
      width,
      length,
      randomCode
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
                      placeholder="Motor Model"
                      name="motorModel"
                      value={motorModel}
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Image"
                      name="image"
                      value={image}
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type"
                      name="type"
                      value={type}
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Height</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Height"
                      name="height"
                      value={height}
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Weight"
                      name="weight"
                      value={weight}
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Width</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Width"
                      name="width"
                      value={width}
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Length</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Length"
                      name="length"
                      value={length}
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
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
  inquiry: state.inquiry
});

export default connect(
  mapStateToProps,
  { addProduct, getInquiries, getInquiry }
)(AdminSettings);
