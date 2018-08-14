import React, { Component, Fragment } from 'react';
import CatCreateForm from './category-form';
//import { catDestroy, catUpdate } from '../action/category-action';

export default class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'normal'
    }
  }
  updateView = () => {
    this.setState({view: 'edit'});
    return true;
  }
  onDestroy = () => {
      this.props.onDestroy(this.props.category);
    }
  
 catUpdate = (category) => {
  this.props.onComplete(category);
  }

  render() {
      return(
        <Fragment>
          <div onDoubleClick={this.updateView}>
            <li>
              <h3>{this.props.category.name}</h3>
            </li>
            <li>
              <h3>{this.props.category.budget}</h3>
            </li>
            <button onClick={this.onDestroy}>Delete</button>
            {this.updateView && <CatCreateForm onComplete={this.catUpdate} category={this.props.category}/>}
          </div>
     
          
        </Fragment>
      );
      
  }
}
// const mapDispatchToProps = (dispatch) => ({
//     onRemove: category => dispatch(catDestroy(category)),
//     onUpdate: category => dispatch(catUpdate(category)),
// });
// export default connect(null, mapDispatchToProps)(CategoryItem);