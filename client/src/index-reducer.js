import { combineReducers } from "redux"
// import {reducer as form } from 'redux-form'
import useragent from "./useragent/reducer"

const IndexReducer = combineReducers(
    {
        useragent,
        
    }
)

export default IndexReducer