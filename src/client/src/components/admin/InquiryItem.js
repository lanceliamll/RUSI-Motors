import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

const InquiryItem = ({
  inquiries: { randomCode, fullName, address, motorModel }
}) => {
  return (
    <Fragment>
      <tr>
        <td>{randomCode}</td>
        <td>{fullName}</td>
        <td>{address}</td>
        <td>{motorModel}</td>
        <td>
          <Fragment>
            <Button>Edit</Button>
            <Button className="btn btn-danger">Delete</Button>
          </Fragment>
        </td>
      </tr>
    </Fragment>
  );
};

InquiryItem.propTypes = {
  inquiry: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  inquiry: state.inquiry
});

export default connect(
  mapStateToProps,
  null
)(InquiryItem);
