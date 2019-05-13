import React from 'react';
import Tcfs from './Tcfs';


class MainContainer extends React.Component {
  // constructor() {
  //   super();
    // this.state = {
    //   tcfs: {
    //     1: {
    //       id: 1,
    //       name: 'David',
    //       votes: 0,
    //       image: me
    //     },        
    //     2: {
    //       id: 2,
    //       name: 'Aspen',
    //       votes: 0,
    //       image: aspen
    //     },
    //     3: {
    //       id: 3,
    //       name: 'Chris',
    //       votes: 0,
    //       image: chris
    //     },
    //     4: {
    //       id: 4,
    //       name: 'Cody',
    //       votes: -9000,
    //       image: cody
    //     },
    //     5: {
    //       id: 5,
    //       name: 'Ix',
    //       votes: 0,
    //       image: ix
    //     }
    //   }
    // }
  // }

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
  
  render() {
    return (
      <div>
        <Tcfs 
          increaseVote={ this.increaseVote }
          decreaseVote={ this.decreaseVote }
        />
        <h1> THANKS FOR VOTING </h1>
      </div>
    )
  }
}

export default MainContainer;
