import React from "react";
import Gift from "../gift/Gift";

const GiftList = ({ list }) => {
  const giftList = list.map((gift, index) => {
    return (
      <Gift
        recipientName={gift.recipientName}
        giftName={gift.giftName}
        key={index}
      />
    );
  });

  return <div>{giftList}</div>;
};

export default GiftList;
