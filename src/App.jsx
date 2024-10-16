import { useEffect, useState } from 'react'
import './App.css';
import Navbar from './assets/Navbar';

const App = () => {
  const [theme,settheme]=useState('light');
  const[jock,setjock]=useState({});
  useEffect(()=>{
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setjock(data);
    })
    .catch(err => console.log(err));
  }, [])
  return (
    <div className={`container ${theme}`} >
      <Navbar theme={theme} settheme={settheme} />
      <div className='jock-main'>
        <div className='jock'>
          <h1>Today Jokes</h1>
          <p>{jock.setup}</p>
          <p>{jock.punchline}</p>
          <button onClick={()=> window.location.reload(false)}>Next</button>
        </div>
      </div>
      

      <div className='footer'> 
        <p> Copyright &#169; 2024, Created by Amit.</p>
      </div>
    </div>
  )
}

export default App