export default (state = {}, action) => {
    switch(action.type) {
        case "GET_PROJECT":
            return action.payload
        default:
            return state;
    }
}