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

const mapStateToProps = beef => {
  console.log(beef)
  return {
    tcfs: beef.tcfReducer.tcfs
  }
}
 
export default connect(mapStateToProps)(Tcfs);
