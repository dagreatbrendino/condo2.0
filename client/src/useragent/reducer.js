import API from "../utils/API"
const initialState = {                
        id: null,
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
        let serverUser;
        API.getUser()
        .then(user =>{
            console.log("user data ", user)
            if (user.data.id){
                console.log("returning id of ")
                serverUser = {
                    id: user.data.id,
                }
            }
            else{
                serverUser ={
                    id: null,         
                }
            }
        })
        console.log("server user", serverUser)
        return serverUser
    
    }
}

export default reducer