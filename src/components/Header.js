import React from 'react';
import { connect } from "react-redux";
import { updateTitle } from '../actions/headerActions'

// class Header extends React.Component {
  // constructor() {
  //   super();
  //     this.state = {
  //       title: "David"
  //     }
  // }

  // updateTitle = () => {
  //   this.state.title === "David" ? 
  //   this.setState({ title: "ZIGGY"}) : 
  //   this.setState({ title: "David"})
  // }

  // render() {
  const Header = (props) => {
    // change all instance of this and this.state to props
    console.log("header props:", props)
    return (
      <header className="App-header">
        <div onClick={props.updateTitle}>
         {props.title} Tally
        </div>
      </header>
    )
  }
// }

const mapStateToProps = (state) => {
  console.log("i am the state:", state)
  return {
    title: state.headerReducer.title
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("i am the disatch:", dispatch)
  return {
    updateTitle: () => dispatch(updateTitle())
  }
}
// const Header = props => {

//   return (
//     <header className="App-header">
//       <div onClick={props.updateTitle}>
//         {props.title} Tally
//       </div>
//     </header>
//   )
// }


export default connect(mapStateToProps, mapDispatchToProps)(Header);
