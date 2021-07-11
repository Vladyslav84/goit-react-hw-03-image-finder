import React, { Component } from 'react';
import Container from './Components/Container/Container';
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios';
import ImageGallery from './Components/ImageGallery/ImageGallery'
// import ImageGalleryItem from './Components/ImageGalleryItem/ImageGalleryItem'
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import PropTypes from 'prop-types';


class App extends Component {

  state = {
    imgGallery: [],
    imgName: '',
    pageNum: 1,
    perPage: 12,
    PIXABAY_KEY: '21694115-487a2c793b7208539d5182bab',
    selectedObg: null,
    status: 'idle',
    error: null,

  };

  componentDidUpdate(prevProps, prevState) {



    if (this.state.imgName.trim() !== '' && this.state.imgName !== prevState.imgName || this.state.pageNum !== prevState.pageNum)
    {
      this.setState({ status: 'pending' })

      axios.get(`https://pixabay.com/api/?key=${ this.state.PIXABAY_KEY }&q=${ this.state.imgName }&image_type=photo&page=${ this.state.pageNum }&per_page=${ this.state.perPage }&image_type=photo&orientation=horizontal&`)
        .then(function (response) {

          return response.data.hits;

        })
        .then(
          NewImgGallery => this.setState(prevState => ({
            imgGallery: [...prevState.imgGallery, ...NewImgGallery],
            status: 'resolved',
          }))

        )
        .catch(
          error => this.setState({ error: 'error', status: "rejected" })
        )

      // if (this.state.imgGallery.length === 0)
      // {

      //   alert(`Sorry, we did not find such pictures ${ this.state.imgName }`)

      // }

    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });


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

    if (this.state.imgName !== InputValue)
    {
      {
        this.setState({
          imgGallery: [],
          pageNum: 1,
        })
      }

    }

  };

  loadMoreBtnHandler = () => {
    this.setState(prevState => ({
      pageNum: prevState.pageNum += 1,
      // status: "pending"
    }))

  };

  handleSelectObg = (obg) => {

    this.setState({
      selectedObg: obg,
      status: 'pending'
    })
  }

  toggleMdl = (evt) => {

    // console.log(evt.target.nodeName === 'IMG');
    this.setState(({ selectedObg }) => ({
      selectedObg: null,
      // status: 'idle'
    }))
  };

  render() {

    return (
      <Container>
        <SearchBar onSubmit={this.searchBarInputValueHandler} />
        <ImageGallery
          imgArr={this.state.imgGallery}
          onSelect={this.handleSelectObg}
        >
        </ImageGallery>
        {this.state.imgName !== '' && <Button onLoadMore={this.loadMoreBtnHandler} />}

        {this.state.selectedObg && <Modal onClose={this.toggleMdl} >
          <img src={this.state.selectedObg.largeImageURL} alt={this.state.selectedObg.largeImageURL} />
          <button
            type='button'
            onClick={this.toggleMdl}
          >Close</button>
        </Modal>}

        {this.state.status === 'pending' &&
          <>
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={300}
              width={300}
            />
            Loading...
          </>
        }

      </Container>

    );
  }
}

export default App;

