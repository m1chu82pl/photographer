import React, {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import firebase from './firebase'; 

function App() {

useEffect(() => {
  const messaging = firebase.messaging();
  messaging.requestPermission().then(()=>{
    console.log('have permission');
    return messaging.getToken();
  })
  .then((token) => {
    console.log(token);
  })
  .catch((error) => console.log(error))
})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
