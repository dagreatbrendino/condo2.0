import API from "../utils/API"
let decodedCookie = decodeURIComponent(document.cookie);
let cookieArr = decodedCookie.split(";")
let cookieId

cookieId = cookieArr.filter(cookie=> cookie.indexOf('id=' == 0))
cookieId = parseInt(cookieId[0].substring(3, cookieId[0].length))
console.log(cookieId)
const initialState = {                
        id: cookieId || null,
    }

const reducer = function clientReducer (state = initialState, action){
    switch (action.type){
        case "USER_SET":
            console.log("action ",action)
            return{
                id: action.userData.id,
            }
        case "USER_UNSET":
            return{
                id: null,
            }
        default:
            return state
    }
}

export default reducer