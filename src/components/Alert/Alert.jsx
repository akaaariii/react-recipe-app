import React from 'react';
import './Alert.scss';

const Alert = ({ alert }) => {
  return (
    <div className="alert">
      <h4>{alert}</h4>
    </div>
  )
}

export default Alert
