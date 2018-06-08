import React from 'react';
import { findDOMNode } from 'react-dom';

import getDataAttr from './getDataAttr';

export interface WithAttributesProps {
  render: (data?: any) => React.ReactNode;
  [key: string]: any;
}

class WithAttributes extends React.Component<WithAttributesProps, any> {
  componentDidMount() {
    const el = findDOMNode(this);
    const props = getDataAttr(this.props);

    if (el) {
      Object.keys(getDataAttr(props)).forEach(key => {
        el.setAttribute(key, props[key]);
      });
    }
  }
  render() {
    return this.props.render();
  }
}

export default WithAttributes;
