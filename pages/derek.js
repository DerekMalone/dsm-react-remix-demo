import React from 'react';
import Loading from '../components/Loading';

export default function derek() {
  return (
    // Loading() - this still technically works due to it still being JS, we just can't pass props.
    <div className="red-text">
      <Loading />
      <div>Derek</div>
    </div>
  );
}
