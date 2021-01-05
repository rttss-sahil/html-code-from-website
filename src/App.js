import React from 'react';
// import ReactDOM from 'react-dom';

function App() {
  const src = fetch('https://rttss.netlify.app');
  return (
    <div className="App">
      {console.log(src)}
    </div>
  );
}

export default App;
