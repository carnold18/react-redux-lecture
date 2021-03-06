import React from 'react';
import Bowies from './Bowies';


class MainContainer extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     bowies: {
  //       1: {
  //         id: 1,
  //         name: 'Baby Bowie',
  //         votes: 0,
  //         image: babyBowie
  //       },        
  //       2: {
  //         id: 2,
  //         name: 'Hipster Bowie',
  //         votes: 0,
  //         image: hipsterBowie
  //       },
  //       3: {
  //         id: 3,
  //         name: 'Ziggy Stardust',
  //         votes: 0,
  //         image: ziggyBowie
  //       },
  //       4: {
  //         id: 4,
  //         name: 'Goblin King',
  //         votes: -1000,
  //         image: goblinBowie
  //       },
  //     }
  //   }
  // }

  // increaseVote = (bowieId) => {
  //   this.setState({
  //     bowies: {
  //       ...this.state.bowies,
  //       [bowieId]: {
  //         ...this.state.bowies[bowieId],
  //         votes: this.state.bowies[bowieId]['votes'] + 1
  //       }
  //     }
  //   })
  // }

  // decreaseVote = (bowieId) => {
  //   this.setState({
  //     bowies: {
  //       ...this.state.bowies,
  //       [bowieId]: {
  //         ...this.state.bowies[bowieId],
  //         votes: this.state.bowies[bowieId]['votes'] - 1
  //       }
  //     }
  //   })
  // }
  
  render() {
    return (
      <div>
        <Bowies 
          increaseVote={ this.increaseVote }
          decreaseVote={ this.decreaseVote }
        />
        <h1> THANKS FOR VOTING </h1>
      </div>
    )
  }
}

export default MainContainer;
