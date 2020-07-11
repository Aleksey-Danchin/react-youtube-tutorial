import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);


// const ul1 = (
//   <ul>
//     <li>Яблоко</li>
//     <li>Банан</li>
//     <li>Груша</li>
//   </ul>
// )

// const ul2 = (
//   <ul>
//     <li>Яблоко</li>
//     <li>Банан</li>
//     <li>Апельсин</li>
//   </ul>
// )

// ReactDOM.render(ul1, document.querySelector('#root'))

// setTimeout(
//   () => {
//     ReactDOM.render(ul2, document.querySelector('#root'))
//   },
//   5000
// )


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
