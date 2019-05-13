import aspen from '../assets/aspen.jpeg';
import chris from '../assets/chris.jpeg'
import cody from '../assets/cody.jpeg';
import ix from '../assets/ix.jpeg'
import me from '../assets/me.jpeg';

const initialState = {
    tcfs: {
      1: {
        id: 1,
        name: 'David',
        votes: 0,
        image: me
      },        
      2: {
        id: 2,
        name: 'Aspen',
        votes: 0,
        image: aspen
      },
      3: {
        id: 3,
        name: 'Chris',
        votes: 0,
        image: chris
      },
      4: {
        id: 4,
        name: 'Cody',
        votes: -9000,
        image: cody,
      },
      5: {
        id: 5,
        name: 'Ix',
        votes: 0,
        image: ix
      }
    }
}

const tcfReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_VOTE': 
      return {
        ...state,
          tcfs: {
            ...state.tcfs,
            [action.payload.id]: {
              ...state.tcfs[action.payload.id],
              votes: state.tcfs[action.payload.id]['votes'] + 1
            }
          }
        };
    case 'DECREASE_VOTE': 
      return {
        ...state,
          tcfs: {
            ...state.tcfs,
            [action.payload.id]: {
              ...state.tcfs[action.payload.id],
              votes: state.tcfs[action.payload.id]['votes'] - 1
            }
          }
        }
    default:
      return state;
  }
}

// increaseVote = (tcfId) => {
//   this.setState({
//     tcfs: {
//       ...this.state.tcfs,
//       [tcfId]: {
//         ...this.state.tcfs[tcfId],
//         votes: this.state.tcfs[tcfId]['votes'] + 1
//       }
//     }
//   })
// }

// decreaseVote = (tcfId) => {
//   this.setState({
//     tcfs: {
//       ...this.state.tcfs,
//       [tcfId]: {
//         ...this.state.tcfs[tcfId],
//         votes: this.state.tcfs[tcfId]['votes'] - 1
//       }
//     }
//   })
// }

export default tcfReducer;