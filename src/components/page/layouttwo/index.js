import React from 'react';

const LayoutTwo = ({ children }) => {
  return (
    <div>
      <nav>Navigation for Layout Two</nav>
      <main>{children}</main>
      <footer>Footer for Layout Two</footer>
    </div>
  );
};

export default LayoutTwo;