import React from "react";

const SuccessIcon = props => (
  <svg 
    width={props.width ? props.width : 16}
    height={props.height ? props.height : 16}
    viewBox="0 0 16 16" {...props}>
    <title>success</title>
    <path
      fill="#464646"
      d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm4 5.8l-4.69 5.4a.68.68 0 0 1-.15.13.75.75 0 0 1-1 0L4.07 9.25A.82.82 0 0 1 4 8.13a.74.74 0 0 1 1.07 0L6.62 9.6l4.22-4.86a.74.74 0 0 1 1.07-.05A.82.82 0 0 1 12 5.8z"
    />
  </svg>
);

export default SuccessIcon;
