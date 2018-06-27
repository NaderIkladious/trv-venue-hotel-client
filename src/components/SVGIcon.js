import React from 'react';
import { ICONS } from '../icons';

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

export const SVGIconText = ({ text, className = '', ...props }) => {
  return (
    <div className={className}>
      <SVGIcon {...props} />
      <span className="mx-1">{text}</span>
    </div>
  );
};
