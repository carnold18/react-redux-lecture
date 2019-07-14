const initialState = {
  title: 'BOWIE'
}



const headerReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATE_TITLE': 
      const titleToUpdate = state.title === 'DAVID' ? 'ZIGGY STARDUST' : 'DAVID'
      return {
        ...state,
        title: titleToUpdate,
      }
    default:
      return state;
  }
}

export default headerReducer;