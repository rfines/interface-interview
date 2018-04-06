import React from "react";

const VerificationIcon = props => (
  <svg
   width={props.width ? props.width : 25}
    height={props.height ? props.height : 25}
    viewBox="0 0 25 25"
    {...props}>
    <title>survey</title>
    <path
      fill="#464646"
      d="M20 2h-3.3l-.7-.7c-.2-.2-.4-.3-.7-.3H15V.5c0-.3-.2-.5-.5-.5h-4c-.3 0-.5.2-.5.5V1h-.5c-.2 0-.5.1-.7.3l-.7.7H5c-1.1 0-2 .9-2 2v19c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 21H5V4h3.3l.5.5c.2.1.5.3.7.3h5.8c.3 0 .5-.1.7-.3l.5-.5H20v19z"
    />
    <path
      fill="#464646"
      d="M16.8 10.2c-.3-.3-.7-.2-1 0l-5.3 6.1L9.1 15c-.3-.3-.7-.3-1 0-.3.3-.3.7 0 1l1.9 1.8c.1.1.3.2.5.2s.3 0 .4-.2l.1-.1 5.7-6.5c.4-.3.4-.8.1-1z"
    />
  </svg>
);

export default VerificationIcon;
