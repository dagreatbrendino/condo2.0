import API from "../utils/API"
import JWT from "jsonwebtoken"
//grab the cookie 
let decodedCookie = decodeURIComponent(document.cookie);
//split it so we can use it
let cookieArr = decodedCookie.split(";")
console.log(cookieArr)
let cookieToken
//fields that will hold initial values if the user has a valid token
let userId
let userName
let userEmail
let userType
let userSchoolId
let userCommitteeId
let userCountry
//if there is a token cookie, extract it, otherwise we will be left with an empty array
cookieToken = cookieArr.filter(cookie=> cookie.trim().indexOf('token=') == 0)
console.log(cookieToken)
//get the value of that token cookie
cookieToken = cookieToken[0].trim().substring(6, cookieToken[0].length)
//as long as it is not an empty string or array, it will be decoded by JWT
if(cookieToken){
    let decodedToken = JWT.verify(cookieToken, process.env.JWT_SECRET || "chocolate-chip-cookies")
    let userInfo = decodedToken.data
    //assign the relevant information from the token
    userId = userInfo.id
    userName = userInfo.name
    userEmail = userInfo.email
    userType = userInfo.userType
    userSchoolId = userInfo.schoolId
    userCommitteeId = userInfo.committeeId
    userCountry = userInfo.country
}

// console.log(decoded)
const initialState = {                
        id: userId || null,
        name: userName || null,
        email: userEmail || null,
        type: userType || null,
        schoolId: userSchoolId || null,
        committeeId: userCommitteeId || null,
        country: userCountry || null
    }

const reducer = function clientReducer (state = initialState, action){
    switch (action.type){
        case "USER_SET":
            console.log("action ",action)
            return{
                id: action.userData.id,
                name: action.userData.name,
                email: action.userData.email,
                type: action.userData.userType,
                schoolId: action.userData.schoolId,
                committeeId: action.userData.committeeId,
                country: action.userData.country
            }
        case "USER_UNSET":
            document.cookie = "token=;"
            return{
                id: null,
                name:  null,
                email: null,
                type: null,
                schoolId: null,
                committeeId: null,
                country: null
            }
        default:
            return state
    }
}

export default reducer