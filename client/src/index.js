import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider} from 'react-redux'

import IndexReducer from "./index-reducer"
import IndexSagas from "./index-sagas"

const sagaMiddleware = createSagaMiddleware()

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&  
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
//defining our store
const store = createStore(
    IndexReducer, 
    composeSetup(applyMiddleware(sagaMiddleware))
  )
  
  // start the root saga
  console.log(sagaMiddleware.run(IndexSagas).toPromise())
  sagaMiddleware.run(IndexSagas)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();
