export default (state = [], action) => {
    switch(action.type) {
        case "GET_SECONDARY_PROJECTS":
            return action.payload;
        default:
            return state;
    }
}