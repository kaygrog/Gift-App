import React from "react";

const Form = (props) => {
  // Object destructuring
  const {
    handleGiftInput,
    recipientNameValue,
    handleRecipientInput,
    giftNameValue,
    handleGift,
  } = props;

  return (
    <div>
      <input
        placeholder="recipient"
        value={recipientNameValue}
        onChange={handleRecipientInput}
        // onChange={(e) => props.handleRecipientInput(e.target.value)}
      />
      <input
        placeholder="gift"
        value={giftNameValue}
        onChange={handleGiftInput}
        // onChange={(e) => props.handleGiftInput(e.target.value)}
      />
      <button onClick={handleGift}>Submit</button>
      {/* <button onClick={(e) => props.handleGift(e)}>Submit</button> */}
    </div>
  );
};

export default Form;
