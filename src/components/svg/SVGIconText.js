import React from 'react';
import PropTypes from 'prop-types';
import { SVGIcon } from '.';

/**
 * Rendering an Icon with text next to it
 * @param {string} obj.text Text to be shown after icon
 * @param {string} obj.className class name to be added on the icon and text wrapper
 * @returns {string} HTML for the component
 */
export const SVGIconText = ({ text, className = '', ...props }) => {
  return (
    <div className={className}>
      <SVGIcon {...props} />
      <span className="mx-1">{text}</span>
    </div>
  );
};

SVGIconText.defaultProps = {
  className: '',
  text: ''
};

SVGIconText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
};
