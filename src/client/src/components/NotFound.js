import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1>Page Not Found!</h1>
      <h5>
        Please <a href="/">go back</a>
      </h5>
    </div>
  );
}

export default NotFound;
