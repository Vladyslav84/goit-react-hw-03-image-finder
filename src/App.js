import React, { Component } from 'react';
import Container from './Components/Container/Container';
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios';
import ImageGallery from './Components/ImageGallery/ImageGallery'
import ImageGalleryItem from './Components/ImageGalleryItem/ImageGalleryItem'
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';

class App extends Component {

  state = {
    imgGallery: [],
    imgName: '',
    pageNum: 1,
    perPage: 12,
    PIXABAY_KEY: '21694115-487a2c793b7208539d5182bab',
    selectedObg: null,
    // showMdl: false,

  };

  componentDidUpdate(prevProps, prevState) {

    if (this.state.imgName.trim() !== '' && this.state.imgName !== prevState.imgName || this.state.pageNum !== prevState.pageNum)
    {

      axios.get(`https://pixabay.com/api/?key=${ this.state.PIXABAY_KEY }&q=${ this.state.imgName }&image_type=photo&page=${ this.state.pageNum }&per_page=${ this.state.perPage }&image_type=photo&orientation=horizontal&`)
        .then(function (response) {

          return response.data.hits;

        })

        .then(NewImgGallery => this.setState(prevState => ({
          imgGallery: [...prevState.imgGallery, ...NewImgGallery]
        })))
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
    }))

  };

  handleSelectObg = (obg) => {

    this.setState({
      selectedObg: obg,
    })
  }

  toggleMdl = (evt) => {

    // console.log(evt.target.nodeName === 'IMG');
    this.setState(({ selectedObg }) => ({
      selectedObg: null,
    }))

  }
  render() {

    console.log(this.state.selectedObg);
    return (
      <Container>
        <SearchBar onSubmit={this.searchBarInputValueHandler} />
        <ImageGallery
          imgArr={this.state.imgGallery}
          onSelect={this.handleSelectObg}
        >
          <ImageGalleryItem />
        </ImageGallery>
        <Button onLoadMore={this.loadMoreBtnHandler} />
        {this.state.selectedObg && <Modal
        >
          <img src={this.state.selectedObg.largeImageURL} alt={this.state.selectedObg.largeImageURL} />
          <button type='button'
            onClick={this.toggleMdl}
          >Close</button>
        </Modal>}
      </Container>

    );
  }
}

export default App;


// "export class App extends Component {
//   state = {
//       selectedImage: null,
//   };

//   handleSelectImage = imageUrl => this.setState({ selectedImage: imageUrl });

//   render() {
//       return (
//           <div>
//               <Gallery onSelect={handleSelectImage} />

//               {this.state.selectedImage && <Modal />}
//           </div>
//       );
//   }
//     }

//   // Gallery
//   map(i => <div onClick={() => onSelect(i.largeImageURL)}>{i.name}</div>); "