import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
      this.state = {
        title: "David"
      }
  }

  updateTitle = () => {
    this.state.title === "David" ? 
    this.setState({ title: "ZIGGY"}) : 
    this.setState({ title: "David"})
  }

  render() {
      return (
        <header className="App-header">
          <div onClick={this.updateTitle}>
           {this.state.title} Tally
          </div>
        </header>
      )
    }
}


export default Header;
