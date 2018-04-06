import React from "react";

const ErrorIcon = props => (
  <svg
    width={props.width ? props.width : 16}
    height={props.height ? props.height : 16} viewBox="0 0 16 16" {...props}>
    <title>error</title>
    <path
      fill="#464646"
      d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.8 10.7c.3.3.3.8 0 1.1-.3.3-.8.3-1.1 0L8 9.1l-2.7 2.7c-.3.3-.8.3-1.1 0-.3-.3-.3-.8 0-1.1L6.9 8 4.3 5.4C4 5 4 4.6 4.3 4.3c.3-.3.7-.3 1 0L8 6.9l2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1L9.1 8l2.7 2.7z"
    />
  </svg>
);

export default ErrorIcon;
