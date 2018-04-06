import React from "react";

const SentimentIconNegative = props => (
  <svg
    width={props.width ? props.width : 25}
    height={props.height ? props.height : 25}
    viewBox="0 0 25 25"
    {...props}>
    <title>sentiment - negative</title>
    <circle fill="#464646" cx={15} cy={8} r={1} />
    <circle fill="#464646" cx={10} cy={8} r={1} />
    <path
      fill="#464646"
      d="M17 15.5c-.3 0-.5-.2-.5-.5 0-1.8-1-2.5-4-2.5s-4 .7-4 2.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-3.5 3.4-3.5 5-3.5s5 0 5 3.5c0 .3-.2.5-.5.5z"
    />
    <path
      fill="#464646"
      d="M23 10.2C23 7.5 21.6 5 19.7 3c-1.9-1.9-4.5-3-7.2-3S7.2 1.1 5.3 3C3.4 5 2 7.5 2 10.2c0 2.9 1.4 5.5 3.3 7.5l6.6 7c.1.1.2.2.3.2.1 0 .2.1.3.1.2 0 .5-.1.6-.3l6.6-7c1.9-1.9 3.3-4.6 3.3-7.5zm-2 0c0 2.4-.9 4.7-2.5 6.4L15.3 20l-1.9 2-.3.3c-.3.3-.8.3-1.1 0l-.4-.3-1.9-2-3.2-3.4c-1.6-1.7-2.5-4-2.5-6.4 0-2.2.9-4.4 2.5-6 1.6-1.6 3.7-2.5 6-2.5s4.4.9 6 2.5c1.6 1.6 2.5 3.7 2.5 6z"
    />
  </svg>
);

export default SentimentIconNegative;
