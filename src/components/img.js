import React from 'react';

const Img = props => {
  return <img src={`../images/${props.type}/${props.imageId}.jpg`} alt={`${props.type}`} />;
};

export default Img;
