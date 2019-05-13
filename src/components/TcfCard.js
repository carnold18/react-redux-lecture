import React from 'react';
import { connect } from 'react-redux';
import { increaseVote, decreaseVote } from '../actions/tcfActions';

const TcfCard = props => {
  const { tcf } = props;
  console.log('connect', connect)

  return (
    <div className='card'>
      <h2>Name: { tcf.name }</h2>
      <p>Votes: { tcf.votes }</p>
      <img src={ tcf.image } alt={ tcf.name }></img>
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

const mapDispatchToProps = dispatch => {
  return {
    increaseVote: (id) => dispatch(increaseVote(id)),
    decreaseVote: (id) => dispatch(decreaseVote(id))
  }
}

export default connect(null, mapDispatchToProps)(TcfCard);
