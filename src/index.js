import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function Welcome (props) {  
  return (
    <p>Hello {props.user.name} {props.user.surname}!</p>
  )
}

// class Welcome extends React.Component {
//   render () {
//     return <p>Привет, {this.props.user.name} {this.props.user.surname}!</p>
//   }
// }

function App (props) {
  const users = [
    { name: "Алексей", surname: "Данчин" },
    { name: "Серьгей", surname: "Окса" },
    { name: "Дмитрий", surname: "Фигма" },
  ]

  return (
    <div>
      <Welcome user={users[0]} />
      <Welcome user={users[1]} />
      <Welcome user={users[2]} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)


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
