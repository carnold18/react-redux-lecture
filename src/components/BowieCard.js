import React from 'react';
// step 19 import connect so that we can work with our functions
// increase and decreasevotes

import { connect } from 'react-redux';

//step 25
import { increaseVote } from '../actions/bowieActions';
import { decreaseVote } from '../actions/bowieActions';
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

// step 24
const mapDispatchToProps = (dispatch) => {
  return {
    increaseVote: id => dispatch(increaseVote(id)),
    decreaseVote: id => dispatch(decreaseVote(id))
  }
}

// step 26 
// add the connect and pass null as the first argument
// because there is no state
export default connect(null,mapDispatchToProps)(BowieCard);
