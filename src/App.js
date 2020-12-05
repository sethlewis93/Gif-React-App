import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  state = {
    gifs: [],
    loading: true 
  };

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'hello') => {
    // data comes in json format
    Axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC `)
      .then(response => {
        this.setState({
          gifs: response.data.data, 
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching & parsing data', error);
      });
  }

  render() { 
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <GifList data={this.state.gifs}/> 
        }
        </div>
      </div>
    );
  }
}
