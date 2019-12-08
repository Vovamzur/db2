import React, { useState, useEffect } from 'react';

const Test = () => {
  const [res, setRes] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(response => response.text())
      .then(res => setRes(res))
      .catch(console.error)
  }, [])

  return (
    <div>
      Test
      <pre>{res}</pre>
    </div>
  )
}

export default Test;
