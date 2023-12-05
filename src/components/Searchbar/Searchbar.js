import { Component } from "react";
import Notiflix from "notiflix";
import { ButtonLabel, FormButton, FormInput, SearchForm, SearchbarDiv } from "./Searchbar.styled";


export class Searchbar extends Component {

    state = {
        isHovered: false,
        searchInput: ""
    }


    handHover = () => {
        this.setState({
            isHovered: true
        });
    }

    inputChanges = event => {
        const { value } = event.currentTarget;
        this.setState({ searchInput: value.toLowerCase() })
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchInput.trim() === "") {
            Notiflix.Notify.failure('Please enter something');
            this.setState({ status: "" })
        }
        this.props.onSubmit(this.state.searchInput)
        this.resetInput();
    }

    resetInput = () => {
        this.setState({
            searchInput: ''
        })
    }
    render() {
        return (
        <SearchbarDiv>   
        <SearchForm name="search-form" onSubmit={this.handleSubmit}>
                    <FormButton onMouseOver={this.handleHover} type='submit'>
                        <ButtonLabel>Search</ButtonLabel>
        </FormButton>
        <FormInput type="text" name="search" onMouseOver={this.handHover} onChange={this.inputChanges}
            value={this.state.searchInput} placeholder="Search images and photos"/>
        </SearchForm>
        </SearchbarDiv>
        );
    }
}