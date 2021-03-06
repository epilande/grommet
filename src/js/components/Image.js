// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import Label from './Label';

const CLASS_ROOT = 'image';

export default class Image extends Component {
  render () {
    let { alt, caption, className, full, id, size, src, title, mask } = this.props;
    let classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--full`]: typeof full === 'boolean' && full,
        [`${CLASS_ROOT}--full-${full}`]: typeof full === 'string',
        [`${CLASS_ROOT}--mask`]: mask
      },
      className
    );

    const captionText = (typeof caption === 'string') ? caption : alt;
    const imgNode = (
      <img id={id} src={src} alt={alt} title={title} className={classes} />
    );

    const labelRoot = `${CLASS_ROOT}__caption`;
    const labelClasses = classnames(
      labelRoot,
      {
        [`${labelRoot}--${size}`]: size
      }
    );
    return caption && captionText ? (
      <span className={`${CLASS_ROOT}__container`}>
        {imgNode}
        <Label className={labelClasses}>
          {captionText}
        </Label>
      </span>
    ) : (
      imgNode
    );
  }
};

Image.propTypes = {
  alt: PropTypes.string,
  caption: PropTypes.oneOfType([
    PropTypes.bool, PropTypes.string
  ]),
  className: PropTypes.string,
  full: PropTypes.oneOf([true, 'horizontal', 'vertical', false]),
  id: PropTypes.string,
  mask: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'thumb']),
  src: PropTypes.string,
  title: PropTypes.string
};

Image.defaultProps = {
  size: 'medium'
};
