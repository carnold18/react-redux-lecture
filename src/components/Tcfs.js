import React from 'react';
import TcfCard from './TcfCard';

import { connect } from 'react-redux';

const Tcfs = props => {

  const mapTcfs = () => {
    let tcfArray = Object.values(props.tcfs);
    let tcfCards = tcfArray.map(tcf => {
      return (
        <TcfCard 
          key={ tcf.id }
          // increaseVote={ props.increaseVote }
          // decreaseVote={ props.decreaseVote }
          tcf={ tcf }
        />
      )
    })
    return tcfCards;
  }

  return (
    <div>
      <div className='container'>
        {mapTcfs()}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tcfs: state.tcfs
  }
}
 
export default connect(mapStateToProps)(Tcfs);
