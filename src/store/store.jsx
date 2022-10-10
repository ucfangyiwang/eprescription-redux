import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {drugsReducer} from './drug/drug.reducer'

const store = createStore(drugsReducer, applyMiddleware(thunk));
    
  export default store;
  