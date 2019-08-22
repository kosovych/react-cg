import React from 'react';

const UserOutput = ({name}) => {
  const style = {
    color: 'green',
  }
  return (
    <div>
      <p><span style={style}>{name || "NoName"}</span> - this is my name! 😎</p>
    </div>
  )
}

export default UserOutput;