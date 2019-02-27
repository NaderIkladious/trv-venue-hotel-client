import React from 'react';
import { SVGIcon } from '.';
import PropTypes from 'prop-types';

/**
 *
 * Get stars HTML depends on the inputs
 * @param {Object} props Rating object info (max, rate, height, color, handleClick)
 * @param {number} props.max Maximum numbers of stars to have
 * @param {number} props.rate The rating
 * @param {string} props.color Color of the stars
 * @param {func} props.handleClick Color of the stars
 */
export const Rating = props => {
  let arr = [];
  for (let i = 0; i < props.max; i++) {
    let name = 'STAR_BORDER';
    if (props.rate > i) {
      props.rate - i > 0 && props.rate - i < 1 ? (name = 'STAR_HALF') : (name = 'STAR');
    }
    arr.push(
      <li className="list-inline-item" key={i} onClick={() => props.handleClick(i + 1)}>
        <SVGIcon width={props.width} name={name} fill={props.color} />
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
  color: '#F4A11E',
  handleClick: () => false
};

Rating.propTypes = {
  max: PropTypes.number,
  rate: PropTypes.number,
  color: PropTypes.string,
  handleClick: PropTypes.func
};
