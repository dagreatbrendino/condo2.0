const initialState = {
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
}

const reducer = function loginReducer (state= initialState, action){
    switch(action.type){
        case "LOGIN_REQUESTING":
            return {
                requesting: true,
                successful: false,
                messages: [],
                errors: [],
            }
        
        case "LOGIN_SUCCESS":
            return {
                errors: [],
                messages: [],
                requesting: false,
                successful: true,
            }
        case "LOGIN_ERROR":
            return {
                errors: state.errors.concat([{
                    body: action.error.toString(),
                    time: new Date(),
                }]),
                messages: [],
                requesting: false,
                successful: false
            }

        default:
            return state
    }
}

export default reducer