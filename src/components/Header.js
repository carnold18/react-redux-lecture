import React from 'react';

const Header = props => {

  return (
    <header className="App-header">
      <div onClick={props.updateTitle}>
        {props.title} Tally
      </div>
    </header>
  )
}


export default Header;
