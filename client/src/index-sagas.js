import LoginSaga from "./components/LoginPage/sagas"
import {all} from "redux-saga/effects"

console.log(LoginSaga)
export default function* IndexSaga () {
    console.log("here now")
    yield all([
        LoginSaga(),
    ])
}