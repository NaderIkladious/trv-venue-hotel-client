import React from 'react';

const Img = props => {
  return <div className="img" style={{ backgroundImage: `url(../images/${props.type}/${props.imageId}.jpg)` }} />;
};

export default Img;
