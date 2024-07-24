import React from 'react';

const Loading = ({ isLoading }) => {
  return <div className="loading">{isLoading && <span>Loading...</span>}</div>;
};

export default Loading;
