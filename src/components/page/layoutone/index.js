import React from 'react';

const LayoutOne = ({ children }) => {
  return (
    <div>
      <header>Header for Layout One</header>
      <main>{children}</main>
      <footer>Footer for Layout One</footer>
    </div>
  );
};

export default LayoutOne;