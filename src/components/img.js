import React from 'react';

export const Img = props => {
  return <div className="img" style={{ backgroundImage: `url(../images/${props.type}/${props.imageId}.jpg)` }} />;
};
