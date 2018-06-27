import React from 'react';
import { SVGIcon } from './SVGIcon';

const Rating = props => {
  let arr = [];
  for (let i = 0; i < props.max; i++) {
    let name = 'STAR_BORDER';
    if (props.rate > i) {
      props.rate - i > 0 && props.rate - i < 1 ? (name = 'STAR_HALF') : (name = 'STAR');
    }
    arr.push(
      <li className="list-inline-item" key={i}>
        <SVGIcon name={name} fill={props.color} />
      </li>
    );
  }
  return (
    <ul className="rating" title={props.rate}>
      {arr}
    </ul>
  );
};

Rating.defaultProps = {
  max: 5,
  rate: 2.5,
  height: 8,
  color: '#F4A11E'
};

export default Rating;
