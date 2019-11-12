export default (state = {}, action) => {
    switch(action.type) {
        case "GET_SECONDARY_PROJECT":
            return action.payload;
        default:
            return state;
    }
}