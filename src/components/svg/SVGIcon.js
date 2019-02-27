import React from 'react';
import { ICONS } from './icons';
import PropTypes from 'prop-types';

/**
 * Render SVG Icons
 * @returns {string} SVG HTML elemt
 */
export const SVGIcon = props => {
  const icon = ICONS[props.name] || ICONS['CIRCLE'];
  return (
    <svg
      width={props.width}
      style={props.style}
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={props.viewBox || icon.viewbox}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {icon.path({ fill: props.fill })}
    </svg>
  );
};

SVGIcon.defaultProps = {
  name: 'CIRCLE',
  style: { verticalAlign: 'middle' },
  fill: 'currentColor',
  viewBox: null,
  width: '1em',
  className: ''
};

SVGIcon.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  fill: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string
};
