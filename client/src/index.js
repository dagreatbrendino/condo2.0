import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider} from 'react-redux'


ReactDOM.render(<Provider><App /></Provider>, document.getElementById("root"));
registerServiceWorker();
