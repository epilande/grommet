// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

'use strict';

var React = require('react');
var FormattedMessage = require('../../FormattedMessage');

var CriticalStatus = React.createClass({
  displayName: 'CriticalStatus',

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  render: function render() {
    var className = 'status-icon status-icon-critical';
    var a11yTitle = this.props.a11yTitle;
    if (this.props.className) {
      className += ' ' + this.props.className;
    }
    if (typeof a11yTitle === "undefined") {
      // this.props.a11yTitle emplty string is an acceptable value. Only if undefined
      // should use the default title value.
      a11yTitle = 'Critical';
    }
    var criticalTitleId = 'critical-title';
    return React.createElement(
      'svg',
      { className: className, viewBox: '0 0 24 24', 'aria-labelledby': criticalTitleId, role: 'img', version: '1.1' },
      React.createElement(
        'title',
        { id: criticalTitleId },
        React.createElement(FormattedMessage, { id: a11yTitle, defaultMessage: a11yTitle })
      ),
      React.createElement(
        'g',
        { className: "status-icon__base", stroke: 'none' },
        React.createElement('path', { role: 'presentation', d: 'M12,0 L24,12 L12,24 L0,12 Z' })
      ),
      React.createElement(
        'g',
        { className: "status-icon__detail", fill: 'none' },
        React.createElement('path', { role: 'presentation', d: 'M8,8 L16,16', strokeWidth: '2' }),
        React.createElement('path', { role: 'presentation', d: 'M8,16 L16,8', strokeWidth: '2' })
      )
    );
  }

});

module.exports = CriticalStatus;