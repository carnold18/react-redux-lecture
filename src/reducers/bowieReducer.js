// step 5 create the bowieReducer function
// question
//  - what does this function take as an argument? (state && action)
//  - a reducer allows us access to a state
// step 6 create initial state and set it as default in the 
// state argument
// step 14 move your constructor state into your initial state as
// well as any imported local files 
// step 15 comment out all constructor / import code in MainContainer
// that was moved into this file

import babyBowie from '../assets/babyBowie.jpeg';
import hipsterBowie from '../assets/hipsterBowie.jpg';
import ziggyBowie from '../assets/ziggyBowie.jpg';
import goblinBowie from '../assets/goblinBowie.jpg';

const initialState = {
    bowies: {
        1: {
          id: 1,
          name: 'Baby Bowie',
          votes: 0,
          image: babyBowie
        },        
        2: {
          id: 2,
          name: 'Hipster Bowie',
          votes: 0,
          image: hipsterBowie
        },
        3: {
          id: 3,
          name: 'Ziggy Stardust',
          votes: 0,
          image: ziggyBowie
        },
        4: {
          id: 4,
          name: 'Goblin King',
          votes: -1000,
          image: goblinBowie
        },
      }
}

// step 20 move functions from MainContainer to here.

increaseVote = (bowieId) => {
    this.setState({
      bowies: {
        ...this.state.bowies,
        [bowieId]: {
          ...this.state.bowies[bowieId],
          votes: this.state.bowies[bowieId]['votes'] + 1
        }
      }
    })
  }

  decreaseVote = (bowieId) => {
    this.setState({
      bowies: {
        ...this.state.bowies,
        [bowieId]: {
          ...this.state.bowies[bowieId],
          votes: this.state.bowies[bowieId]['votes'] - 1
        }
      }
    })
  }

const bowieReducer = (state = initialState, action) => {
    // step 14 check what the action is 
    console.log(action);

    // step 7 create your switch statement
    // question
    //  - what does your statement switch on? (action)
    //  - it is passed in as a payload based on how state changes
    switch(action.type) {
        // step 8 input a default condition
        default: 
            return state;
    }
}

// step 9 export the reducer 
export default bowieReducer;
