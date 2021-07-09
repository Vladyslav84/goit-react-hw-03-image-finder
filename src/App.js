import React, { Component } from 'react';
import Container from './Components/Container/Container'
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios';
import ImageGallery from './Components/ImageGallery/ImageGallery'
import ImageGalleryItem from './Components/ImageGalleryItem/ImageGalleryItem'
// import apiRequest from './Components/apiRequest';

// console.log(ImageGallery)

class App extends Component {

  state = {
    imgGallery: [],
    imgName: '',
    pageNum: 1,
    perPage: 12,
    PIXABAY_KEY: '21694115-487a2c793b7208539d5182bab',

  };

  componentDidUpdate(prevProps) {

    if (this.state.imgName.trim() !== '')
    {

      axios.get(`https://pixabay.com/api/?key=${ this.state.PIXABAY_KEY }&q=${ this.state.imgName }&image_type=photo&page=${ this.state.pageNum }&per_page=${ this.state.perPage }&image_type=photo&orientation=horizontal&`)
        .then(function (response) {

          return response.data.hits;

        })
        .then(imgGallery => this.setState({ imgGallery }))
        .catch(error => {
          console.log(error);
        })

    }
  };

  componentDidMount() {

  };

  searchBarInputValueHandler = (InputValue) => {

    if (InputValue.trim() !== '')
    {
      this.setState({
        imgName: InputValue,
      })
    }
  }

  render() {

    // console.log(this.props.SearchBar);
    // console.log(this.state.imgGallery);
    return (
      <Container>
        <SearchBar onSubmit={this.searchBarInputValueHandler} />
        <ImageGallery
          imgArr={this.state.imgGallery}
        >
          <ImageGalleryItem />
        </ImageGallery>
      </Container>

    );
  }
}

export default App;
