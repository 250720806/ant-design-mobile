import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import getDataAttr from './getDataAttr';

const withAttributes = (attributes: {[key: string]: any}) => (Target: React.ComponentType) => {
  class WithAttributes extends Component {
    componentDidMount() {
      const el = findDOMNode(this);

      if (el) {
        Object.keys(getDataAttr(attributes)).forEach(key => {
          el.setAttribute(key, attributes[key]);
        });
      }
    }

    render() {
      return <Target {...this.props} />;
    }
  }

  return WithAttributes;
};

export default withAttributes;
