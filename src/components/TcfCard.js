import React from 'react';

const TcfCard = props => {
  const { tcf } = props;

  return (
    <div className='card'>
      <h2>Name: { tcf.name }</h2>
      <p>Votes: { tcf.votes }</p>
      <img src={ tcf.image }></img>
      <br />
      <button onClick={() => {
        props.increaseVote(tcf.id)
      }}>
        Upvote
      </button>
      <button onClick={() => {
        props.decreaseVote(tcf.id)
      }}>
        Downvote
      </button>
    </div>
  )
}

export default TcfCard;
