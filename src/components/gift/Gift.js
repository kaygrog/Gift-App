import React from "react";

const Gift = (props) => {
  return (
    <div>
      <div>
        {props.recipientName} | {props.giftName}
      </div>
    </div>
  );
};

export default Gift;
