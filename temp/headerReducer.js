const initialState = {
  title: 'TCF'
}



const headerReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATE_TITLE': 
      const titleToUpdate = state.title === 'TCF' ? 'SEC' : 'TCF'
      return {
        ...state,
        title: titleToUpdate,
      }
    default:
      return state;
  }
}

export default headerReducer;