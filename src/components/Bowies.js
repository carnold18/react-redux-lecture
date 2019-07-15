import React from 'react';
import BowieCard from './BowieCard';
// step 16 import Connect
import { connect } from 'react-redux';

const Bowies = props => {

  // console.log(connect)
  console.log(props)
  const mapBowies = () => {
    let bowieArray = Object.values(props.bowies);
    let bowieCards = bowieArray.map(bowie => {
      return (
        <BowieCard 
          key={ bowie.id }
          increaseVote={ props.increaseVote }
          decreaseVote={ props.decreaseVote }
          bowie={ bowie }
        />
      )
    })
    return bowieCards;
  }

  return (
    <div>
      <div className='container'>
        {mapBowies()}
      </div>
    </div>
  )
}

// step 18 use the function that we gain access to via connect
const mapStateToProps = (state) => {
  console.log("this is our state:", state)
  return {
    bowies: state.bowieReducer.bowies
  }
}


// step 19 call mapStateToProps and curry this component
// export default Bowies;
export default connect(mapStateToProps)(Bowies);
