import {take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'
import API from "../../utils/API"
import {browserHistory } from 'react-router'
import JWT from "jsonwebtoken"

import {
    setUser,
    unsetUser
} from "../../useragent/actions"

console.log("Somehow here")
function loginAPI ( email, password ){
    return API.loginUser({
        email: email,
        password: password,
        firstLog: false
    })
    .then(response => {
        return response.data
        })
}

function* logout (){
    yield put(unsetUser())
}

function* loginFlow ( email, password ){
    let user;
    try {
        user = yield call(loginAPI, email, password)
        yield put (setUser(user))

        yield put({type: "LOGIN_SUCCESS"})
        // let d = new Date();
        // d.setTime(d.getTime() + (3*24*60*60*1000));
        // var expires = "expires="+ d.toUTCString();
        let token = JWT.sign({data: user}, process.env.JWT_SECRET || "chocolate-chip-cookies", { expiresIn: "72h" })
        document.cookie = `token=${token}`
        window.location.assign("/dashboard")
        // document.cookie = `id=${user.id};${expires}=`
    }
    catch (error){
        yield put({ type: "LOGIN_ERROR", error})
    }
    finally{
        if (yield cancelled()){
            window.location.assign("/login")
        }
    }
    return user
}

function* loginWatcher (){
    while(true){
        console.log("watching...")
        const {email, password} = yield take("LOGIN_REQUESTING")
        console.log("login requested")
        const task = yield fork(loginFlow, email, password)

        const action = yield take(["USER_UNSET, LOGIN_ERROR"])

        if (action.type === "USER_UNSET") yield cancel(task)

        yield call(logout)
    }
}

export default loginWatcher

