import React from "react";

const LockIcon = props => (
  <svg 
    width={props.width ? props.width : 25}
    height={props.height ? props.height : 25}
    viewBox="0 0 25 25"
    {...props}>
    <title>security</title>
    <path
      fill="#464646"
      d="M23 14v-3c0-.5-.5-1-1-1h-2V5.3C20 4.2 18.9 0 12.5 0S5 4.2 5 5.3V10H3c-.5 0-1 .5-1 1v3c0 .5.5 1 1 1-.5 0-1 .5-1 1v3c0 .5.5 1 1 1-.5 0-1 .5-1 1v3c0 .5.5 1 1 1h19c.5 0 1-.5 1-1v-3c0-.5-.5-1-1-1 .5 0 1-.5 1-1v-3c0-.5-.5-1-1-1 .5 0 1-.5 1-1zm-9.5 4.8V20c0 .5-.4 1-1 1s-1-.4-1-1v-1.2c-.9-.4-1.5-1.3-1.5-2.3 0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 1-.6 1.9-1.5 2.3zM17 10H8V5.4c0-.3.3-2.4 4.5-2.4S17 5.1 17 5.4V10z"
    />
  </svg>
);

export default LockIcon;
