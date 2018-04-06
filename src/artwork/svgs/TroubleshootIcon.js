import React from "react";

const TroubleshootIcon = props => (
  <svg
    width={props.width ? props.width : 25}
    height={props.height ? props.height : 25} 
    viewBox="0 0 25 25" {...props}>
    <title>troubleshoot</title>
    <path
      fill="#464646"
      d="M21.08 17.17a3.88 3.88 0 0 0-1 .13l-7.8-7.84A6.49 6.49 0 0 0 6.5 0h-.61l-.81.84 2.09 2.09a1.05 1.05 0 0 1 0 1.48L4.41 7.17a1.05 1.05 0 0 1-1.48 0L.84 5.08 0 5.89v.61a6.49 6.49 0 0 0 9.46 5.78l7.84 7.84a3.91 3.91 0 1 0 3.79-3zm0 5.88a2 2 0 1 1 2-2 2 2 0 0 1-2 1.95z"
    />
  </svg>
);

export default TroubleshootIcon;
