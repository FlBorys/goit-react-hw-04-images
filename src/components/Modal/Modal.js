import React, { Component } from "react";
import { ModalDiv, Overlay } from "./Modal.styled";
import { LoaderFunc } from "components/Loader/Loader"; 

export class Modal extends Component {
  state = {
    isLoading: true, 
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    this.loadImage();
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  loadImage = () => {
    const { image } = this.props;
    const img = new Image();

    img.onload = () => {
      this.setState({ isLoading: false });
    };

    img.src = image;
  };

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClick();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClick();
    }
  };

  render() {
    const { image } = this.props;
    const { isLoading } = this.state;

    return (
      <Overlay
        onClick={this.handleBackdropClick}
        className="modal-overlay"
      >
        <ModalDiv>
          {isLoading && <LoaderFunc />}
          <img
            src={image}
            alt=""
            onClick={this.props.onClick}
            style={{ display: isLoading ? "none" : "block" }}
          />
        </ModalDiv>
      </Overlay>
    );
  }
}