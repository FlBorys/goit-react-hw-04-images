import { Component } from "react";
import { Modal } from "components/Modal/Modal";
import { ItemImg, ItemLi } from "./ImageGalleryItem.styled";

export class ImageGalleryItem extends Component {

    state = {
        modalStatus: false
    }


    switchModal = () => {
        this.setState(state => ({ modalStatus: !state.modalStatus }))
    }
    render() {
        const { modalStatus } = this.state;
        return (
            <>
                <ItemLi>
                    <ItemImg src={this.props.smallImage} onClick={this.switchModal} alt="" />
                </ItemLi>

                {modalStatus && <Modal onClick={this.switchModal} image={this.props.largeImage} />}
            </>
        )
    }
}