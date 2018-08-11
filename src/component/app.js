import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import createAppstore from '../lib/store';

const store = createAppstore();

export default class App extends Component {

    render() {
        return(
            <Provider store={store}>
            <Fragment>
                <h1>Catagory app</h1>
                {/* <CatagoryForm/>
                <CatagoryList/> */}
            </Fragment>
            </Provider>
        )
    }
}