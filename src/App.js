import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList'

class App extends Component {   
  
  componentDidMount() {
    console.log(this.props);
    this.props.fetchCats();
  }

  // renderLoadingMessage = () => {
  //   return <h4>Loading...</h4>
  // }

  render() {
    console.log(this.props.catPics)
    return (
      <div className='App'>
        <h1>CatBook</h1>
        {/* add CatList component here */}
        < CatList catPics={this.props.catPics} />

        {/* { this.props.catPics.loading ?  
            this.renderLoadingMessage() : <CatList catPics={this.props.catPics} /> 
        } */}

      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    catPics: state.cats, // becomes props in app component
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats()),
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(App)

