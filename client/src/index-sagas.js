import LoginSaga from "./components/LoginPage/sagas"

console.log(LoginSaga)
export default function* IndexSagas () {
    console.log("here now")
    yield [
        LoginSaga(),
    ]
}