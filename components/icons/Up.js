// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

'use strict';

var React = require('react');

var Up = React.createClass({
  displayName: 'Up',

  render: function render() {
    var className = 'control-icon control-icon-up';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }
    return React.createElement(
      'svg',
      { className: className, viewBox: '0 0 48 48', version: '1.1' },
      React.createElement(
        'g',
        { fill: 'none' },
        React.createElement('polyline', { strokeWidth: '2', points: '14,20.9 24,13 34,21 ' }),
        React.createElement('path', { strokeWidth: '2', d: 'M24,13.3C24,36,24,36,24,36' })
      )
    );
  }

});

module.exports = Up;