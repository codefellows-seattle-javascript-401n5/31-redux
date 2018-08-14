import React, {Component, Fragment} from 'react';
import uuid from 'uuid/v4';
// import {connect} from 'react-redux';
// import {catCreate} from '../action/category-action';
//import CategoryItem from './category-item';
// import Timestamp from 'react-timestamp';
// import { Text } from 'react-native';
// import { isDate } from 'util';

export default class CatCreateForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {   //why use this.defaultState? 
      timestamp: Date.now(),
      name: '',
      budget: 0,
      view: 'normal'
    };
    const initialState = this.props.category || this.defaultState;

    this.state =  {...initialState};
  }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({...this.state, id: uuid() });
  //   console.log(this.state);
  // }
  onSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState, id: uuid() });
    console.log(this.state);
  };

  onChange = (e) => {
    const val =
    e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value;

  const changedBit = {
    [e.target.name]: val
  };
  this.setState(changedBit);
  }

  buttonText = () => {
    if(this.state.view === 'normal') {
        return 'Submit';
      } else {
          return 'Edit';
      }
    }

    category = () => {
        if(this.state.view === 'normal') {

        }
    }
    display = () => {
      if(this.state.id !== null) {
        return(this.state.name);
      } 
    }

  render() {
      return(
        <Fragment>
          <fieldset>
          <form onSubmit={this.onSubmit} onChange={this.onChange}>
              <label>Name
              <input name="name" value = {this.state.name}/>
              </label>
              <label>Budget
              <input name="budget" type="number" value = {this.state.budget}/>
              </label>
              <button>{this.buttonText()}</button>
          </form>
          </fieldset>
        </Fragment>
      );
    
  }
}

// const mapDispatchToProps = (dispatch) => ({
//     catCreate: cat => dispatch(catCreate(cat))
// });

// export default connect(null, mapDispatchToProps)(CatCreateForm);

// onUpdate={props.onUpdate}