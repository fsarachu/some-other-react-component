import React from 'react';

const Index = ({ name = 'guest' }) => {
  return (
    <div>
      <h1>Hello, {name}! This package is scoped 😎</h1>
    </div>
  );
};

export default Index;
