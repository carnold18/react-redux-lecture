import React from 'react';

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
