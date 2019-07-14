import React from 'react';
// step 19 import connect so that we can work with our functions
// increase and decreasevotes

import { connect } from 'react-redux';

// in order to be able to use the functions (actions)
// we have to dispatch the actions

const BowieCard = props => {
  const { bowie } = props;

  return (
    <div className='card'>
      <h2>Name: { bowie.name }</h2>
      <p>Votes: { bowie.votes }</p>
      <img src={ bowie.image } alt={ bowie.name }></img>
      <br />
      <button onClick={() => {
        props.increaseVote(bowie.id)
      }}>
        Upvote
      </button>
      <button onClick={() => {
        props.decreaseVote(bowie.id)
      }}>
        Downvote
      </button>
    </div>
  )
}

export default BowieCard;
