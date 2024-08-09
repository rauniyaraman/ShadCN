import React, { useState } from 'react';

const MixtureComponent = ({ names }) => {

  return (
    <div>
      {names?.map((name, index) => (
        <h1 key={index} className='text-[60px]'>hello {name}</h1>
      ))}
    </div>
  );
};

export default MixtureComponent;