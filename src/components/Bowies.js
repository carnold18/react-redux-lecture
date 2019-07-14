import React from 'react';
import BowieCard from './BowieCard';

const Bowies = props => {

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


 
export default Bowies;
