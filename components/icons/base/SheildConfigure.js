// (C) Copyright 2014-2015 Hewlett-Packard Development Company

var React = require('react');
var IntlMixin = require('../../../mixins/GrommetIntlMixin');

var Icon = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string,
    a11yTitleId: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function () {
    return {
      a11yTitleId: 'sheild-configure-title'
    };
  },

  render: function() {
    var className = 'control-icon control-icon-sheild-configure';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "sheild-configure");

    return (
      <svg version="1.1" viewBox="0 0 48 48" width="48px" height="48px" className={className} aria-labelledby={this.props.a11yTitleId}><title id={this.props.a11yTitleId}>{a11yTitle}</title><g id="sheild-configure"><rect id="_x2E_svg_221_" x="0" y="0" fill="none" width="48" height="48"/><path fill="none" stroke="#231F20" strokeWidth="2" strokeMiterlimit="10" d="M24.0002,26.15c-1.6545,0-3-1.3458-3-3&#xA;&#x9;&#x9;s1.3455-3,3-3s3,1.3458,3,3S25.6547,26.15,24.0002,26.15z M30.0002,23.15l-3,0.0001 M28.2428,27.3926l-2.1214-2.1212 M24,26.15&#xA;&#x9;&#x9;l0.0001,3 M21.8787,25.2712l-2.1212,2.1214 M18.0002,23.15h3 M21.8788,21.0287l-2.1213-2.1213 M24.0002,20.15v-3 M26.1215,21.0287&#xA;&#x9;&#x9;l2.1213-2.1213 M24.0002,13.15l-9,4.4v2.864c0,4.2846,1.8322,8.3646,5.0345,11.2111l3.9655,3.2249l3.9655-3.2249&#xA;&#x9;&#x9;c3.2023-2.8465,5.0345-6.9266,5.0345-11.2111V17.55L24.0002,13.15z"/></g></svg>
    );
  }

});

module.exports = Icon;