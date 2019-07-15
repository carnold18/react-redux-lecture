// actions are objects with a type and a payload

// step 22 create the payloads for each of the functions
export const increaseVote = (id) => {
    return {
        type: 'INCREASE_VOTE',
        payload: {
            id 
        }
    }
}

export const decreaseVote = (id) => {
    return {
        type: 'DECREASE_VOTE',
        payload: {
            id
        }
    }
}