import React from 'react';
import { connect } from 'react-redux';

function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default connect()(DeleteBtn);
