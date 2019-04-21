const initialState = {
  tcfs: {
    1: {
      id: 1,
      name: 'David',
      votes: 0,
      image: ''
    },        
    2: {
      id: 2,
      name: 'Aspen',
      votes: 0,
      image: ''
    },
    3: {
      id: 3,
      name: 'Erin',
      votes: 0,
      image: ''
    },
    4: {
      id: 4,
      name: 'Cody',
      votes: 0,
      image: ''
    },
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREASE_VOTE':
      return {
        ...state,
        tcfs: {
          ...state.tcfs,
          [action.payload.id]: {
            ...state.tcfs[action.payload.id],
            votes: state.tcfs[action.payload.id]["votes"] + 1
          }
        }
      }
    case 'DECREASE_VOTE':
      return {
        ...state,
        tcfs: {
          ...state.tcfs,
          [action.payload.id]: {
            ...state.tcfs[action.payload.id],
            votes: state.tcfs[action.payload.id]["votes"] - 1
          }
        }
      }
    default:
      return state;
  }
}

export default reducer;