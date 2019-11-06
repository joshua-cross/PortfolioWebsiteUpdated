export default (state = "access granted", action) => {
    switch(action.type) {
        case "LOGIN":
            console.log("setting login to: " + action.payload);
            return action.payload
        default: 
            return state;
    }
} 