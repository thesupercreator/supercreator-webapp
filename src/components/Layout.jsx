import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ marginTop: '80px' }}>{children}</div>
    </>
  );
};

export default Layout;