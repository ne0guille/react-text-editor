import React from 'react';

import { FORMATS } from '../shared/constants';

const getStyle = format => {
  switch (format) {
    case FORMATS.TEXT.b:
      return { fontWeight: FORMATS.TEXT.b }
      case FORMATS.TEXT.i:
      return { fontStyle: FORMATS.TEXT.i }
      case FORMATS.TEXT.u:
      return { textDecoration: FORMATS.TEXT.u }
    default:
      break;
  }
};

export const Text = ({ children, format }) => {
  const style = getStyle(format)
        return (
            <div id="text" style={style}>
              {children}
            </div>
        );
}

export default Text;
