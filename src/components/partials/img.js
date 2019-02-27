import React from 'react';
/**
 * Creating a responsive image from asset using type and ig
 * @param {string} props.type Image type [hotels/rooms]
 * @param {string} props.imageId Image id
 * @returns {string} Image HTML component
 */
export const Img = props => {
  return <div className="img" style={{ backgroundImage: `url(../images/${props.type}/${props.imageId}.jpg)` }} />;
};
