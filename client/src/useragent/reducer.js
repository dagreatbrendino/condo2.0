const initialState = {
    id: null,
    token: null,
}

const reducer = function clientReducer (state = initialState, action){
    switch (action.type){
        case "USER_SET":
            return{
                id: action.userData.userId,
                token: action.token
            }
        case "USER_UNSET":
            return{
                id: null,
                token: null
            }
        default:
            return state
    }
}

export default reducer