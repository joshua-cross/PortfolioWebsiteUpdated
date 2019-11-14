export default (state = "", action) => {
    switch(action.type) {
        case "LOGIN":
            console.log("setting login to: " + action.payload);
            return action.payload
        default: 
            return state;
    }
} 