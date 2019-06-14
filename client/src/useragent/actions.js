export function setUser (userData) {
    return {
        type: "USER_SET",
        userData,
    }
}

export function unsetUser (){
    return {
        type: "USER_UNSET"
    }
}