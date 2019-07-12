import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { Accordion, Button, Card, Form, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getInquiries } from "../../actions/inquiryActions";
import { addProduct } from "../../actions/productActions";

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
      length: ""
    };
  }
  componentDidMount() {
    this.props.getInquiries();
  }

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

  render() {
    const { inquiries, inquiry, loading } = this.props.inquiry;

    const {
      motorModel,
      image,
      type,
      height,
      weight,
      width,
      length
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
                <div>
                  <Table striped bordered hover>
                    {loading && inquiries === null ? (
                      <p>Loading...</p>
                    ) : (
                      <Fragment>
                        {inquiries !== null ? (
                          <Fragment>
                            <thead>
                              <tr>
                                <th>Code</th>
                                <th>Full Name</th>
                                <th>Address</th>
                                <th>Motor Model</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            {inquiries.map(inquiry => (
                              <Fragment>
                                <tbody>
                                  <tr>
                                    <td>{inquiry.randomCode}</td>
                                    <td>{inquiry.fullName}</td>
                                    <td>{inquiry.address}</td>
                                    <td>{inquiry.motorModel}</td>
                                    <td>
                                      <Fragment>
                                        <Button>Edit</Button>
                                        <Button className="btn btn-danger">
                                          Delete
                                        </Button>
                                      </Fragment>
                                    </td>
                                  </tr>
                                </tbody>
                              </Fragment>
                            ))}
                          </Fragment>
                        ) : (
                          <Fragment>No inqiries found</Fragment>
                        )}
                      </Fragment>
                    )}
                  </Table>
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
  getInquiries: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  inquiry: state.inquiry
});

export default connect(
  mapStateToProps,
  { addProduct, getInquiries }
)(AdminSettings);
