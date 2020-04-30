import React, { useCallback, useState } from 'react';
import Launches from './components/Launches/Launches';
import Launch from './components/Launch/Launch';

const App = () => {
  const [id, setId] = useState(42);
  const clickHandler = useCallback((newId) => setId(newId), []);
  return (
    <>
      <nav className='navbar navbar-light bg-light mb-3'>
        <div className='container'>
          <span className='navbar-brand mb-0 h1'>SpaceX Launches</span>
        </div>
      </nav>
      <main className='container mb-3' role='main'>
        <div className='row'>
          <div className='col-sm-4'>
            <Launches {...{ clickHandler, id }} />
          </div>
          <div className='col-sm-8'>
            <Launch id={id} />
          </div>
        </div>
      </main>
      <footer className='py-3 bg-dark text-muted'>
        <div className='container'>
          <p className='float-right'>
            <a href='#'>Back to top</a>
          </p>
          <p>SpaceX Launches</p>
        </div>
      </footer>
    </>
  );
};

export default App;
