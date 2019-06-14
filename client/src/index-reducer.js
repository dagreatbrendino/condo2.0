import { combineReducers } from "redux"
import {reducer as form } from 'redux-form'
import useragent from "./useragent/reducer"
import login from "./components/LoginPage/reducer"

const IndexReducer = combineReducers(
    {
        useragent,
        form,
        login
    }
)

export default IndexReducer