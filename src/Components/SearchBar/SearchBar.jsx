import React, { Component } from 'react';
import s from './SearchBar.module.css';

class SearchBar extends Component {

  state = {
    inputValue: '',
  }

  handleChange = e => {

    this.setState({ inputValue: e.target.value });
    // this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.resetinputValue();
    //  console.log('kkk')
  };

  resetinputValue = () => {
    this.setState(
      {
        inputValue: '',
      }
    )

  };


  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}

          />
        </form>
      </header>
    )
  }
}

export default SearchBar;