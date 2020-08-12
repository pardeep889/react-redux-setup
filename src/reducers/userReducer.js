export default function(state={}, action){
    switch (action.type) {
        case "PROFILE":
            return {...state, profile: action.payload}
        default:
            return state;
    }
}