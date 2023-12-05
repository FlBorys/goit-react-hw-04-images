import { Component } from "react";
import axios from "axios";
import Notiflix from "notiflix";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { AppDiv } from "./App.styled";

const storageKey = { page: 1, pictures: [], status: "pending" };

export class App extends Component {

  state = {
    searchInput: "",
    pictures: [],
    page: 1,
    status: '',
    totalHits: '',
  }


  onSubmit = searchInputValue => {
    this.setState({ searchInput: searchInputValue })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchInput !== this.state.searchInput) {
      this.setState(storageKey);
      this.fetchData();
    }
    if (prevState.page !== this.state.page) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = "39910400-b99b72c510d89a4d4c1fb5edf";

    axios.get(`${BASE_URL}`, {
      params: {
        key: KEY,
        q: this.state.searchInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 12,
        page: this.state.page,
      },
    }).then(result => {
      this.setState({ pictures: [...this.state.pictures, ...result.data.hits], status: 'ready', totalHits: result.data.totalHits })
    }).catch(error => {
      Notiflix.Notify.failure('Something went wrong. Try reloading the page.');
      this.setState({ status: "" })
    });
  }

  loadMore = () => {
    let newPage = this.state.page + 1;
    this.setState({ page: newPage, status: "loading more" });
  }

  render() {
    return (
      <AppDiv>
      <Searchbar onSubmit = {this.onSubmit} />
        <ImageGallery searchInput={this.state.searchInput} status={this.state.status} pictures={this.state.pictures}
          totalHits={this.state.totalHits} page={this.state.page} loadMore = {this.loadMore} />
      </AppDiv>
        )
  }
}