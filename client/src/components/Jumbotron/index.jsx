import React from 'react';
import { connect } from 'react-redux';

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default connect()(Jumbotron);
