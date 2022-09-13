import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { queryData } from './query/queryData';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    queryData(setData);
  }, []);

  return (
    <div className='App'>
      <p></p>
    </div>
  );
}

export default App;
