import React, { Component } from "react";
import Form from "../form/Form";
import GiftList from "../giftList/GiftList";

class GiftApp extends Component {
  // App begins by reading from this object
  state = {
    recipientName: "",
    giftName: "",
    allGifts: [],
  };

  handleRecipientInput = (event) => {
    // console.log("Recipient:", recipientName);

    // Track what is being typed in the input name field
    // Get the content of the input field
    // Set the state of the gift recipient

    this.setState({ recipientName: event.target.value });
  };

  handleGiftInput = (event) => {
    // console.log("Gift:", giftName);
    this.setState({ giftName: event.target.value });
  };

  handleGift = (e) => {
    e.preventDefault();
    console.log("Gift submitted!");
    // Populate the gift object
    // Push newly-created object into allGifts array
    // Clear both input fields

    // Spread operator -- ...this.state.gift
    const newGift = {
      recipientName: this.state.recipientName,
      giftName: this.state.giftName,
    };
    const newAllGifts = [...this.state.allGifts, newGift];
    this.setState({
      recipientName: "",
      giftName: "",
      allGifts: newAllGifts,
    });
  };

  render() {
    return (
      <div>
        <div>
          <Form
            handleRecipientInput={this.handleRecipientInput}
            recipientNameValue={this.state.recipientName}
            handleGiftInput={this.handleGiftInput}
            giftNameValue={this.state.giftName}
            handleGift={this.handleGift}
          />
        </div>
        <div>
          <GiftList list={this.state.allGifts} />
        </div>
      </div>
    );
  }
}

export default GiftApp;
