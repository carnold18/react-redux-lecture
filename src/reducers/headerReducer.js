const initialState = {
    title: "David"
}

const headerReducer = (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE_TITLE":
            const titleToUpdate = state.title === "David" ? "ZIGGY" : "David"
            return {
                ...state,
                title: titleToUpdate
            }
            default:
                return state;
    }
}

export default headerReducer;


// the purpose of the reducer is to take in an initial state
// and an action